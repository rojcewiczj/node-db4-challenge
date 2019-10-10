
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
    })
    .createTable('ingrediants', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
    })
    .createTable('recipes_ingrediants', tbl => {
      tbl.increments();

     

      // we need FK that references the PK on users
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl
        .integer('ingrediants_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingrediants')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.unique(['recipe_id', 'ingrediants_id']);
    });
};

exports.down = function(knex) {
  
};
