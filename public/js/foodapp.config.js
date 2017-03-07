angular.module('foodApp').config(
	function($routeProvider, $locationProvider){
		$routeProvider.
		when('/', {
			template:'Welcome to this totally real totally awesome website.'
		}).
		when('/recipes',{
			template: '<recipe-list></recipe-list>'
		}).
		when('/reviews',{
			template: '<reviews-list></reviews-list>'
		}).
		otherwise('/404',{
			template: '<fourohfour></fourohfour>.'
		});
		$locationProvider.html5Mode(true)
	})