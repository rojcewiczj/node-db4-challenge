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
    .select('recipes.name', 'recipes.instructions')
}


    function getShoppingList(recipeId) {
        return  db('recipes_ingrediants')
        .join('ingrediants', 'ingrediants.id', 'recipes_ingrediants.ingrediants_id')
        .where({ ingrediants_id : recipeId })
        .select('ingrediants.name','recipes_ingrediants.quantity')
       
    }

