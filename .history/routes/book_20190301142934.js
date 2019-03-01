
const express = require('express');
const router  = express.Router();
let Books = require('../models/book');
let Authors = require('../models/author');


router.get('/book/:id', function(req, res) {
  Books.findOne({_id: req.params.id}).populate('Author').
  then(book => {
  debugger;
    // console.log(book);
    res.render('book',
    {book: book});
  });
})

module.exports = router;