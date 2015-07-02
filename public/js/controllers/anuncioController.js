angular.module("app").controller('anuncioController', function ($scope, AnuncioService, CategoriaService , $location, $routeParams, lodash) {
  var p = 1;
  var busy = false;

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

  $scope.nextPage = function(){
    if (busy) return;
    busy = true;
    AnuncioService.query({page:p}).$promise.then(
      function(data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          $scope.anuncios.push(data[i]);
        }
        p++;
        busy = false;
      }
    ).catch(function(error){
      console.log(error);
    })
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

});
