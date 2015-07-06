angular.module("app").controller('authController', function ($scope, AuthService, $location) {

	$scope.message = null;

	$scope.login = function (usuario) {
        AuthService.create(usuario).$promise.then(function(data){
            $.jStorage.set('authorization', data.token);
            delete $scope.message;
            $location.path('/');
        }).catch(function(error){
            $.jStorage.set('authorization', null);

            if (error.data.statusCode == 401)
                $scope.message = "Usuário Inválido.";
            else
                $scope.message = "Aconteceu um problema: " + error.data.message;
        });
    };

/*
		$scope.getUsuario = function(){
			var token = $.jStorage.get('authorization');
			AuthService.show(token).$promise.then(function(data){
				$scope.usuario = data;
			}).catch(function(error){
					$.jStorage.set('authorization', null);

					if (error.data.statusCode == 401)
							$scope.message = "Usuário Inválido.";
					else
							$scope.message = "Aconteceu um problema: " + error.data.message;
			});
		}
*/
});
