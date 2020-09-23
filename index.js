/**********************************************
 * Dropbox!
 * ==================================
 ***********************************************/
/** # 
 * Being able to read, understand and utilize libraries is a key skill for any developer
 * 
 * Please read the documentation of express fileupload here: 
 * https://www.npmjs.com/package/express-fileupload
 *  #
/*  ====================== */
/**  */
const app = require("express")();

// These are the node modules that we installed
const bodyParser = require("body-parser");
const expressFileUpload = require("express-fileupload");

// These are the native modules that node already has
const fs = require("fs");
const path = require("path");

// Utilize the node modules - this is the middleware
// This will be applied to EVERY request and response
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressFileUpload);

// Set up object cache
let cache = {};

// Route handler
app.use("/", (req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/data/:name", (req, res) => {
  // The cache will utilize the route route :name
  // Go to postman, then create a post request to localhost:8080/data/squirtle
  // In key: type in data
  // in value, type in {"name": "squirtle", "age": 5}
  cache[req.params.name] = req.body.data;
  console.log(cache);
  res.send(cache);
});

// Listen to any incoming requests
app.listen(3000, () => {
  console.log("Application listening to port 8080");
});
