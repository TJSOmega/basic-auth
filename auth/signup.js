
require('bcrypt')


module.exports = ('/signup', async (req, res, next) => {
  try {
    // try to make it work
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const user = new Users(req.body);
    console.log('After instantiation of model: ', user);

    const record = await user.save(req.body)
    console.log('After saving record in the DB: ', user);
    res.status(200).json(record) // this is only for learning purposes normally NEVER send back a user object with 
    next()
  } catch {
    // if our hashing doesnt work for some reason on the bcrypt side return an error
    res.status(500).send('error creating user')
  }
})