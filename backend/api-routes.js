let router = require("express").Router();
var AdminController = require("./adminController");
var CategoryController = require("./categoryController");
var LeadController = require("./leadController");
var UserVendorController = require("./userVendorController");
var TicketController = require("./ticketController");
var TransactionController = require("./transactionController");

router.get("/", function(req, res) {
  res.json({
    status: " API Working",
    message: "Welcome to Panel"
  });
});

//Admin routing
router.route("/adminsignup").post(AdminController.new);
router.route("/adminlogin").post(AdminController.login);
router.route("/adminverify").post(AdminController.verify);

//User-Vendor routing
router.route("/uservendorsignup").post(UserVendorController.new);
router.route("/uservendorlogin").post(UserVendorController.login);
router.route("/uservendorverify").post(UserVendorController.verify);
router.route("/uservendoredit").post(UserVendorController.edit);
router.route("/uservendordelete").post(UserVendorController.delete);
router.route("/uservendorview").get(UserVendorController.view);
router.route("/userlead").post(UserVendorController.userlead);
router.route("/buylead").post(UserVendorController.buylead);
router.route("/addticket").post(UserVendorController.addticket);

//category routing
router.route("/categoryadd").post(CategoryController.new);
router.route("/categoryedit").post(CategoryController.edit);
router.route("/categorydelete").post(CategoryController.delete);
router.route("/categoryview").get(CategoryController.view);

//lead routing
router.route("/leadadd").post(LeadController.new);
router.route("/leadedit").post(LeadController.edit);
router.route("/leaddelete").post(LeadController.delete);
router.route("/leadview").get(LeadController.view);

//ticket routing
router.route("/generateticket").post(TicketController.new);
router.route("/ticketedit").post(TicketController.edit);
router.route("/ticketdelete").post(TicketController.delete);
router.route("/ticketview").get(TicketController.view);

//transaction routing
router.route("/transactionadd").post(TransactionController.new);
router.route("/transactionview").get(TransactionController.view);

module.exports = router;
