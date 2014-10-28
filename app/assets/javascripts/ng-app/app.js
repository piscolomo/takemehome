angular
    .module('TakemehomeApp', [
        'ngRoute',
        'templates',
        'restangular'
    ]).config(function ($routeProvider, $locationProvider, $httpProvider, RestangularProvider) {
        authToken = $("meta[name=\"csrf-token\"]").attr("content");
        $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

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