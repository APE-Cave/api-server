'use strict';

const Tableware = (sequelize, DataTypes) => {
  return sequelize.define('Tableware', {
    tablewareName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Tableware;