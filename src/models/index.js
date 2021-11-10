'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food/model');
const clothes = require('./clothes/model');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const DATABASE_CONFIG =
{
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}
const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  clothes: clothes(sequelize, DataTypes),
  food: food(sequelize, DataTypes),
}
