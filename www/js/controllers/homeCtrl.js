app.controller('homeCtrl', function ($scope, $state, $ionicSideMenuDelegate, servReservacion, servLogin) {

  var reservaciones = [];
  console.log(doctor);
  servReservacion.getAll(doctor.id).then(function () {
    //console.log(servReservacion.reservaciones);
    normalizaDatos();
    $scope.reservaciones = servReservacion.reservaciones;
  });

  function normalizaDatos() {
    for (let item of servReservacion.reservaciones) {
      //console.log(item.fecha);
      item.fecha = Date.parse(item.fecha);
      //console.log(item.fecha);
    }

    //console.log(servReservacion.reservaciones);
  }
  $scope.toggleLeft = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.haceVisible = function (estado) {
    Object.defineProperty(servReservacion.reservacion, "estado", {
      value: estado.nombre,
      writable: true
    });
    $scope.visibles = true;
    console.log(servReservacion.reservacion);
  };
  $scope.siguiente = function () {
    servReservacion.reservacion = {
      estado: $scope.estadoSel,
      hospital: $scope.choice
    }
    console.log(servReservacion.reservacion);
    $state.go('menu.home2');
  }
});
