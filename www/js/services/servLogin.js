app.factory('servLogin', ['$http',

  function ($http) {
    var servLogin = {};
    servLogin.usuario = {};

    /***** Seccion de Metodos remotos ****/
    servLogin.getUser = function (usuario) {
      JSON.stringify(usuario);
       return $http.post('http://reservaciones.steeches.com/api/logindoctor', usuario)
        //return $http.post('http://rest-quirofano-hanonimo.c9users.io/login', usuario)
          .success(function (data) {
            angular.copy(data, servLogin.usuario);
            return servLogin.usuario;
          });
    }
    return servLogin;
  }
]);