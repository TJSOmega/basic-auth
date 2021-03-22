'use strict';



const base64 = require('base-64')
const bcrypt = require('bcrypt')
const middleware = require('../src/middleware/basic-auth.js')


const supergoose = require('@code-fellows/supergoose')
const server = require('../src/server.js')


const mockRequest = supergoose(server.app)

let user = {username: 'user', password: '12345'}

describe('POST TESTS', () => {

  it(' /signup to create a new user', async () => {

    const response = await mockRequest.post('/signup').send(user)
    
    expect(response.status).toBe(200)
   
  });

  it('/signin to login as a user (use basic auth)', () => {

    const response = await mockRequest.post('/signin').send(user)

  })
})