const express      = require('express');
const hbs          = require('hbs');
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');


const app = express();

let Books = require('./models/Book');
let Authors = require('./models/Author');

//routers
const index = require('./routes/index');
app.use('/', index);

const books = require('./routes/books');
app.use('/', books);
const book = require('./routes/book');
app.use('/', book);
const addBooks = require('./routes/addBooks');
app.use('/', addBooks);

//add views hbs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

//add mongoose 
mongoose
  .connect('mongodb://localhost/library', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



app.listen(3000, () => {
  console.log('Server started on port 3000');
});