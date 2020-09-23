/**********************************************
 *
 * ==================================
 ***********************************************/
/** #  #
/*  ====================== */
/**  */
const app = require("express")();

// These are the node modules that we installed
const bodyParser = require("body-parser");
const expressFileUpload = require("express-fileupload");

// These are the native modules that node already has
const fs = require("fs");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressFileUpload);
