angular.module("app").factory('authInterceptor', function($q, $location) {

    var authInterceptor = {

        request: function(config){

            var token = $.jStorage.get('authorization');

            /*if(token)
              config.headers.Authorization = 'Bearer ' + token;
            else
              $location.path('/');*/

            console.log(token)

            return config;
        },

        responseError: function(resposta) {
            if (resposta.status == 401) {
              $location.path('/');
            }

            return $q.reject(resposta);
        }
    }

    return authInterceptor;
});
