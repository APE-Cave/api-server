'use strict';

const express = require('express');
const app = express();
const foodRoutes = require('./routes/food.js');
const tablewareRoutes = require('./routes/tableware.js');

app.use(express.json());
app.use(foodRoutes);
app.use(tablewareRoutes);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on ', port);
    });
  },
  app,
};