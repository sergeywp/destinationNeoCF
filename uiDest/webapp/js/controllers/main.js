angular.module('dataController', [])

	// inject the data service factory into our controller
	.controller('mainController', ['$scope','$http','Data', function($scope, $http, Data) {
		$scope.formData = {};
		$scope.loading = true;

		Data.get()
			.success(function(data) {
				$scope.data = data.d.results;
			});
	}]);