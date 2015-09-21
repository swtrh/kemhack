var express = require('express');
var router = express.Router();

/* GET store page. */
router.get('/', function(req, res, next) {
  res.render('store', { title: 'Store' });
});

module.exports = router;
