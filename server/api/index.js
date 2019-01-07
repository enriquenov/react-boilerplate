const router = require('express').Router();
const path = require('path');

// For instance...
router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

// Request to get /api/piglets ?! Get outta town!
router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
