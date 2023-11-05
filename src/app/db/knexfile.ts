import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      database: process.env.CHRISTMAS_APP_DB_NAME,
      user: process.env.CHRISTMAS_APP_DB_USER,
      password: process.env.CHRISTMAS_APP_DB_PASSWORD,
      port: parseInt(process.env.CHRISTMAS_APP_DB_PORT || '') 
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations"
      }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
