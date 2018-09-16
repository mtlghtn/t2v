var express = require('express'),
    prepositions = require('./prepositions'),
    position = require('./position'),
    bodyParser = require('body-parser'),
    parser = require('./parser'),
    router = express.Router();


router.post('/results', function(req, res) {
    var query = req.body.query;
    var parsedQuery = parser.parseSentence(query);
    var positionedQuery = position.calculatePositions([
        {
            imgPath: '../public/images/' + parsedQuery.objectA + '.png',
            imgWidth: 0,
            imgHeight: 0
        },
        {
            imgPath: '../public/images/' + parsedQuery.objectB + '.png',
            imgWidth: 0,
            imgHeight: 0
        }
    ], parsedQuery.action, {
        width: 800,
        height: 600
    });
    console.log(positionedQuery);
    res.render('result', {});
});

/*
router.get('/result', function(req, res) {
    res.render('result', {})
});
*/
module.exports = router
