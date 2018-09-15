const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.send('HOME PAGE');
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});

