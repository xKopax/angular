angular.module("app").controller('anuncioController', function ($scope, AnuncioService, CategoriaService, PerguntaService, $location, $routeParams, lodash) {
  var p = 1;
  var busy = false;

  $scope.nextPage = function(){
    if (busy) return;
    busy = true;
    AnuncioService.query({page:p}).$promise.then(
      function(data){
        for (var i = 0; i < data.length; i++) {
          if ($scope.categorias.indexOf(data[i]) == 0)
            $scope.categorias.push(data[i]);
        }
        p++;
        busy = false;
      }
    ).catch(function(error){
      console.log(error);
    })
  }

  console.log($scope.categorias);

  $scope.editAnuncio = function (anuncioId) {
      $location.path('/anuncio/detail/' + anuncioId);
  };

  $scope.deleteAnuncio = function (anuncioId) {
      AnuncioService.delete({ id: anuncioId }, function(){
        lodash.remove($scope.anuncios, { id: anuncioId });
      });
  };

  $scope.createNewAnuncio = function () {
      $location.path('/anuncio/new');
  };

  $scope.cancel = function () {
    $location.path('/anuncios');
  };

  function loadAnuncios(){
    $scope.anuncios = AnuncioService.query();
    $scope.categorias = CategoriaService.query();
  }

  if($routeParams.id) {
    $scope.anuncio = AnuncioService.show({id: $routeParams.id});
  } else {
    loadAnuncios();
  }

  $scope.save = function () {
    !$routeParams.id ? incluir() : alterar();
  }

  incluir = function(){
    $scope.anuncio.usuario = {"id": 7};
    AnuncioService.create($scope.anuncio).$promise.then(function(data){
      $location.path('/anuncios');
    }).catch(function(error){
      console.log(error);
    })
  }

  alterar = function(){
    AnuncioService.update($scope.anuncio).$promise.then(function(data){
      $location.path('/anuncios');
    }).catch(function(error){
      console.log(error);
    })
  }

  $scope.perguntar = function(){
    $scope.pergunta.anuncio = {"id": $routeParams.id};
    $scope.pergunta.usuario = {"id": 7};
    PerguntaService.create($scope.pergunta).$promise.then(function(data){
      $scope.pergunta ="";
      $scope.anuncio = AnuncioService.show({id: $routeParams.id});
    }).catch(function(error){
      console.log(error);
    })
     console.log("perguntando");
  }

  $scope.buscar = function(){
    console.log($scope.search);
  }

});
