angular.module('dataService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Data', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/xsapp');
			}
		}
	}]);