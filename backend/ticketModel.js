var mongoose = require("mongoose");

var ticketSchema = mongoose.Schema({
  userId:{
  	type:String,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

var Tickets = (module.exports = mongoose.model("tickets", ticketSchema));
