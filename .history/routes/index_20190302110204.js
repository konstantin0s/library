
const express = require('express');
const router  = express.Router();
let Books = require('../models/book');
let Authors = require('../models/author');

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