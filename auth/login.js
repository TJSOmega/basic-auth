'use strict';


const bcrypt = require('bcrypt');
const base64 = require('base-64');


module.exports = ('/login', async (req, res, next) => {
  let basicAuthParts = req.headers.authorization.split(' ') // basic 2409jfjsf:0jk2o13fnm -> [basic, '2409jfjsf:0jk2o13fnm']
  let encodedUser = basicAuthParts.pop(); // username:password as base64 -> 2409jfjsf:0jk2o13fnm
  let decoded = base64.decode(encodedUser)
  let [username, password] = decoded.split(':'); // Split at username and password (username:password)

  try {
    const user = await Users.findOne({ username: username })

    // Compare plain text password pulled off of the request.authorization header
    // Compare it with the plain text password of the user
    // If valid, "valid" will be true
    const valid = await bcrypt.compare(password, user.password)

    if(valid) {
      res.status(200).json({loggedIn: true})
      next()
    }

  } catch {
    res.status(500).send('Sorry unable to log you in!')
  }

  
})