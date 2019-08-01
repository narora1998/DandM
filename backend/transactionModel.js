var mongoose = require("mongoose");

var transactionSchema = mongoose.Schema({
  amount: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

var Transactions = (module.exports = mongoose.model(
  "transactions",
  transactionSchema
));
