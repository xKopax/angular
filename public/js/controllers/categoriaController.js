angular.module("app").controller('categoriaController', function ($scope, CategoriaService, $location, $routeParams, lodash) {
  var p = 1;
  var busy = false;

  $scope.editCategoria = function (categoriaId) {
      $location.path('/categoria/detail/' + categoriaId);
  };

  $scope.deleteCategoria = function (categoriaId) {
      CategoriaService.delete({ id: categoriaId }, function(){
        lodash.remove($scope.categorias, { id: categoriaId });
      });
  };

  $scope.createNewCategoria = function () {
      $location.path('/categoria/new');
  };

  $scope.cancel = function () {
    $location.path('/categorias');
  };

  function loadCategorias(){
    $scope.categorias = CategoriaService.query();
  }

  $scope.nextPage = function(){
    if (busy) return;
    busy = true;
    CategoriaService.query({page:p}).$promise.then(
      function(data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          $scope.categorias.push(data[i]);
        }
        p++;
        busy = false;
      }
    ).catch(function(error){
      console.log(error);
    })


  }

  if($routeParams.id) {
    $scope.categoria = CategoriaService.show({id: $routeParams.id});
  } else {
    loadCategorias();
  }

  $scope.save = function () {
    !$routeParams.id ? incluir() : alterar();
  }

  incluir = function(){
    CategoriaService.create($scope.categoria).$promise.then(function(data){
      $location.path('/categorias');
    }).catch(function(error){
      console.log(error);
    })
  }

  alterar = function(){
    CategoriaService.update($scope.categoria).$promise.then(function(data){
      $location.path('/categorias');
    }).catch(function(error){
      console.log(error);
    })
  }

});
