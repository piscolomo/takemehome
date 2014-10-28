angular.module('TakemehomeApp')
    .controller('DogCtrl', function ($scope, $http) {
    	$http.get("api/dogs").success(function(data){
				$scope.dogs = data;
    	});
        
    });