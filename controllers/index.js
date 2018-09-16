var express = require('express'),
    parser = require('./parser'),
    position = require('./position'),
    bodyParser = require('body-parser'),
    parser = require('./parser'),
    image = require('./image'),
    router = express.Router();


router.post('/results', function(req, res) {
    var rawQuery = req.body.query;
    var parsedQuery = parser.parseSentence(rawQuery);
    // console.log(parsedQuery);
    var positionedQuery = position.calculatePositions([
        image.getImageObject(parsedQuery.objectA),
        image.getImageObject(parsedQuery.objectB),
    ], parsedQuery.action, {
        width: 800,
        height: 600
    });
    // console.log(positionedQuery);
    res.render('result', { 'positionedQuery': positionedQuery });
});

/*
router.get('/result', function(req, res) {
    res.render('result', {})
});
*/
module.exports = router
