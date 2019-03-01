const express      = require('express');
const hbs          = require('hbs');

const app = express();

//routers
const index = require('./routes/index');
app.use('/', index);






app.listen(3000, () => {
  console.log('Server started on port 3000');
});