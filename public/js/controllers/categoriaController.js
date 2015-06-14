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

  $scope.categoria = CategoriaService.show({id: $routeParams.id});

  $scope.save = function () {
    !$routeParams.id ? CategoriaService.create($scope.categoria) : CategoriaService.update($scope.categoria)
    CategoriaService.create($scope.categoria);
    $location.path('/categorias');
  }

  loadCategorias();
});
