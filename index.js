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
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
