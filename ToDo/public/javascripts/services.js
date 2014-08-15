angular.module('todoServices', [ 'ngResource' ]).factory('ToDO',
		function($resource) {
			return $resource('todo', {}, {
				query : {
					method : 'GET',
					
					isArray : true
				}
			})
		})