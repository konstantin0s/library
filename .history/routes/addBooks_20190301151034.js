
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
let Books = require('../models/books');
const mongoose     = require('mongoose');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/books/add', function(req, res) {
  res.render('add_books');
  });

   //add submit POST route
   router.get('/books/add', function(req, res) {
          debugger
    let newBook = new Books();
    newBook.title = req.body._doc.title;
    newBook.description = req.body._doc.description;
    newBook.author = req.body._doc.author;
    newBook.rating = req.body._doc.rating;
    newBook.createdAt = req.body._doc.createdAt;
    newBook.updatedAt = req.body._doc.updatedAt;
 
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