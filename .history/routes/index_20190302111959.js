
const express = require('express');
const router  = express.Router();
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
let Books = require('../models/book');
let Authors = require('../models/author');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;