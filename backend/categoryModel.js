const mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

var Category = (module.exports = mongoose.model("categories", categorySchema));

