Transactions = require("./transactionModel");

//create transaction
exports.new = function(req, res) {
  var transaction = new Transactions();
  transaction.name = req.body.name;
  transaction.amount = req.body.amount;

  transaction.save(function(err) {
    if (err) res.send(err);
    res.json({
      message: "New transaction created",
      data: transaction
    });
  });
};

//displaying transaction
exports.view = function(req, res) {
  Transactions.find({}, function(err, transaction) {
    if (err) res.send(err);
    res.json({
      message: "Transaction Displayed",
      data: transaction
    });
  });
};
