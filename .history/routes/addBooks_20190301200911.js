
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Book = require('../models/book');
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


 router.post('/books/add', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const newBook = new Book({ title, author, description, rating})
  newBook.save()
  .then((book) => {
    res.redirect('/books')
  })
  .catch((error) => {
    console.log(error)
  })
});

   //add submit POST route
  //  router.post('/books/add', function(req, res) {
  //    debugger
  //   let newBook = new Books();
  //   newBook.title = req.body.title;
  //   newBook.description = req.body.description;
  //   newBook.author = req.body.author;
  //   newBook.rating = req.body.rating;
 
 
  //   newBook.save(function(err) {
  //     debugger
  //        if (err) {
  //          console.log(err);
  //          return;
  //        } else {
  //          res.redirect('/books');
  //        }
  //   });
  //  });

module.exports = router;