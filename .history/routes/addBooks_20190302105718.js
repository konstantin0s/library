
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Book = require('../models/book');
let Author = require('../models/author');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



router.get('/books/add', function(req, res, next) {
  Author.find({}, (err, authors) => {
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
  Book.create({
      title: req.body.title,
      description: req.body.description,
      author: authorId,
      rating: req.body.rating
  })
  .then( newBook => {
      res.redirect('/books')
  })
})


module.exports = router;