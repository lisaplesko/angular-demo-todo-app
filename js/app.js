'use strict';

var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', ['$scope', '$http', function ($scope, $http) {
	$scope.todos = [];
	$http({
    url: 'http://jsonstub.com/todoapp/todos',
    method: 'GET',
    headers: {
        'JsonStub-User-Key': '00369a06-656c-46a0-b167-33e47de5f50e',
        'JsonStub-Project-Key': '3a791567-e891-4094-b975-d4f6379a7989'
    }
	}).success(function (todos) {
	    $scope.todos = todos;
	    $scope.todosCount = $scope.todos.length;
	});
	$scope.addNew = function(name){
		$scope.todos.push({
			todoName: name,
			completed: false
		});
	};
}]);
