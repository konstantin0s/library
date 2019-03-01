const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: String,
  author: String, //change here
  rating: Number,
  createdAt: Date,
  updatedAt: Date,
}, {
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;