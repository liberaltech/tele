var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/quotes', function(req, res, next) {
  res.render('quotes');
});
router.get('/calculator', function(req, res, next) {
  res.render('calculator');
});
router.get('/wiki', function(req, res, next) {
  res.render('wiki');
});
router.get('/markdown', function(req, res, next) {
  res.render('markdown');
});
router.get('/weather', function(req, res, next) {
	res.render('weather');
});
module.exports = router;
