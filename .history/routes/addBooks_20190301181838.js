
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Books = require('../models/books');
let Authors = require('../models/authors');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/author/:id', function(req, res) {
  Authors.findOne({_id: req.params.id}, function(err, authorsFromDB) {
    debugger
    console.log(authorsFromDB)
    if (err) {
      console.log(err);
    } else {
      res.render('books',
      {authorsFromDB});
    }
  });
})


router.get('/books/add', function(req, res) {
  res.render('add_books');
  });

   //add submit POST route
   router.post('/books/add', function(req, res) {
    let newBook = new Books();
    newBook.title = req.body.title;
    newBook.description = req.body.description;
    newBook.author = req.body.author;
    newBook.rating = req.body.rating;
    newBook.createdAt = req.body.createdAt;
    newBook.updatedAt = req.body.updatedAt;
 
    newBook.save(function(err) {
         if (err) {
           console.log(err);
           return;
         } else {
           res.redirect('/books');
         }
    });
   });

module.exports = router;