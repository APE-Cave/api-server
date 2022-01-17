'use strict';

const express = require('express');
// index.js is automatic reference when present in directory like models/ 
const { FoodModel } = require('../models');
// const Food = require('../models/food.schema');

const router = express.Router(); // give us object to define routing logic

router.post('/food', create);
router.get('/food', read);
router.get('/food/:id', read);
router.patch('/food/:id', update);
router.put('/food/:id', update);
router.delete('/food/:id', destroy);

async function create(req, res) {
  try {
    let created = await FoodModel.create(req.body);
    res.status(201).send(created);
  } catch (err) {
    res.status(404).send(err);
  }
}
async function read(req, res) {
  try {
    let foodReturn = (req.params.id) ?
      await FoodModel.findByPk(req.params.id) :
      await FoodModel.findAll();
    res.status(200).send(foodReturn);
  } catch (err) {
    res.status(404).send(err);
  }
}
async function update(req, res) {
  try {
    if (req.params.id) {
      let foodReturn = await FoodModel.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).send(foodReturn);
    }
  } catch (err) {
    res.status(404).send(err);
  }
}
async function destroy(req, res) {
  try {
    if (req.params.id) {
      await FoodModel.destroy({
        where: { id: req.params.id },
      });
      res.status(204).send(`Row ${req.params.id} deleted`);
    }
  } catch (err) {
    res.status(404).send(err);
  }
}
module.exports = router;