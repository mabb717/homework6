var app = angular.module('foodApp', ['ngRoute']);

//injected ngRoute, in conjunction with code.angular.js script in index.html
//typically will have multiple modules, not all modules need the same injections

app.controller('NavController', function ($scope, $location) {
	$scope.isActive = function (viewLocation) {
		var active = (viewLocation === $location.path());
		return active;
	};
})