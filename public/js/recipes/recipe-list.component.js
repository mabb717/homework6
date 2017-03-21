angular.module('foodApp').component('recipeList', {
  templateUrl: 'js/recipes/recipe-list.template.html',

  controller: function RecipeListController($http) { 
    var self = this;

    $http.get('data/recipes.json')
      .then(function (response) {
      self.recipes = response.data;
      self.orderProp = 'date';


    })
  }
})