'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.DATABASE_URL || 'sqlite:memory';

const foodSchema = require('./food.schema.js');
const tablewareSchema = require('./tableware.schema.js');

// create connection instance / singleton
let db = new Sequelize(POSTGRES_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const FoodModel = foodSchema(db, DataTypes);
const TablewareModel = tablewareSchema(db, DataTypes);

module.exports = {
  db,
  FoodModel,
  TablewareModel,
};