'use strict';

const { app } = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(app);
const { db } = require('../lib/models');

beforeAll(async () => {
  await db.drop();
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the tableware router', () => {

  it('Should create new tableware data', () => {
    const testArray = [
      { 'tablewareName': 'salad bowl' },
      { 'tablewareName': 'soup bowl' },
      { 'tablewareName': 'large plate' },
    ];
    testArray.forEach(async (testObj) => {
      const response = await request.post('/tableware').send(testObj);
      expect(response.status).toEqual(201);
      expect(response.body.tablewareName).toEqual(testObj.tablewareName);
      console.log(response.body);
    });
  });

  it('Should read all from tableware data', async () => {
    const response = await request.get('/tableware');
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(3);
  });

  it('Should read one from tableware data by id', async () => {
    const response = await request.get('/tableware/3');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(3);

  });

  it('Should find one by id and update', async () => {
    const amendedTableware = { 'tablewareName': 'small plate' };
    const response = await request.put('/tableware/3').send(amendedTableware);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([1]);
    const updatedRow = await request.get('/tableware/3');
    expect(updatedRow.body.tablewareName).toEqual('small plate');
  });

  it('Should find one by id and remove', async () => {
    const deleteResponse = await request.delete('/tableware/2');
    const updatedTable = await request.get('/tableware');
    expect(deleteResponse.status).toEqual(204);
    expect(updatedTable.body.length).toEqual(2);
  });

});
