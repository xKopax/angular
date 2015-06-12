angular.module("app").controller('categoriaController', function ($scope, CategoriaService) {

  var categorias = CategoriaService.query(function() {
    console.log(categorias);
  });

});
