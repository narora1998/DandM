const mongoose = require("mongoose");
var Category = require("./categoryModel");
var userVendorSchema = mongoose.Schema({
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
  },
  mbl: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  category:
    {
       type:[],
       required:true

    },
  balance: {
    type: String
  }
});
  uTickets:{
    type:[]
  }

var UsersVendor = (module.exports = mongoose.model(
  "usersvendor",
  userVendorSchema
));
