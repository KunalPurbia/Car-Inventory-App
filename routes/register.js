var express = require('express');
var router = express.Router();

router.get('/buyer', function(req, res, next) {
  res.render('registerBuyer');
});

router.get('/seller', function(req, res, next) {
  res.render('registerSeller');
});

module.exports = router;
