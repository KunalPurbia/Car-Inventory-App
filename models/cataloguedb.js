const mongoose = require('mongoose');

/////////////////////////////////////SCHEMA FOR ADD CATALOGUE
const catalogueSchema = mongoose.Schema({
    email: String,
    companyName: String,
    companyAbout: String,
    companyLogo: String
})

/////////////////////////////////////MODEL FOR CATALOGUE
const Catalogue = new mongoose.model("catalogue", catalogueSchema);

/////////////////////////////////////ADDING CATALOGUE TO DATABASE
module.exports.addCatalogue = (buyerDetail) =>{
    const newCatalogue = new Catalogue(buyerDetail);

    newCatalogue.save((err)=>{
        if(err) throw err;
    })
}

module.exports.getCatalogue = () => {
    return new Promise((resolve) => {
        Catalogue.find({}, function(err, foundData){
            if(err) throw err;
            resolve(foundData)
        });
    });
}