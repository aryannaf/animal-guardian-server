exports.up = function(knex) {
    return knex.schema
      .createTable('categories', (table) => {
        table.string('id').unique().primary();
        table.string('categoryName').notNullable();
      })
      .createTable('species', (table) => {
        table.string('id').unique().primary();
        table.string('category_id').notNullable();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('scientificName').notNullable();
        table.string('category').notNullable();
        table.string('population').notNullable();
        table.string('habitat').notNullable();
        table.text('information').notNullable();
        table.string('source').notNullable();
        table.text('petition').notNullable();
        table.text('donate').notNullable();
        table
          .foreign('category_id')
          .references('id')
          .inTable('categories')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('species').dropTable('categories');
  };
