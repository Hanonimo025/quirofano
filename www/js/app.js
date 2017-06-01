// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ion-datetime-picker', 'ionic-datetimepicker'])
var doctor={};

app.run(function($ionicPlatform, $ionicPickerI18n) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  $ionicPickerI18n.weekdays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"];
  $ionicPickerI18n.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  $ionicPickerI18n.ok = "OK";
  $ionicPickerI18n.cancel = "Cancelar";
  $ionicPickerI18n.okClass = "button-positive";
  $ionicPickerI18n.cancelClass = "button-stable";

});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html',
     controller: 'menuCtrl'
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.reservacion', {
    url: '/reservacion',
    views: {
      'menuContent': {
        templateUrl: 'templates/reservacion.html',
        controller: 'reservacionCtrl'
      }
    }
  })

   .state('menu.perfil', {
    url: '/perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

   .state('menu.historial', {
    url: '/historial',
    views: {
      'menuContent': {
        templateUrl: 'templates/historial.html',
        controller: 'homeCtrl'
      }
    }
  })

   .state('menu.pagos', {
    url: '/pagos',
    views: {
      'menuContent': {
        templateUrl: 'templates/pagos.html',
        controller: 'homeCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/login');
});
/*app.controller('loginCtrl', function($scope, $state) {
  $scope.entrar = function() {
    $state.go('menu.home');
  };
});*/




app.controller('homeCtrl2', function($scope, $state, $ionicSideMenuDelegate, servReservacion) {
  $scope.dateValue = new Date();
  $scope.horas = [{
    id:1,
    des:'-1'
  },{
    id:2,
    des:'1-3'
  },{
    id:3,
    des:'3-6'
  },{
    id:4,
    des:'+6'
  }];
  $scope.cirugias = [{
    id:1,
    des:'Neuroendoscopia'
  },{
    id:2,
    des:'Glaucoma'
  },{
    id:3,
    des:'Cornea'
  },{
    id:4,
    des:'Implanto refractiva'
  },{
    id:5,
    des:'Catarata'
  },{
    id:6,
    des:'Oculoplastia'
  },{
    id:7,
    des:'Cranectomia'
  }];
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});

app.factory('servReservacion',['$http', 
  function($http){
    var servReservacion = {};
    servReservacion.reservaciones = [];
    servReservacion.reservacion={};
    return servReservacion;
}]);