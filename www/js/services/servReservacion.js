app.factory('servReservacion', ['$http',

  function ($http) {
    var servReservacion = {};
    servReservacion.reservacion = {};
    servReservacion.reservaciones = [];
    servReservacion.hospitales = [];
    servReservacion.respuesta = {};

    /***** Seccion de Metodos remotos ****/
    servReservacion.getAll = function (id_doctor) {
        //return $http.post('http://rest-quirofano-hanonimo.c9users.io/reservaciones')
          return $http.post('http://reservaciones.steeches.com/api/historialdr?id_doctor='+id_doctor)
          .success(function (data) {
            angular.copy(data, servReservacion.reservaciones);
            return servReservacion.reservaciones;
          });
    }

    servReservacion.getHospitals = function (id_doctor) {
        //return $http.post('http://rest-quirofano-hanonimo.c9users.io/reservaciones')
          return $http.post('http://reservaciones.steeches.com/api/consultahospitales?estado=Nuevo León')
          .success(function (data) {
            angular.copy(data, servReservacion.hospitales);
            return servReservacion.hospitales;
          });
    }

     servReservacion.postReservacion = function (reservacion) {
       console.log(JSON.stringify(reservacion));
        //return $http.post('http://rest-quirofano-hanonimo.c9users.io/reservaciones')
          return $http.post('http://reservaciones.steeches.com/api/registraevento ', reservacion)
          .success(function (data) {
            angular.copy(data, servReservacion.respuesta);
            return servReservacion.respuesta;
          });
    }
    return servReservacion;
  }
]);