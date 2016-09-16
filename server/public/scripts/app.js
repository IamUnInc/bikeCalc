var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/calc', {
            templateUrl: '/views/templates/calc.html',
            controller: 'CalcController',
            // controller: 'ModalInstanceCtrl',
            // controller: 'CustomerController'
        })
        .when('/customers', {
            templateUrl: '/views/templates/customers.html',
            controller: 'CustomerController'
        })
        .otherwise({
            redirectTo: '/calc'
        });




}]);
