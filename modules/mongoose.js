const mongoose = require('mongoose');


// mongoose schema -> normally, this would live in another file
const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
})

const Users = mongoose.model('users', usersSchema);

