var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  console.log('Contact page goes here.')
});

router.get('/about', function(req, res, next) {
  console.log('About page goes here.')
});

module.exports = router;
