// tests/helpers/dbHandler.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config();

let mongod;

module.exports = {
  async connect() {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
  },

  async clearDatabase() {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  },

  async closeDatabase() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  }
};