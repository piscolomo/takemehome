angular
    .module('TakemehomeApp', [
        'ngRoute',
        'templates',
        'restangular'
    ]).config(function ($routeProvider, $locationProvider, RestangularProvider) {
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
         RestangularProvider.setBaseUrl('/api');
    });