var express = require('express')
  , router = express.Router();

router.post('/', function(req, res) {
    res.render('result');
});

module.exports = router
