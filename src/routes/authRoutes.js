const bcrypt = require('bcrypt');
const base64 = require('base-64');
const express = require('express')

const basicAuth = require('../middleware/basic-auth.js')
const Users = require('../models/mongoose.js')

const authRouter = express.Router()

authRouter.post('/signup', async (req, res) => {

  try {
    console.log(req.body.password)
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    console.log(user)
    const record = await user.save();
    console.log(record)
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
authRouter.post('/signin', basicAuth, (req , res) => {
  res.status(200).json({message: 'Congrats youre logged in!', user: req.user});
}); 



module.exports = authRouter