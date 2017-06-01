app.controller('perfilCtrl', function($scope, $state, servLogin) {
    servLogin.getUser().then(function(){
        console.log("Usuario Login");
        console.log(servLogin.usuario);
        $scope.usuario= servLogin.usuario;
    });
});