
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Books = require('../models/books');
let Authors = require('../models/authors');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


// router.get('/author/:id', function(req, res) {
//   Authors.findOne({_id: req.params.id}, function(err, authorsFromDB) {
//     debugger
//     console.log(authorsFromDB)
//     if (err) {
//       console.log(err);
//     } else {
//       res.render('/books/add',
//       {authorsFromDB});
//     }
//   });
// })


router.get('/books/add', function(req, res) {
  debugger
  Authors.find({}, (err, authors) => {
    if (err) {
      console.log(err);
    } else {
      res.render('/books/add',
      {authors: authors});
    }
  });
  });

   //add submit POST route
   router.post('/books/add', function(req, res) {
    let newBook = new Books();
    newBook.title = res.req.body.title;
    newBook.description = res.req.body.description;
    newBook.author = res.req.body.author;
    newBook.rating = res.req.body.rating;
 
 
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