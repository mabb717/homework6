var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function config($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true)
	$routeProvider.
	when('/', {
		template: '<greet-user></greet-user>'
	}).
	when('/bye', {
		template: '<bye-user></bye-user>'
	}).
	otherwise('/404')
})

myApp.component('greetUser', {
	template: `
	<h4>Hello, {{ $ctrl.user }}!</h4>
	<p><a href="/bye">Bye</a></p>
	`,
	controller: function GreetUserController(){
		this.user="world";
	}
})

myApp.component('byeUser', {
	template: 'Bye {{ $ctrl.user }}!',
	controller: function ByeUserController(){
		this.user="cruel world"
	}
})

// myApp.controller('GreetUserController', function($scope){
// 	$scope.user = 'world'
// })

// myApp.controller('ByeUserController', function($scope){
// 	$scope.user = 'cruel world'
// })



// myApp.controller('GreetUserController', function($scope){
// 	$scope.user = "John"
// })