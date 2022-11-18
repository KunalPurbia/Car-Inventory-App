var express = require('express');
var router = express.Router();
const sellerController = require('../controllers/sellerController');

/////////////////////////////////////GET HOME PAGE
router.get('/', sellerController.getHomePage);

module.exports = router;
