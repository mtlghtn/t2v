var express = require('express')
  , router = express.Router();

router.post('/', function(req, res) {
    res.redirect('/result');
});

router.get('/result', function(req, res) {
    res.render('result', {})
});

module.exports = router
