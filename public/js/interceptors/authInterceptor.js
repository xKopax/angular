angular.module("app").factory('authInterceptor', function($q, $location) {

    var authInterceptor = {

        request: function(config){

            config.headers.Authorization = 'Bearer ';

            return config;
        },

        responseError: function(resposta) {
            return $q.reject(resposta);
        }
    }

    return authInterceptor;
});
