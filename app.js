const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended : true}));
app.use(require('./controllers'));


app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});

