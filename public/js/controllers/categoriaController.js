angular.module("app").controller('categoriaController', function ($scope, CategoriaService, $location, $routeParams, lodash,$mdDialog) {
  var p = 1;
  var busy = false;

  $scope.nextPage = function(){
    if (busy) return;
    busy = true;
    CategoriaService.query({page:p}).$promise.then(
      function(data){
        for (var i = 0; i < data.length; i++) {
          if ($scope.categorias.indexOf(data[i]) == 0)
            $scope.categorias.push(data[i]);
        }
        p++;
        busy = false;
      }
    ).catch(function(error){
      console.log(error);
    })


  }

  $scope.editCategoria = function (categoriaId) {
      $location.path('/categoria/detail/' + categoriaId);
  };

  $scope.deleteCategoria = function (ev,categoriaId) {
    var confirm = $mdDialog.confirm()
      .parent(angular.element(document.body))
      .title('Atenção!')
      .content('Deseja excluir o registro?')
      .ariaLabel('Lucky day')
      .ok('Sim')
      .cancel('Não')
      .targetEvent(ev);

    $mdDialog.show(confirm).then(function() {
      CategoriaService.delete({ id: categoriaId }, function(){
        lodash.remove($scope.categorias, { id: categoriaId });
      });
    }, function() {
      console.log('faz nada =)');
    });
  };


  $scope.createNewCategoria = function () {
      $location.path('/categoria/new');
  };

  $scope.cancel = function () {
    $location.path('/categorias');
  };

  function loadCategorias(){
    $scope.categorias = CategoriaService.query();
  }


  if($routeParams.id) {
    $scope.categoria = CategoriaService.show({id: $routeParams.id});
  } else {
    loadCategorias();
  }

  $scope.save = function () {
    !$routeParams.id ? incluir() : alterar();
  }

  incluir = function(){
    CategoriaService.create($scope.categoria).$promise.then(function(data){
      $location.path('/categorias');
    }).catch(function(error){
      console.log(error);
    })
  }

  alterar = function(){
    CategoriaService.update($scope.categoria).$promise.then(function(data){
      $location.path('/categorias');
    }).catch(function(error){
      console.log(error);
    })
  }

   $scope.loop = function(){
    console.log('data');
    for (var i = 0; i < 500; i++) {
      console.log('data');
      CategoriaService.create({tipo: 'Categoria '+1}).$promise.then(function(data){
        console.log(data);
      }).catch(function(error){
        console.log(error);
      });
    };
  }

});
