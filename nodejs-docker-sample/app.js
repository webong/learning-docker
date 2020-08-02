"use strict"; // Ensures our code is compiled in strict mode

// Lets import our web framework
var express = require("express");

// Initialise our app
const app = express();

// Lets set our port
/****
 **_ The default port number is ___`3000`___
 _** Take note on that as we will come to that.
 **_/

/*_
 _ To ensure works as it should we will create a
 _ simple endpoint to return a json response
 */

app.set("port", 3000);

// Define our json response
const data = {
  blog_name: "docker_nodejs_app",
  blog_author: "webong",
  blog_author_twitter: "@wisdomaebong"
};

// Define out GET request endpoint
app.get("/", (req, res) => {
  res.status(200).json(data);
});

// Initialize our server
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});