angular.module("app").controller('authController', function ($scope, AuthService, $location) {

	$scope.message = null;

	$scope.login = function (usuario) {
        AuthService.create(usuario).success(function (data) {
            $.jStorage.set('authorization', data.token);
            delete $scope.message;
            $location.path('/');
        }).error(function (data, status) {
            $.jStorage.set('authorization', null);
            if (status == 401)
                $scope.message = "Usuário Inválido.";
            else
                $scope.message = "Aconteceu um problema: " + data.message;
        });
    };

});