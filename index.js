const mongoose = require('mongoose')
const server = require('./src/server.js')
require('dotenv').config()



mongoose.connect('mongodb://localhost:27017/basic-auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(3000)
  })
  .catch(e => console.error('Could not start server', e.message));
