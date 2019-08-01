Tickets = require("./ticketModel");
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  auth:{
    type:'login',
    user: 'nikhilleadmanagement@gmail.com',
    pass:'nikhil@123$'
  }
});

const mailOptions = {
  from:"nikhilleadmanagement@gmail.com",
  to:"narora1998@gmail.com",
  subject:"Testing node mailer",
  text:'Node mailer tested successfully.'
};

//creating ticket
exports.new = function(req, res) {
  var ticket = new Tickets();
  ticket.title = req.body.title;
  ticket.description = req.body.description;

  ticket.save(function(err) {
    if (err) res.send(err);
    else{
              transporter.sendMail(mailOptions,function(err,info){
              if(err)
                console.log(err);
              else
                console.log("Mail sent");
            });
            res.json({
      message: "New ticket created",
      data: ticket
    });
    }

  });
};

//displaying ticket
exports.view = function(req, res) {
  Tickets.findOne({ title: req.query.title }, function(err, ticket) {
    if (err) res.send(err);
    res.json({
      message: "Ticket Displayed",
      data: ticket
    });
  });
};

//Update Category
exports.edit = function(req, res) {
  Tickets.update(
    {
      _id: req.body.id
    },
    {
      title: req.body.title,
      description: req.body.description
    },
    function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    }
  );
};

//Delete Category

exports.delete = function(req, res) {
  Tickets.remove(
    {
      title: req.body.title
    },
    function(err, category) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "ticket deleted"
      });
    }
  );
};
