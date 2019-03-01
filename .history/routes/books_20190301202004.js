const express = require('express');
const router  = express.Router();
let Books = require('../models/Book');


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

module.exports = router;
