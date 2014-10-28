angular.module('TakemehomeApp')
    .controller('DogCtrl', function ($scope, Restangular) {
			Restangular.all('dogs').getList()
				.then(function(data) {
				  $scope.dogs  = data; 
				}) 
    });