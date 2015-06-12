angular.module("app").controller('categoriaController', ['$scope', 'CategoriaService', function ($scope, CategoriaService) {

  var categorias = CategoriaService.query(function() {
    console.log(categorias);
  });

}]);
