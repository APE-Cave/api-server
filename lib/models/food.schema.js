'use strict';

const Food = (sequelize, DataTypes) => {

  return sequelize.define('Food', {
    dishName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });
};

module.exports = Food;