
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const authorSchema = new Schema({
  image_url: String,
  firstName: String,
  lastName: String,
  nationality: String,
  brithday: Date,
  createdAt: Date,
  updatedAt: Date,
}, {
  timestamps: true
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;