
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Books = require('../models/books');
let Authors = require('../models/authors');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// router.get('/books/add', function(req, res, next) {
//   Authors.find({}, (err, authors) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render('add_books',
//       {authors: authors});
//     }
//   });
//  });
router.get('/books/add', (req, res, next) => {
  Authors.find()
    .then((authorsFromDb) => {
      res.locals.authorList = authorsFromDb;
      res.render('add_books');
    })
    .catch((err) => {
      next(err);
    })
});

   //add submit POST route
   router.post('/books/add', function(req, res) {
     debugger
    let newBook = new Books();
    newBook.title = req.body.title;
    newBook.description = req.body.description;
    newBook.author = req.body.author;
    newBook.rating = req.body.rating;
 
 
    newBook.save(function(err) {
      debugger
         if (err) {
           console.log(err);
           return;
         } else {
           res.redirect('/books');
         }
    });
   });

module.exports = router;