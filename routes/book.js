
const express = require('express');
const router  = express.Router();
let Books = require('../models/Book');


router.get('/book/:id', function(req, res) {
  Books.findOne({_id: req.params.id}).populate('author')
  .then(book => {
    res.render('book',
    {book: book});
  });
})

module.exports = router;