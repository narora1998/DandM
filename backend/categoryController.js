// Import category model
Category = require("./categoryModel");

// Handle create contact actions
exports.new = function(req, res) {
  var category = new Category();
  category.name = req.body.name;

  //Making new category
  category.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: "New category created!",
      data: category
    });
  });
};

// Displaying Category
exports.view = function(req, res) {
  Category.find({}, function(err, category) {
    if (err) res.send(err);
    res.json({
      message: "Category Displayed",
      data: category
    });
  });
};

//Update Category
exports.edit = function(req, res) {
  console.log("Inside category controller");
  console.log(req.body);
  Category.update(
    {
      _id: req.body._id
    },
    {
      name: req.body.name
    },
    function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    }
  );
};

//Delete Category
exports.delete = function(req, res) {
  Category.remove(
    {
      _id: req.body.del_id
    },
    function(err, category) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Category deleted"
      });
    }
  );
};

// listing all users
// exports.list = function(req, res) {
//   Contact.find().then(data => {
//     res.send(data);
//   });
// };
