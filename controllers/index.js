var express = require('express'),
    parser = require('./parser'),
    position = require('./position'),
    bodyParser = require('body-parser'),
    router = express.Router();


router.post('/results', function(req, res) {
    // console.log(req.body.query);
    var rawQuery = req.body.query;
    var processed = parser.parseSentence(rawQuery);
    console.log(processed);
    res.render('result', {});
});

/*
router.get('/result', function(req, res) {
    res.render('result', {})
});
*/
module.exports = router
