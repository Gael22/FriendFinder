var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

var port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on port %s", port));