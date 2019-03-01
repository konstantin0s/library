
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
let Books = require('../models/books');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/books/add', function(req, res) {
  res.render('add_books');
  });

   //add submit POST route
   router.post('/books/add', function(req, res) {

    let newBook = new Books();
    newBook.title = req.body.title;
    newBook.level = req.body.level;
    newBook.ingredients = req.body.ingredients;
    newBook.cuisine = req.body.cuisine;
    newBook.dishType = req.body.dishType;
    newBook.image = req.body.image;
    newBook.duration = req.body.duration;
    newBook.creator = req.body.creator;
    newBook.date = req.body.date;
 
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