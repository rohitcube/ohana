// test/user.test.js
const request = require('supertest');
const express = require('express');
const dbHandler = require('./helpers/dbHandler');
const userRoutes = require('../routes/user');

describe('User API Test', () => {
  let app;

  beforeAll(async () => {
    app = express();
    app.use(express.json());
    app.use('/api', userRoutes);
    await dbHandler.connect();
  });

  afterEach(async () => {
    await dbHandler.clearDatabase();
  });

  afterAll(async () => {
    await dbHandler.closeDatabase();
  });

  it('should create a new user via API', async () => {
    const userData = {
      username: 'testuser',
      email: 'test@test.com',
      password: 'test'
    };

    const response = await request(app)
      .post('/api/user')
      .send(userData);

    expect(response.status).toBe(201);
    expect(response.body.username).toBe(userData.username);
    expect(response.body.email).toBe(userData.email);
  });
});