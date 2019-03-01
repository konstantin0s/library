
const express = require('express');
const router  = express.Router();
let Books = require('../models/books');


router.get('/book/:id', function(req, res) {
  Books.findOne({_id: req.params.id}).populate('Author').
  exec(book => {
  debugger;
    // console.log(book);
    res.render('book',
    {book: book});
  });
})

module.exports = router;