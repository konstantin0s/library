
const express = require('express');
const router  = express.Router();
let Authors = require('../models/authors');


router.get('/author/:id', function(req, res) {
  Authors.findOne({_id: req.params.id}, function(err, authors) {
    if (err) {
      console.log(err);
    } else {
      res.render('/books/add',
      {authors: authors});
    }
  });
})

module.exports = router;