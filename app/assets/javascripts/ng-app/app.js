angular
    .module('TakemehomeApp', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'dogs.html',
                controller: 'DogCtrl'
            });
        //$locationProvider.html5Mode(true);
    });