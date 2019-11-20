const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  }
});

mongoose.plugin(timestamp);

module.exports = mongoose.model("Posts", postSchema);
