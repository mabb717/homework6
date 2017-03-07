angular.module('foodApp').component('fourohfour', {
	templateUrl: "js/404/404.template.html",
	controller: function FourOhFourController(){
		this.fourohfour = [
  {
    name: '404',
    title: '404',
    date: '2013-09-01',
    description: 'Oops. You caught me. This site is fake.',
    image: '404.jpg'
  }
]
	}
});