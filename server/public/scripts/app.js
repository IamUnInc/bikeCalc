var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/calc', {
            templateUrl: '/views/templates/calc.html',
            controller: 'CalcController'
        })
        .when('/customers', {
            templateUrl: '/views/templates/customers.html',
            controller: 'CustomerController'
        })
        .otherwise({
            redirectTo: '/calc'
        });

}]);
