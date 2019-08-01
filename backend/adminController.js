Admin = require("./AdminModel");
let jwt = require("jsonwebtoken");
const secret = "jksvjsvbdkvbskbvskvb@somenjsnd3646";

exports.new = function(req, res) {
  var admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass
  });

  admin.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: "New Admin Created",
      data: admin
    });
  });
};

// router.post("/adminlogin", function(req, res) {

// })

exports.login = function(req, res) {
  Admin.findOne({
    $and: [{ email: req.body.email }, { pass: req.body.pass }]
  })
    .then(admin => {
      let token = jwt.sign(admin.toJSON(), secret);
      res.send({
        token
      });
    })
    .catch(err => {
      res.send(err);
    });
};

exports.verify = function(req, res) {
  let token = req.headers["authorization"];
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      console.log("Invalid Admin");
      res.send({ isvalid: false });
    } else {
      console.log("Valid Admin");
      res.send({ isvalid: true });
    }
  });
};
