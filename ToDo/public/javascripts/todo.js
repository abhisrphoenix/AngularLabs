(function() {
	var app = angular.module('todo', [ 'ngRoute' ]);

	app.controller('ToDoController', function($scope, $http) {

		$scope.goEdit = false;

		this.createToDo = function(todo) {
			var data = todo;
			$http.post('/todo', data).success(
					function(data, status, headers, config) {
						
						$scope.todos.push(data);

					}).error(function(data, status, headers, config) {

			});

			$scope.todo = {};
		}

		this.removeToDo = function(todo, index) {
			var data = todo;
			$http.post('/removetodo', data).success(
					function(data, status, headers, config) {
						//$scope.todos.splice(index, 1);
						TodoListCtrl($scope, $http);
						
					}).error(function(data, status, headers, config) {
						console.log(data)
			});

		}

		this.updateTodo = function(stat, todo) {
			
			if (stat != null && stat != "") {
				
				console.log(stat);

				var data = todo;
				$http.post('/updatetodo', data).success(
						function(data, status, headers, config) {
						//	$scope.todos.push(data);
							
							TodoListCtrl($scope, $http);

						}).error(function(data, status, headers, config) {

				});

				
			}else{
				goEdit = false;
			}
		}
		
		$scope.reloadToDo = function($scope, $http) {

			$http({
				method : 'GET',
				url : '/todo'
			}).success(function(data, status, headers, config) {

				$scope.todos = data;
				$scope.goEdit = false;
				
			}).error(function(data, status, headers, config) {
				console.log(data)
			});

		}

	});

	app.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/todo', {
			templateUrl : 'partials/list.html',
			controller : TodoListCtrl
		});

	} ]);

 	function TodoListCtrl($scope, $http) {

		$http({
			method : 'GET',
			url : '/todo'
		}).success(function(data, status, headers, config) {

			$scope.todos = data;
		}).error(function(data, status, headers, config) {
			console.log(data)
		});

	}

})();
