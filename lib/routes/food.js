'use strict';

const express = require('express');
// index.js is automatic reference when present in directory like models/ 
const { FoodCollection } = require('../models');
// const Food = require('../models/food.schema');

const router = express.Router(); // give us object to define routing logic

router.post('/food', async (req, res) => {
  try {
    let food = await FoodCollection.create(req.body);
    res.status(201).send(food);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/food/:id', async (req, res) => {
  try {
    let food = await FoodCollection.read(req.params.id);
    res.status(200).send(food);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/food', async (req, res) => {
  try {
    let food = await FoodCollection.read();
    res.status(200).send(food);
  } catch (err) {
    res.status(404).send(err);
  }
});

// router.get('/food/:id', read); //TEST Is necessary?
// router.patch('/food/:id', update);

router.put('/food/:id', async (req, res) => {
  try {
    let food = await FoodCollection.update(req.params.id, req.body);
    res.status(200).send(food);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.delete('/food/:id', async (req, res) => {
  try {
    let food = await FoodCollection.destroy(req.params.id);
    res.status(204).send(food.body); //TODO change tests to account for this 
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;