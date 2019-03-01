
const express = require('express');
const router  = express.Router();
let Books = require('../models/books');


router.get('/book/:id', function(req, res) {
  Books.findOne().populate('author').
  then(book => {
    res.render('book',
    {book: book});
  });
})

module.exports = router;