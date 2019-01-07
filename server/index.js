const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Logging Middleware
app.use(morgan('dev'));

// Static Middleware
app.use(express.static(path.join(__dirname, './path/to/static/assets')));

// Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mounting API routes
app.use('/api', require('./api'));

// Sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// Handling 500 errors
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// Listening for requests
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function() {
  console.log('Knock, knock');
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
