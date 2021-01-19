import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table: any) => {
    table.increments("id").primary();

    // foreign key
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.timestamp("created_at").defaultTo("now()").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}