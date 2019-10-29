import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('allergens', table => {
      table
        .increments('id')
        .index()
        .unique()
        .primary();
      table.string('title');
    })
    .createTable('products', table => {
      table
        .increments('id')
        .index()
        .unique()
        .primary();
      table.string('title');
      table.integer('amount');
      table.string('measure');
      table.integer('amountInGrams');
      table.float('serving_size');
      table.integer('calories_per_serving');
      table.float('price');
      table.float('grams_calories_per_serving');
      table.float('grams_carbs_per_serving');
      table.float('grams_fat_per_serving');
      table.float('grams_protein_per_serving');
      table.specificType('allergens', 'string[]');
    })
    .createTable('recipes', table => {
      table
        .increments('id')
        .index()
        .unique()
        .primary();
      table.string('title');
      table.integer('amount');
      table.specificType('products', 'string[]');
    })
    .createTable('food_preferences', table => {
      table
        .increments('id')
        .index()
        .unique()
        .primary();
      table.boolean('is_liked');
      table.string('preference_id');
      table.string('recipe_id');
      table
        .foreign('preference_id')
        .references('id')
        .inTable('preferences');
      table
        .foreign('recipe_id')
        .references('id')
        .inTable('recipes');
    })
    .createTable('preferences', table => {
      table
        .increments('id')
        .index()
        .unique()
        .primary();
      table.integer('servings_per_meal');
      table.float('price_limit_per_day');
      table.integer('calories_per_meal');
      table.string('meals_per_day');
      table.string('wants_to');
      table.string('prefered_units');
      table.string('sex');
      table.integer('height_kg');
      table.integer('weight_cm');
      table.integer('age');
      table.string('activity_level');
      table.integer('weight_goal_kg');
    })
    .createTable('allergies', table => {
      table
        .increments('id')
        .index()
        .unique()
        .primary();
      table.string('preference_id');
      table.string('allergen_id');
      table
        .foreign('preference_id')
        .references('id')
        .inTable('preferences');
      table
        .foreign('allergen_id')
        .references('id')
        .inTable('allergens');
    })
    .createTable('users', table => {
      table
        .increments('id')
        .index()
        .unique()
        .primary();
      table.string('first_name');
      table.string('last_name');
      table.string('address_id');
      table.string('preference_id');
      table
        .foreign('preference_id')
        .references('id')
        .inTable('preferences');
    })
    .catch(e => console.error(e));
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .withSchema('public')
    .dropTableIfExists('allergens')
    .dropTableIfExists('products')
    .dropTableIfExists('recipes')
    .dropTableIfExists('food_preferences')
    .dropTableIfExists('preferences')
    .dropTableIfExists('allergies')
    .dropTableIfExists('users');
}
