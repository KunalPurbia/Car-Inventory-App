var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/buyer', userController.getRegisterPageBuyer);

router.get('/seller', userController.getRegisterPageSeller);

module.exports = router;
