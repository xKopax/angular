angular.module("app").controller('categoriaController', function ($scope, CategoriaService, $location, $routeParams, lodash) {

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
