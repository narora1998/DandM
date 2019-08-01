const mongoose = require("mongoose");

var leadModel = mongoose.Schema({
  custName: {
    type: String,
    required: true
  },
  mbl: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    required: true
  },
  category: {
    type: [],
    required: true
  },
  location:{
    type:String,
    required:true
  },
  time:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true

  }
});
var Lead = (module.exports = mongoose.model("lead", leadModel));
