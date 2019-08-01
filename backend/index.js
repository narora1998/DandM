let mongoose = require("mongoose");
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let apiRoutes = require("./api-routes");
let app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    urlencoded: true
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/LeadDistributionAndManagement");

var db = mongoose.connection;
var port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello from Express"));
app.use("/api", apiRoutes);
app.listen(port, function() {
  console.log("Running on port" + port);
});
