angular.module("app").controller('usuarioController', function ($scope, UsuarioService, $location, $routeParams, lodash) {
  var p = 1;
  var busy = false;

  $scope.editUsuario = function (usuarioId) {
      $location.path('/usuario/detail/' + usuarioId);
  };

  $scope.deleteUsuario = function (usuarioId) {
      UsuarioService.delete({ id: usuarioId }, function(){
        lodash.remove($scope.usuarios, { id: usuarioId });
      });
  };

  $scope.createNewUsuario = function () {
      $location.path('/usuario/new');
  };

  $scope.cancel = function () {
    $location.path('/usuarios');
  };

  function loadUsuarios(){
    $scope.usuarios = UsuarioService.query();
  }

  $scope.nextPage = function(){
    if (busy) return;
    busy = true;
    UsuarioService.query({page:p}).$promise.then(
      function(data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          $scope.usuarios.push(data[i]);
        }
        p++;
        busy = false;
      }
    ).catch(function(error){
      console.log(error);
    })


  }

  if($routeParams.id) {
    $scope.usuario = UsuarioService.show({id: $routeParams.id});
  } else {
    loadUsuarios();
  }

  $scope.save = function () {
    !$routeParams.id ? incluir() : alterar();
  }

  incluir = function(){
    UsuarioService.create($scope.usuario).$promise.then(function(data){
      $location.path('/usuarios');
    }).catch(function(error){
      console.log(error);
    })
  }

  alterar = function(){
    UsuarioService.update($scope.usuario).$promise.then(function(data){
      $location.path('/usuarios');
    }).catch(function(error){
      console.log(error);
    })
  }

});
