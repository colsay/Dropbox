var express = require('express');
var upload = require('express-fileupload');
var app = express();
var arr = []
var fs = require('fs')


app.use(express.static(__dirname));
app.use(express.static('uploads'))
app.use(upload())


console.log('server started!')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', (req, res) => {

    if (req.files) {
        console.log(req.files)
        var file = req.files.filename
        var fileName = file.name;
        var fileLocation = __dirname + '/uploads/'

        file.mv(__dirname + '/uploads/' + fileName, function (err) {
            if (err) {
                console.log(err)
                res.send('error occured')
            } else {
                arr.push(fileName)
                console.log(arr)

                return res.redirect('/')

            }
        })
    }
})


app.get('/getfiles', function (req, res) {
    const files = fs.readdirSync('uploads')
    res.json(files)


})

app.get('/download', function (req, res) {
    console.log(req.query);
    let file = Object.keys(req.query)
    filepath = (__dirname + '/uploads/' + file)
    res.download(filepath)

})



app.listen(8000, () => console.log('hello im port 8000'))