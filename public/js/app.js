'use strict';

angular.module('app', ['ngRoute','ngResource', 'ngLodash']).config(['$routeProvider', '$locationProvider', '$httpProvider',
function($routeProvider, $locationProvider, $httpProvider) {

  $httpProvider.interceptors.push('authInterceptor');

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
