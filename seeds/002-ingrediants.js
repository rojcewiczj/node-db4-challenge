
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingrediants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingrediants').insert([
        { name: 'chocolate'},
        { name: 'butter'},
        { name: 'flour'}
      ]);
    });
};
