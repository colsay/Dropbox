# Dropbox with Cache :rocket:

## To Run

```
npm install
```

```
nodemon
```

## Step 1 - Set up your project

Set up your NPM project - npm init
npm install required modules - express, express-fileupload, body-parser
set up a .gitignore, to ignore the node_modules folder

## Step 2 - Set up the index.js

require your modules both third-party node & node-native modules
Set up your middleware in your application - express-fileupload & bodyParser

empty folder (that will contain all the files uploaded)
serve your empty folder to your server using express.static

create a variable for your cache

## Step 3 - Create your promised versions of FS

Create fs readFile and writeFile as promised functions on your server to be used within your API calls.

Ensure your writeFile calls the readFile function at the end

## Step 4 - Setup your server API (end points)

API for sending index page

API for receiving files from the client

API for sending files back to the client

## Step 5 - Create your index.html

This should have a form so that you can upload files on the submit button.

## Step 6 - Make your server run

Ensure your application is listening to a specific port
Within the terminal cd to the directory then run:
node / nodemon index.js

Important websites:

https://www.remotestack.io/create-node-express-multer-file-upload-download-rest-api/

https://github.com/remotestack377/node-file-upload-api (useful 4)

https://loopback.io/doc/en/lb4/File-upload-download.html

https://loizenai.com/node-js-rest-api-file-upload/#overview-how-to-build-nodejs-restapi-file-upload-to-mysql-postgresql (useful 3)

https://ashwanibakshii.blogspot.com/2019/11/upload-and-download-file-in-node_2.html

https://www.c-sharpcorner.com/blogs/upload-and-download-file-in-node

https://grokonez.com/node-js/nodejs-express-upload-multipartfiles-images-multer-jquery-ajax-bootstrap (most useful)

https://github.com/remotestack377/node-file-upload-api (useful too)

https://www.remotestack.io/create-node-express-multer-file-upload-download-rest-api/

https://github.com/AzharHusain/youtube-file-upload-download

https://ashwanibakshii.blogspot.com/2019/11/upload-and-download-file-in-node_2.html
