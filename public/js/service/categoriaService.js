angular.module("app").factory('CategoriaService', function($resource) {
  return $resource('http://104.131.233.41:777/api/v1/categorias');
});
