let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let contact= require('../models/contact');
router.get('/',(req,res,next)=>{
contact.find((err,contactList) => {
//console.log(contactList);
if(err){
    return console.error(err);
}
else{
    console.log(contactList);
    res.render('contacts/index',{
        title:'Contacts list',
        contactList: contactList
    });
}
})
});

module.exports = router;