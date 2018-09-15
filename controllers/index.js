var express = require('express'),
    prepositions = require('./prepositions'),
    position = require('./position'),
    router = express.Router();

router.post('/', function(req, res) {
    res.render('result', {});
});

/*
router.get('/result', function(req, res) {
    res.render('result', {})
});
*/
module.exports = router
