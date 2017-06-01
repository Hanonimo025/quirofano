app.controller('reservacionCtrl',
  function ($scope, $state, servMensajes, servReservacion) {
    $scope.reservacion = {};
    $scope.estados = [{
      "id": 1,
      "nombre": "Aguascalientes"
    }, {
      "id": 2,
      "nombre": "Baja California"
    }, {
      "id": 3,
      "nombre": "Baja California Sur"
    }, {
      "id": 4,
      "nombre": "Campeche"
    }, {
      "id": 1,
      "nombre": "Chiapas"
    }, {
      "id": 2,
      "nombre": "Chihuahua"
    }, {
      "id": 3,
      "nombre": "Coahuila"
    }, {
      "id": 4,
      "nombre": "Colima"
    }, {
      "id": 1,
      "nombre": "Distrito Federal"
    }, {
      "id": 2,
      "nombre": "Durango"
    }, {
      "id": 3,
      "nombre": "Estado de México"
    }, {
      "id": 4,
      "nombre": "Guanajuato"
    }, {
      "id": 1,
      "nombre": "Guerrero"
    }, {
      "id": 2,
      "nombre": "Hidalgo"
    }, {
      "id": 3,
      "nombre": "Jalisco"
    }, {
      "id": 4,
      "nombre": "Michoacan"
    }, {
      "id": 1,
      "nombre": "Morelos"
    }, {
      "id": 2,
      "nombre": "Nayarit"
    }, {
      "id": 3,
      "nombre": "Nuevo Leon"
    }, {
      "id": 4,
      "nombre": "Oaxaca"
    }, {
      "id": 1,
      "nombre": "Puebla"
    }, {
      "id": 2,
      "nombre": "Querétaro"
    }, {
      "id": 3,
      "nombre": "Quintana Roo"
    }, {
      "id": 4,
      "nombre": "San Luis Potosi"
    }, {
      "id": 1,
      "nombre": "Sinaloa"
    }, {
      "id": 2,
      "nombre": "Sonora"
    }, {
      "id": 3,
      "nombre": "Tabasco"
    }, {
      "id": 4,
      "nombre": "Tamaulipas"
    }, {
      "id": 1,
      "nombre": "Tlaxcala"
    }, {
      "id": 2,
      "nombre": "Veracruz"
    }, {
      "id": 3,
      "nombre": "Yucatan"
    }, {
      "id": 4,
      "nombre": "Zacatecas"
    }];

    /*  $scope.hospitales = [{
        "id": 1,
        "nombre": "Hospitaria"
      }, {
        "id": 2,
        "nombre": "Muguerza"
      }, {
        "id": 3,
        "nombre": "Hospital OCA"
      }, {
        "id": 4,
        "nombre": "Hospital SWISS"
      }, {
        "id": 5,
        "nombre": "Zanitas"
      }, {
        "id": 6,
        "nombre": "Hospital Tec"
      }];*/

    servReservacion.getHospitals().then(function () {
      $scope.hospitales = servReservacion.hospitales;
    });
    $scope.horas = [{
      "id": 1,
      "descripcion": '-1'
    }, {
      "id": 2,
      "descripcion": '1-3'
    }, {
      "id": 3,
      "descripcion": '3-6'
    }, {
      "id": 4,
      "descripcion": '+6'
    }];
    $scope.cirugias = [{
      id: 1,
      des: 'Cardiología'
    }, {
      id: 2,
      des: 'Cirugía General'
    }, {
      id: 3,
      des: 'Endocrinología'
    }, {
      id: 4,
      des: 'Gastroenterología'
    }, {
      id: 5,
      des: 'Geriatría'
    }, {
      id: 6,
      des: 'Ginecología y Obstetricia'
    }, {
      id: 7,
      des: 'Hematología'
    }, {
      id: 8,
      des: 'Neurología'
    }, {
      id: 9,
      des: 'Oftalmología'
    }, {
      id: 10,
      des: 'Oncología'
    }, {
      id: 11,
      des: 'Otorrinolaringología'
    }, {
      id: 12,
      des: 'Proctología'
    }, {
      id: 13,
      des: 'Reumatología'
    }, {
      id: 14,
      des: 'Traumatología y Ortopedia'
    }, {
      id: 15,
      des: 'Urología'
    }];

    $scope.EnviaReservacion = function (reservacion) {
      //console.log("Reservacion");
      //console.log(formatDate(reservacion.fecha));
      var data = {};
      data.id_doctor = doctor.id;
      data.estado = reservacion.estado;
      data.id_sucursal_hospital = reservacion.hospital.idHospital;
      data.fecha = formatDate(reservacion.fecha)
      data.tiempo_cirugia = reservacion.horas.descripcion;
      data.cirugia = reservacion.cirugia.des;
      data.paciente = reservacion.nombrePaciente;
      data.diagnostico = reservacion.diagnostico;
      data.forma_pago = "Efectivo";
      data.anestesiologo = reservacion.anestesiologo;
      data.instrumentos = reservacion.instrumentos;
      data.origen_mobile = true;
      console.log("Data");
      console.log(data);
      
      servReservacion.postReservacion(data).then(function () {
        console.log(servReservacion.respuesta);
        servMensajes.informativo("Aviso", "Datos enviados Correctamente");
        $state.go('menu.home');
      });

    };

    function formatDate(value) {
       return value.getFullYear()+ "/" + value.getMonth() + 1  + "/" + value.getDate() + " " + value.getHours() + ":" + value.getMinutes();
      //return value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getFullYear() + " " + value.getHours() + ":" + value.getMinutes();
    }
  });
