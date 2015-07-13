'use strict';

angular.module('app', ['ngRoute','ngResource', 'ngLodash','infinite-scroll', 'confirmClick','ngMaterial','ui.utils.masks' ]).config(['$routeProvider', '$locationProvider', '$httpProvider',
function($routeProvider, $locationProvider, $httpProvider) {

  $httpProvider.interceptors.push('authInterceptor');

  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'homeController'
  })


  .when('/categoria/new',{
    controller: 'categoriaController',
    templateUrl: 'partials/categoria/categoria.html'
  }).when('/categoria/detail/:id',{
    controller: 'categoriaController',
    templateUrl: 'partials/categoria/categoria.html'
  }).when('/categorias',{
    controller: 'categoriaController',
    templateUrl: 'partials/categoria/categorias.html'
  })


  .when('/usuario/new',{
    controller: 'usuarioController',
    templateUrl: 'partials/usuario/usuario.html'
  }).when('/usuario/detail/:id',{
    controller: 'usuarioController',
    templateUrl: 'partials/usuario/usuario.html'
  }).when('/usarios',{
    controller: 'usuarioController',
    templateUrl: 'partials/usuario/usuarios.html'
  })

  .when('/anuncio/new',{
    controller: 'anuncioController',
    templateUrl: 'partials/anuncio/anuncio.html'
  }).when('/anuncio/detail/:id',{
    controller: 'anuncioController',
    templateUrl: 'partials/anuncio/detalhe.html'
  }).when('/anuncios',{
    controller: 'anuncioController',
    templateUrl: 'partials/anuncio/anuncios.html'
  })

  .when('/auth',{
    controller: 'authController',
    templateUrl: 'partials/auth.html'
  }).otherwise({
    redirectTo: '/anuncios'
  });

}]);
