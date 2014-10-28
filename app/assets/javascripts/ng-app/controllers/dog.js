angular.module('TakemehomeApp')
    .controller('DogCtrl', function ($scope, Restangular) {

    	var baseDogs = Restangular.all('dogs');
			
			baseDogs.getList()
				.then(function(data) {
				  $scope.dogs  = data; 
				}) 

			$scope.registerDog = function(){
				baseDogs.post($scope.dog);
			}
    });