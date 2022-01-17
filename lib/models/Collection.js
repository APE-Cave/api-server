'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id = null) {
    return (id) ?
      await this.model.findByPk(id) :
      await this.model.findAll();
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    if (id) {
      return await this.model.update(data, {
        where: { id: id },
      });
    }
  }

  async destroy(id) {
    if (id) {
      return await this.model.destroy({
        where: { id: id },
      });
    }
  }
}

module.exports = Collection;