'use strict';

class Collection {
  constructor (model) {
    this.model = model;
  }

  async read(req, res) {
    try {
      let readReturn = (req.params.id) ?
        await this.model.findByPk(req.params.id) :
        await this.model.findAll();
      res.status(200).send(readReturn);
    } catch (err) {
      res.status(404).send(err);
    }
  }
  
  async create(req, res) {
    try {
      let createReturn = await this.model.create(req.body);
      res.status(201).send(createReturn);
    } catch (err) {
      res.status(404).send(err);
    }  
  }

  async update(req, res) {
    try {
      if (req.params.id) {
        let updateReturn = await this.model.update(req.body, {
          where: { id: req.params.id },
        });
        res.status(200).send(updateReturn);
      }
    } catch (err) {
      res.status(404).send(err);
    }
  }

  async destroy(req, res) {
    try {
      if (req.params.id) {
        const destroyReturn = await this.model.destroy({
          where: { id: req.params.id },
        });
        res.status(204).send(destroyReturn); //TODO change tests to account for this 
      }
    } catch (err) {
      res.status(404).send(err);
    }
  }
}

module.exports = Collection;