angular
    .module('TakemehomeApp', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'dogs.html',
                controller: 'DogCtrl'
            })
            .when('/register-dog',{
                templateUrl: 'registerdog.html',
                controller: 'DogCtrl'
            })
            .otherwise({
                templateUrl: 'dogs.html',
            });
        //$locationProvider.html5Mode(true);
    });