var express = require('express');
var router = express.Router();
const sellerController = require('../controllers/sellerController');
const catalogueController = require('../controllers/catalogueController');

/////////////////////////////////////GET HOME PAGE
router.get('/', sellerController.getHomePage);

/////////////////////////////////////GET CATALOGUE PAGE
router.get('/catalogue', catalogueController.getCataloguePageSeller);

/////////////////////////////////////GET ADD CATALOGUE PAGE
router.get('/catalogue/add', catalogueController.getAddCataologue);

/////////////////////////////////////ADDING COMPANY IN CATALOGUE
router.post('/catalogue/add', catalogueController.postAddCataologue);

module.exports = router;
