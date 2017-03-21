angular.module('foodApp').component('recipeDetail', {
	templateUrl: 'js/recipes/recipe-detail.template.html',

	controller: function RecipeDetailController($http, $routeParams) {

		var self = this;

		$http.get('data/' + $routeParams.recipeId +  '.json')
		.then(response => {
			self.recipe = response.data;
			self.setImage(self.recipe.images[0]);
		});

		self.setImage = function (imageUrl) {
			self.mainImageUrl = imageUrl;
		};
	}
});