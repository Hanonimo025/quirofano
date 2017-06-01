app.controller('loginCtrl', function($scope, $state,$q, servLogin) {
  $scope.vm={};
  $scope.entrar = function(vm) {
    servLogin.getUser(vm).then(function(){
        //console.log("Usuario Login");
        doctor = servLogin.usuario;
        //console.log(servLogin.usuario);
        $state.go('menu.home');
    });
  };
});