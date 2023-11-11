import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("family", (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("code");
    })
    .createTable("user", (table) => {
      table.increments("id");
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.integer("family_id").notNullable().unsigned();
      table
        .foreign("family_id")
        .references("id")
        .inTable("family")
        .onDelete("CASCADE")
    })
    .createTable("gift_list", (table) => {
      table.increments("id"),
      table.string("username"),
      table.integer("user_id").unsigned()
      table.integer("family_id").unsigned()
      table
        .foreign("family_id")
        .references("id")
        .inTable("family")
        .onDelete("CASCADE")
        table
        .foreign("user_id")
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
    })
    .createTable("gift", (table) => {
      table.increments("id")
      table.integer("gift_list_id").unsigned()
      table.string("name").notNullable()
      table.string("description")
      table.string("image")
      table.string("price")
      table.integer("bought_by").unsigned()
      table
        .foreign("gift_list_id")
        .references("id")
        .inTable("gift_list")
        .onDelete("CASCADE")
      table
        .foreign("bought_by")
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
    })
    .createTable("budget", (table) => {
      table.increments("id")
      table.string("expense_type")
      table.string("amount").notNullable()
      table.integer("user_id").unsigned()
      table
        .foreign("user_id")
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
    })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
  .dropTableIfExists("budget")
  .dropTableIfExists("gift")
  .dropTableIfExists("gift_list")
  .dropTableIfExists("user")
  .dropTableIfExists("family");
}

