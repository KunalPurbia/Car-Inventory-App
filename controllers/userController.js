module.exports.getHomePage = function (req, res, next) {
    res.render('index');
}

module.exports.getLoginPage = function (req, res, next) {
    res.render('login');
}

module.exports.getRegisterPageBuyer = function (req, res, next) {
    res.render('registerBuyer');
}

module.exports.getRegisterPageSeller = function (req, res, next) {
    res.render('registerSeller');
}