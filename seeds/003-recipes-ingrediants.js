
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingrediants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingrediants').insert([
        {quantity: "one cup", recipe_id: 1, ingrediants_id: 1 } ,
        { quantity: "two grams", recipe_id: 1, ingrediants_id: 2,},
        {quantity: "three cups", recipe_id: 1, ingrediants_id: 3,  },
        {quantity: "four spoons", recipe_id: 2, ingrediants_id: 3,} ,
        {quantity: "five ounzes", recipe_id: 2, ingrediants_id: 3,  },
        {quantity: "six grams", recipe_id: 3, ingrediants_id: 2,  },
      ]);
    });
};
