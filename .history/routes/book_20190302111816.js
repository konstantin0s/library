
const express = require('express');
const router  = express.Router();
let Books = require('../models/book');


router.get('/book/:id', function(req, res) {
  Books.findOne({_id: req.params.id}).populate('author')
  .then(book => {
    res.render('book',
    {book: book});
  });
})

router.post('/book', (req, res, next) => {
  const { user, comments } = req.body;
  Books.updateOne({ _id: req.query.book_id }, { $push: { reviews: { user, comments }}})
  .then(book => {
    res.redirect('/book/' + req.query.book_id)
  })
  .catch((error) => {
    console.log(error)
  })
})

module.exports = router;