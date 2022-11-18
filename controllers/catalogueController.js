var express = require('express');
const {
    check,
    validationResult
} = require('express-validator');

const catalogueDB = require('../models/cataloguedb')

urlencoded = express.urlencoded({
    extended: false
});

/////////////////////////////////////BUYER CATALOGUE PAGE DISPLAY
module.exports.getCataloguePageBuyer = async function(req, res, next){
    const userEmail = req.cookies.user_email;
    let catalogueData = await catalogueDB.getCatalogue();
    res.render("cataloguePage", {userEmail: userEmail, user:"buyer", catalogueData: catalogueData})
}

/////////////////////////////////////SELLER CATALOGUE PAGE DISPLAY
module.exports.getCataloguePageSeller = function(req, res, next){
    const userEmail = req.cookies.user_email;
    res.render("cataloguePage", {userEmail: userEmail, user:"seller"})
}

/////////////////////////////////////ADD-CATALOGUE PAGE DISPLAY
module.exports.getAddCataologue = function (req, res, next) {
    const userEmail = req.cookies.user_email;
    res.render("addCatalogue", {
        userEmail: userEmail,
        user: "seller"
    })
}

let catalogueCheck = [check('carCompany', 'Car Company cannot be empty').notEmpty(),
    check('companyAbout', 'Company Detail cannot be empty').notEmpty(),
    check('companyLogo', 'Insert company logo').notEmpty()
]

/////////////////////////////////////ADDING CATALOGUE TO DATABASE
module.exports.postAddCataologue = [urlencoded, catalogueCheck, async function (req, res, next) {
    const userEmail = req.cookies.user_email;

    let data = {};
    data.email = userEmail;
    data.carCompany = req.body.carCompany;
    data.companyAbout = req.body.companyAbout;
    data.companyLogo = req.body.companyLogo;

    let errorData = validationResult(req);
    let errorArray = errorData.errors;
    if (errorArray.length === 0) {
        catalogueDB.addCatalogue(data)
        res.render("cataloguePage", {userEmail: userEmail, user:"seller"})   
    } else {
        const errorInput = errorArray[0].param;
        const errorMessage = errorArray[0].msg;
        res.render('addCatalogue', {
            errorInput: errorInput,
            message: errorMessage,
            userEmail: userEmail
        });
    }
}]