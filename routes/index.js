var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'dhineshns',
  	subtitle : 'Jack Of All Trades, Master Of Captcha'
  });
});

module.exports = router;
