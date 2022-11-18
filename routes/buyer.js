var express = require('express');
var router = express.Router();
const buyerController = require('../controllers/buyerController');

/////////////////////////////////////GET HOME PAGE
router.get('/', buyerController.getHomePage);

module.exports = router;
