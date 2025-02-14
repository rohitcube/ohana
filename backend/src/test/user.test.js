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
      password: 'testtexas'
    };

    const response = await request(app)
      .post('/api/user')
      .send(userData);

    expect(response.status).toBe(201);
    expect(response.body.username).toBe(userData.username);
    expect(response.body.email).toBe(userData.email);
  });

  it('should update user password', async () => {
    // First create a user
    const userData = {
      username: 'testuser',
      email: 'test@test.com',
      password: 'testtexas'
    };
    const createResponse = await request(app)
      .post('/api/user')
      .send(userData);

    // Get the created user's ID
    const userId = createResponse.body._id;

    // Then update the password
    const updateData = {
      id: userId,
      password: 'newpassword'
    };

    const updateResponse = await request(app)
      .put(`/api/update`)
      .send(updateData);

    // Assert the update was successful
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.password).toBe(updateData.password);

  });

  it('should throw password validation error (at least 8 chars)', async () => {
    const userData = {
      username: 'testuser',
      email: 'test@test.com',
      password: 'test'
    };

    const response = await request(app)
      .post('/api/user')
      .send(userData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('status', 'error');

    // If you want to test specific error messages:
    expect(response.body.message).toContain('password');
  });

});