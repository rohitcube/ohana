// src/config/database.js
const mongoose = require('mongoose');

class Database {
  constructor(uri) {
    this.uri = uri;
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }

  async disconnect() {
    await mongoose.disconnect();
    console.log('Database disconnected successfully');
  }
}

module.exports = Database;