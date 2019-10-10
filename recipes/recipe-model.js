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
        return  db('recipes_ingrediants')
        // .join('recipes_ingrediants.quantity', 'ingrediants.name', 'recipes_ingrediants.ingrediants_id')
        .where({ recipe_id : recipeId })
        // .select('ingredients.name',)
       
    }

