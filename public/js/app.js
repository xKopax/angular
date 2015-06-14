'use strict';

angular.module('app', ['ngRoute','ngResource']).config(['$routeProvider', '$locationProvider', '$httpProvider',
function($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'homeController'
  }).when('/categoria/new',{
    controller: 'categoriaController',
    templateUrl: 'partials/categoria/categoria.html'
  }).when('/categoria/detail/:id',{
    controller: 'categoriaController',
    templateUrl: 'partials/categoria/categoria.html'
  }).when('/categorias',{
    controller: 'categoriaController',
    templateUrl: 'partials/categoria/categorias.html'
  }).otherwise({
    redirectTo: '/'
  });

}]);
