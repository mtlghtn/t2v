var express = require('express'),
    prepositions = require('./prepositions'),
    position = require('./position'),
    bodyParser = require('body-parser'),
    router = express.Router();


router.post('/', function(req, res) {
    console.log(req.body.query);
    res.render('result', {});
});

/*
router.get('/result', function(req, res) {
    res.render('result', {})
});
*/
module.exports = router
