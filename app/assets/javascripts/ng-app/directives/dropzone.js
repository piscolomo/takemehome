angular.module('TakemehomeApp')
	.directive("dropzone",function(){
  	return {
    	restrict: "A",
    	link: function($scope){
    		Dropzone.autoDiscover = false;
				var myDropzone = new Dropzone("#my-dropzone");
				myDropzone.on("success", function(file) {
					$scope.$apply(function(){$scope.dog.image = file.name;});
			  });
    	}
    }
  });