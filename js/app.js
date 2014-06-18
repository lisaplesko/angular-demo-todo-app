var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', function ($scope) {
	$scope.todos = [
		{
			todoName: 'Laundry',
			completed: false
		},
		{
			todoName: 'Grocery Shopping',
			completed: false
		},
		{
			todoName: 'Wash the car',
			completed: false
		},
		{
			todoName: 'Cook dinner',
			completed: false
		},
		{
			todoName: 'Book vacay to Maui',
			completed: false
		},
		{
			todoName: 'Feed my fish',
			completed: false
		}
	]
});
