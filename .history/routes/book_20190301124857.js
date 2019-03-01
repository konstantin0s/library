
const express = require('express');
const router  = express.Router();
let Books = require('../models/books');


router.get('/book/:id', function(req, res) {
  Books.findOne({_id: req.params.id}, function(err, book) {
    if (err) {
      console.log(err);
    } else {
      res.render('book',
      {book: book});
    }
  });
})

module.exports = router;