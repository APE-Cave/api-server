'use strict';

const express = require('express');
const { TablewareCollection } = require('../models');
const router = express.Router();

router.post('/tableware', async (req, res) => {
  try {
    let tableware = await TablewareCollection.create(req.body);
    res.status(201).send(tableware);
  } catch (err) {
    res.status(404).send(err);
  }
});

// router.get('/tableware/:id', read); //TEST Is necessary? YES
router.get('/tableware/:id', async (req, res) => {
  try {
    let tableware = await TablewareCollection.read(req.params.id);
    res.status(200).send(tableware);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/tableware', async (req, res) => {
  try {
    let tableware = await TablewareCollection.read();
    res.status(200).send(tableware);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.put('/tableware/:id', async (req, res) => {
  try {
    let tableware = await TablewareCollection.update(req.params.id, req.body);
    res.status(200).send(tableware);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.delete('/tableware/:id', async (req, res) => {
  try {
    let tableware = await TablewareCollection.destroy(req.params.id);
    res.status(204).send(tableware.body);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;