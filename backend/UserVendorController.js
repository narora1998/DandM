UsersVendor = require("./userVendorModel");
const Lead = require("./leadModel");
const Tickets = require("./ticketModel");

let jwt = require("jsonwebtoken");
const secret = "hcbvjhscvshcvschdbsh63782746";

//making user-vendor
exports.new = function(req, res) {
  console.log(req.body);
  var usersVendor = new UsersVendor({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
    mbl: req.body.mbl,
    address: req.body.address,
    category: req.body.category,
    balance: req.body.balance
  });

  usersVendor.save(function(err) {
    if (err) res.json(err);
    else {
      res.json({
        message: "New User/Vendor Created",
        data: usersVendor
      });
    }
  });
  console.log("RECEIVING");
};

//login user-vendor
exports.login = function(req, res) {
  UsersVendor.findOne({
    $and: [{ email: req.body.email }, { pass: req.body.pass }]
  })
    .then(usersVendor => {
      let token = jwt.sign(usersVendor.toJSON(), secret);
      res.send({
        token
      });
    })
    .catch(err => {
      res.send(err);
    });
};

// Verify user-vendor
exports.verify = function(req, res) {
  let token = req.headers["authorization"];
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      console.log("Invalid User/Vendor");
      res.send({ isvalid: false });
    } else {
      console.log("Valid User/Vendor");
      res.send({ isvalid: true, user: decode });
    }
  });
};

//Update user-vendor
exports.edit = function(req, res) {
  console.log("Inside update user-vendor controller");
  console.log(req.body);
  UsersVendor.update(
    {
      _id: req.body._id
    },
    {
      name: req.body.name,
      email: req.body.email,
      pass: req.body.pass,
      mbl: req.body.mbl,
      address: req.body.address,
      category: req.body.category,
      balance: req.body.balance
    },
    function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    }
  );
};

//Delete user-vendor
exports.delete = function(req, res) {
  UsersVendor.remove(
    {
      _id: req.body.del_id
    },
    function(err, lead) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "user/vendor Deleted"
      });
    }
  );
};

// Displaying user-vendor
exports.view = function(req, res) {
  //console.log(req.query.name);
  UsersVendor.find({}, function(err, usersVendor) {
    if (err) res.send(err);
    res.json({
      message: "user/vendor Displayed",
      data: usersVendor
    });
  });
};

//update user balance
exports.buylead = function(req, res) {
  console.log("Inside user balance update");
  let token = req.headers.authorization;
  jwt.verify(token, secret, (err, decode) => {
    if (err) console.log("Invalid User/Vendor");
    else {
      console.log(decode);
      Lead.findById(req.body.id, function(err, lead) {
        console.log(lead.price);
        UsersVendor.findById(decode._id, function(err1, user) {
          user.balance = user.balance - lead.price;
          user.save();
          res.json({ msgs: "Lead Bought Successfully" });
        });
      });
    }
  });
};

//add ticket to user
exports.addticket  = function(req,res){
  let token = req.headers.authorization;
  jwt.verify(token,secret,(err,decode)=>{
    if(err)
      res.send(err)
    else{
      console.log(decode);
      Tickets.findById(req.body.userId,function(err,ticket){
        console.log("Ticket Pushed");
        UsersVendor.findById(decode._id,function(err1,user){
          user.uTickets.push(ticket._id);
          user.save();
          ticket.uid = user._id;
          ticket.save();
          res.json({msgs:"Ticket added to user successfully"});
        });
      });
    }
  });
}

//user vendor lead display
exports.userlead = function(req, res) {
  console.log(req.headers);
  let token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      console.log("Invalid User/Vendor");
      res.send({ isvalid: false });
    } else {
      //find condition decode.category
      console.log("Valid User/Vendor");
      let leads = [];
      let len = decode.category.length;
      let x = 0;
      decode.category.forEach(cat => {
        Lead.find({ category: { _id: cat._id, name: cat.name } }, function(
          err,
          lead
        ) {
          leads.push(lead);
          x++;
          console.log(leads);

          if (len == x) {
            res.json({ leads });
          }
        });
      });
    }
  });
};

