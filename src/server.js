'use strict';

// 3rd Party NPM Dependencies
// new ones -> bcrypt/ base-64/ and the return of Cors
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express()


// Opens up for anyone to use our App
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





function start(PORT) {

mongoose.connect('mongodb://localhost:27017/basic-auth-server', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {

    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`)
    })

  })
  .catch(e => console.error('db error', e.message))
}


module.exports = {
  server: app,
  start: start
}