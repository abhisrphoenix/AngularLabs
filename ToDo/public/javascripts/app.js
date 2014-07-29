(function() {
	var app = angular.module('todo', [ 'ngRoute']);

	app.controller('ToDoController', function($scope) {
		
		//this.todos = {};
		
		this.createToDo = function(todo){
			
			
			$scope.todos.push(todo);
			$scope.todo = {};
					
			
		}
		
		this.removeToDo = function (todo,index){
			
		$scope.todos.splice(index,1);
			
						
			
		}
		
		
		
	});

	app.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/todo', {
			templateUrl : 'partials/list.html',
			controller : TodoListCtrl
		});

	} ]);
	
	

	function TodoListCtrl($scope) {
		$scope.todos = tasks;
	}
	var tasks = [

	{
		tname : "Buy Milk",
		tdate : new Date(),
		tstatus : "Hold"
	}, {
		tname : "Pay bill",
		tdate : new Date(),
		tstatus : "Completed"
	}, {
		tname : "Go fishing",
		tdate : new Date(),
		tstatus : "Started"
	}, {
		tname : "Watch movie",
		tdate : new Date(),
		tstatus : "Pending"
	} ];
	
	
	 

})();
