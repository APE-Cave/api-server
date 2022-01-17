'use strict';

const express = require('express');
const { TablewareModel } = require('../models');
const router = express.Router();

router.post('/tableware', create);
router.get('/tableware', read);
router.get('/tableware/:id', read);
router.patch('/tableware/:id', update);
router.put('/tableware/:id', update);
router.delete('/tableware/:id', destroy);

async function create(req, res) {
  try {
    let created = await TablewareModel.create(req.body);
    res.status(201).send(created);
  } catch (err) {
    res.status(404).send(err);
  }
}
async function read(req, res) {
  try {
    let tablewareReturn = (req.params.id) ?
      await TablewareModel.findByPk(req.params.id) :
      await TablewareModel.findAll();
    res.status(200).send(tablewareReturn);
  } catch (err) {
    res.status(404).send(err);
  }
}
async function update(req, res) {
  try {
    if (req.params.id) {
      let tablewareReturn = await TablewareModel.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).send(tablewareReturn);
    }
  } catch (err) {
    res.status(404).send(err);
  }
}
async function destroy(req, res) {
  try {
    if (req.params.id) {
      await TablewareModel.destroy({
        where: { id: req.params.id },
      });
      res.status(204).send(`Row ${req.params.id} deleted`);
    }
  } catch (err) {
    res.status(404).send(err);
  }
}
module.exports = router;