'use strict';

angular.module('app', ['ngRoute','ngResource']).config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/main.html',
        controller: 'homeController'
    }).when('/categoria',{
		controller: 'categoriaController',
		templateUrl: 'partials/categoria.html'
	}).otherwise({
        redirectTo: '/'
    });

}]);
