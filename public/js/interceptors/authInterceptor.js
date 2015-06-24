angular.module("app").factory('authInterceptor', function($q, $location) {

    var authInterceptor = {

        request: function(config){

            var token = $.jStorage.get('authorization');

            /*if(token)
              config.headers.Authorization = 'Bearer ' + token;
            else
              $location.path('/');*/

            return config;
        },

        responseError: function(resposta) {
            if (resposta.status == 401) {
              $location.path('/auth');
            }

            return $q.reject(resposta);
        }
    }

    return authInterceptor;
});
