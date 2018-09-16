var express = require('express'),
    parser = require('./parser'),
    position = require('./position'),
    bodyParser = require('body-parser'),
    parser = require('./parser'),
    image = require('./image'),
    router = express.Router();


router.post('/results', function(req, res) {
    console.log(req.body);
    var rawQuery = req.body.query;
    var parsedQuery = parser.parseSentence(rawQuery);
    // console.log(parsedQuery);
    var positionedQuery = position.calculatePositions([
        image.getImageObject(parsedQuery.objectA),
        image.getImageObject(parsedQuery.objectB),
    ], parsedQuery.action, {
        width: req.body.width*2.2,
        height: 1500
    });
    // console.log(positionedQuery);
    res.render('result', positionedQuery);
});

/*
router.get('/result', function(req, res) {
    res.render('result', {})
});
*/
module.exports = router
