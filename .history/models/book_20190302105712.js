const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
require("./author.js/index.js");

const bookSchema = new Schema({
  title: String,
  description: String,
  // author: [ { type : ObjectId, ref: 'Author' } ],
  author:  { type: Schema.Types.ObjectId, ref: 'Author'},
  rating: Number,
  reviews:  
    {
      user: String,
      comments: String
    },
  createdAt: Date,
  updatedAt: Date,
}, {
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;