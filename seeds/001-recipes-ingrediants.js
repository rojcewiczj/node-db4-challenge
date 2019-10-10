
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingrediants').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingrediants').insert([
        { recipe_id: 1, ingrediants_id: 1} ,
        { recipe_id: 1, ingrediants_id: 2 },
        { recipe_id: 1, ingrediants_id: 3 },
        { recipe_id: 2, ingrediants_id: 3 } ,
        { recipe_id: 2, ingrediants_id: 3 },
        { recipe_id: 3, ingrediants_id: 2 },
      ]);
    });
};
