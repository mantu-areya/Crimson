const express = require('express');
const app = express()
const cron = require('node-cron');

const PORT = 80;

require('./routes')(app);


app.listen(PORT,()=>{
  console.log(`server started on ${PORT}`);
})