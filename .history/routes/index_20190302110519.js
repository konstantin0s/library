
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Books = require('../models/book');
let Authors = require('../models/author');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});


/* GET books page */

router.get('/books', (req, res) => {
  Books.find({}, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      res.render('books',
      {books: books});
    }
    
  });
});

router.get('/book/:id', function(req, res) {
  Books.findOne({_id: req.params.id}).populate('author')
  .then(book => {
    res.render('book',
    {book: book});
  });
})


router.get('/books/add', function(req, res, next) {
  Authors.find({}, (err, authors) => {
    if (err) {
      console.log(err);
    } else {
      res.render('add_books',
      {authors: authors});
    }
  });
 });


router.post('/books/add', function(req, res, next) {
  var authorId = mongoose.Types.ObjectId(req.body.author)
  Books.create({
      title: req.body.title,
      description: req.body.description,
      author: authorId,
      rating: req.body.rating
  })
  .then( newBook => {
      res.redirect('/books')
  })
})



router.post('/reviews/add', (req, res, next) => {
  const { user, comments } = req.body;
  Books.update({ _id: req.query.book_id }, { $push: { reviews: { user, comments }}})
  .then(book => {
    res.redirect('/books')
  })
  .catch((error) => {
    console.log(error)
  })
});


router.post('/reviews/add', (req, res, next) => {
  const { user, comments } = req.body;
  Books.update({ _id: req.query.book_id }, { $push: { reviews: { user, comments }}})
  .then(book => {
    res.redirect('/book/' + req.query.book_id)
  })
  .catch((error) => {
    console.log(error)
  })
})
module.exports = router;