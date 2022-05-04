import express from 'express';
const path = require('path');

module.exports =  function routes(app) {
  app.use('/api', require('./api/property'));
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}