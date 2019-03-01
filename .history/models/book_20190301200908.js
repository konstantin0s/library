const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const authors = require("./authors.js");

const bookSchema = new Schema({
  title: String,
  description: String,
  author:  { type: Schema.Types.ObjectId, ref: 'Author'},
  rating: Number,
  createdAt: Date,
  updatedAt: Date,
}, {
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;