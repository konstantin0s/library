
const express = require('express');
const router  = express.Router();
let Books = require('../models/authors');


router.get('/author/:id', function(req, res) {
  Books.findOne({_id: req.params.id}).populate('author')
  .then(book => {
    res.render('book',
    {book: book});
  });
})

module.exports = router;