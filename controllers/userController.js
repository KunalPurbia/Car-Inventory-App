var express = require('express');
const {
    check,
    validationResult
} = require('express-validator');
var router = express.Router();

urlencoded = express.urlencoded({
    extended: false
});

/////////////////////////////////////HOME PAGE DISPLAY
module.exports.getHomePage = function (req, res, next) {
    res.render('index');
}

/////////////////////////////////////LOGIN PAGE DISPLAY
module.exports.getLoginPage = function (req, res, next) {
    res.render('login');
}

/////////////////////////////////////CHECK USER LOGIN
const loginCheck = [check('email', 'Email is not valid').isEmail(),
    check('password', 'Password cannot be empty').notEmpty(),
]

/////////////////////////////////////POST USER LOGIN
module.exports.postLogin = [urlencoded, loginCheck, function (req, res, next) {
    console.log("Login");
    console.log(req.body);
    let errorData = validationResult(req);
    let errorArray = errorData.errors;
    if (errorArray.length === 0) {
        const dob = req.body.dob;
        const year = dob.slice(0, 4);
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;

        const userDetail = {};
        userDetail.username = req.body.username;
        userDetail.email = req.body.email;
        userDetail.dob = req.body.dob;
        userDetail.age = age;
        userDetail.password = req.body.password;

        res.send("Login")
        // const newUser = new User(userDetail);

        // newUser.save((err) => {
        //     if (err) throw err
        //     res.redirect('/login');
        // })
    } else {
        const errorInput = errorArray[0].param;
        const errorMessage = errorArray[0].msg;
        // res.send(error)
        res.render('login', {
            errorInput: errorInput,
            message: errorMessage
        });
    }
}]

/////////////////////////////////////BUYER REGISTER PAGE DISPLAY
module.exports.getRegisterPageBuyer = function (req, res, next) {
    res.render('registerBuyer');
}

/////////////////////////////////////CHECK BUYER REGISTER
const buyerRegisterCheck = [check('username', 'Name cannot be empty').notEmpty(),
    check('userAddress', 'Address cannot be empty').notEmpty(),
    check('userContact', 'Contact cannot be empty').notEmpty(),
    check('userEmail', 'Email is not valid').isEmail(),
    check('password', 'Password cannot be empty').notEmpty(),
    check('cpassword').custom((value, {
        req
    }) => {
        if (value != req.body.password)
            throw new Error("Confirm Password do not match password");
        return true;
    })
]

/////////////////////////////////////POST BUYER REGISTER
module.exports.postRegisterBuyer = [urlencoded, buyerRegisterCheck, function (req, res, next) {
    console.log("Buyer");
    console.log(req.body);
    let errorData = validationResult(req);
    let errorArray = errorData.errors;
    if (errorArray.length === 0) {
        const dob = req.body.dob;
        const year = dob.slice(0, 4);
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;

        const userDetail = {};
        userDetail.username = req.body.username;
        userDetail.email = req.body.email;
        userDetail.dob = req.body.dob;
        userDetail.age = age;
        userDetail.password = req.body.password;

        res.send("Buyer")
        // const newUser = new User(userDetail);

        // newUser.save((err) => {
        //     if (err) throw err
        //     res.redirect('/login');
        // })
    } else {
        const errorInput = errorArray[0].param;
        const errorMessage = errorArray[0].msg;
        // res.send(error)
        console.log(errorInput);
        res.render('registerBuyer', {
            errorInput: errorInput,
            message: errorMessage
        });
    }
}]

/////////////////////////////////////SELLER REGISTER PAGE DISPLAY
module.exports.getRegisterPageSeller = function (req, res, next) {
    res.render('registerSeller');
}

/////////////////////////////////////CHECK SELLER REGISTER
const sellerRegisterCheck = [check('showroomName', 'Showroom Name cannot be empty').notEmpty(),
    check('showroomAddress', 'Showroom Address cannot be empty').notEmpty(),
    check('showroomContact', 'Showroom Contact cannot be empty').notEmpty(),
    check('showroomId', 'Showroom ID cannot be empty').notEmpty(),
    check('carCompany', 'Car Company cannot be empty').notEmpty(),
    check('showroomEmail', 'Email is not valid').isEmail(),
    check('password', 'Password cannot be empty').notEmpty(),
    check('cpassword').custom((value, {
        req
    }) => {
        if (value != req.body.password)
            throw new Error("Confirm Password do not match password");
        return true;
    })
]

/////////////////////////////////////POST SELLER REGISTER
module.exports.postRegisterSeller = [urlencoded, sellerRegisterCheck, function (req, res, next) {
    console.log("Seller");
    console.log(req.body)
    let errorData = validationResult(req);
    let errorArray = errorData.errors;
    if (errorArray.length === 0) {
        const dob = req.body.dob;
        const year = dob.slice(0, 4);
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;

        const userDetail = {};
        userDetail.username = req.body.username;
        userDetail.email = req.body.email;
        userDetail.dob = req.body.dob;
        userDetail.age = age;
        userDetail.password = req.body.password;

        res.send("Seller")
        // const newUser = new User(userDetail);

        // newUser.save((err) => {
        //     if (err) throw err
        //     res.redirect('/login');
        // })
    } else {
        const errorInput = errorArray[0].param;
        const errorMessage = errorArray[0].msg;
        // res.send(error)
        console.log(errorInput);
        res.render('registerSeller', {
            errorInput: errorInput,
            message: errorMessage
        });
    }
}]