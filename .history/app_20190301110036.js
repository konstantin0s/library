const express      = require('express');
const hbs          = require('hbs');
const path         = require('path');
const bodyParser   = require('body-parser');

const app = express();

//routers
const index = require('./routes/index');
app.use('/', index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));




app.listen(3000, () => {
  console.log('Server started on port 3000');
});