require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: "Europe/Paris",
    dialectOptions: {
      timezone: "local",
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "localhost:3306",
    dialect: "mysql",
    timezone: "Europe/Paris",
    dialectOptions: {
      timezone: "local",
    },
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "localhost:3306",
    dialect: "mysql",
    timezone: "Europe/Paris",
    dialectOptions: {
      timezone: "local",
    },
  },
};