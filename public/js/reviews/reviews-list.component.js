angular.module('foodApp').component('reviewsList', {
	templateUrl: "js/reviews/reviews-list.template.html",
	controller: function ReviewsListController(){
		this.reviews = [
  {
    name: 'reviews1',
    title: "Custard's Last Stand",
    date: '2013-09-01',
    rating: '★★★☆☆',
    description: 'OK I GUESS.',
    image: 'resto1.png'
  },
  {
    name: 'reviews2',
    title: 'Grillenium Falcon',
    date: '2014-04-15',
    rating: '★★★★☆',
    description: 'BETTER THAN OK I GUESS.',
    image: 'resto2.png'
  },
  {
    name: 'reviews3',
    title: 'Lebaneser Scrooge',
    date: '2012-10-01',
   	rating: '★★☆☆☆',
    description: 'I ATE IT OKAY.',
    image: 'resto3.png'
  },
  {
    name: 'reviews4',
    title: 'Bread Zeppelin',
    date: '2012-10-20',
    rating: '★☆☆☆☆',
    description: 'A THROWBACK TO AWFUL FOOD OF MY YOUTH.',
    image: 'resto4.png'
  }
]
	}
});