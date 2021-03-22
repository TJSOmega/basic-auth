'use strict';

// 3rd Party Resources
const express = require('express');
const authRouter = require('./routes/authRoutes');
const errorHandler = require('./error-handlers/500.js')
const notFoundHandler = require('./error-handlers/404.js')


// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(authRouter)
app.use(authRouter)
app.use('*', notFoundHandler)
app.use(errorHandler)



module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  }
}