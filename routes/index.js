var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/store/', function(req, res, next) {
  res.render('store', { title: 'Store' });
});

module.exports = router;
