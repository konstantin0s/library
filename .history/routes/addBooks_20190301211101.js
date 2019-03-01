
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Books = require('../models/Book');
let Authors = require('../models/Author');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/books/add', function(req, res, next) {
  Authors.find({}, (err, authors) => {
    if (err) {
      console.log(err);
    } else {
      res.render('add_books',
      {authors: authors});
    }
  });
 });


  //  add submit POST route
   router.post('/books/add', function(req, res) {
    var authorId = mongoose.Types.ObjectId(req.body.author)
     debugger
    let newBook = new Books();
    newBook.title = req.body.title;
    newBook.description = req.body.description;
    newBook.author = req.body.authorId;
    newBook.rating = req.body.rating;
 
 
    newBook.create(function(err) {
      debugger
         if (err) {
           console.log(err);
           return;
         } else {
           res.redirect('books');
         }
    });
   });

module.exports = router;