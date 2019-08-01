const mongoose = require("mongoose");

var adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
});

var Admins = (module.exports = mongoose.model("administrator", adminSchema));
