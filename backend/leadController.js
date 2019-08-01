// Import lead model
const Lead = require("./leadModel");

// Making new lead
exports.new = function(req, res) {
  var lead = new Lead({
    custName: req.body.name,
    mbl: req.body.mbl,
    scope: req.body.scope,
    category: req.body.category,
    location:req.body.location,
    time:req.body.time,
    price:req.body.price
  });

  lead.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: "New lead created!",
      data: lead
    });
  });
};

// Displaying lead
exports.view = function(req, res) {
  console.log(req.query.name);
  Lead.find({}, function(err, lead) {
    if (err) res.send(err);
    res.json({
      message: "Lead Displayed",
      data: lead
    });
  });
};

//Update lead
exports.edit = function(req, res) {
  console.log("leadController called");
  Lead.update(
    {
      _id: req.body._id
    },
    {
      custName: req.body.name,
      mbl: req.body.mbl,
      scope: req.body.scope,
      category: req.body.category,
      location:req.body.location,
      time:req.body.time,
      price:req.body.price
    },
    function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    }
  );
};

//Delete lead
exports.delete = function(req, res) {
  Lead.remove(
    {
      _id: req.body.del_id
    },
    function(err, lead) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "lead deleted"
      });
    }
  );
};


//find a lead by _id
exports.findlead = function(req,res){
  Lead.findOne(
    {_id:req.body._id},
    function(err,lead){
      if(err)
        res.send(err);
      else{
        console.log("Here is your lead.");
        res.json({
          data:lead
        });
      }
    });
}
