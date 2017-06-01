app.controller('menuCtrl', function($scope, $state, servLogin) {
    $scope.usuario= servLogin.usuario;
});