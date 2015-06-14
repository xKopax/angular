angular.module("app").controller('categoriaController', function ($scope, CategoriaService, $location,$routeParams) {

  $scope.editCategoria = function (categoriaId) {
      $location.path('/categoria/detail/' + categoriaId);
  };

  $scope.deleteCategoria = function (categoriaId) {
      CategoriaService.delete({ id: categoriaId },loadCategorias);
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
    !$routeParams.id ? CategoriaService.create($scope.categoria) : CategoriaService.update($scope.categoria);

    $location.path('/categorias');
  }
  
});
