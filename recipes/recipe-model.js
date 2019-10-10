const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getInstructions(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function getShoppingList(recipeId) {
  return db('ingrediants')
    .join('ingrediants.name', 'recipes.name', 'recipes-ingrediants.quantity')
    .where({ recipe_id: recipeId });
}

