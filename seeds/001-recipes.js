
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'cake', instructions:"follow these steps"},
        { name: 'brownies', instructions:"follow these steps"},
        { name: 'cookies', instructions:"follow these steps" }
      ]);
    });
};
