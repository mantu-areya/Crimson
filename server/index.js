// require('dotenv').config({path:__dirname+'/./../.env'});
require("dotenv").config();

// Set default node environment to development
process.env.NODE_ENV =
  typeof process.env.NODE_ENV !== 'undefined'
    ? process.env.NODE_ENV
    : 'development';

// Export the application
exports = module.exports = require('./app');
