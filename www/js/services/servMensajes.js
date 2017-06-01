app.factory('servMensajes', ['$ionicPopup',
    function($ionicPopup) {

        var servMensaje = {};
        servMensaje.respuesta={};

        servMensaje.informativo =
            function(titulo,mensaje ) {
                let alertPopup = $ionicPopup.alert({
                    title: titulo,
                    template: mensaje
                });

                alertPopup.then(function(res) {
                       console.log("Evento resultado");
                });
            };

            servMensaje.confirmacion =
            function(titulo,mensaje ) {
                let ConfirmPopup = $ionicPopup.confirm({
                    title: titulo,
                    template: mensaje,
                });

                ConfirmPopup.then(function(res) {
                       //console.log(res);
                        return servMensaje.respuesta = res;
                });
            };
        return servMensaje;
    }
]);