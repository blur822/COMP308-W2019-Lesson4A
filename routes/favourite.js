let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let contact= require('../model/fav');
router.get('/',(req,res,next)=>{
contact.find((err,favlist) => {
//console.log(contactList);
if(err){
    return console.error(err);
}
else{
    console.log(favlist);
    res.render('favourite/index',{
        title:'Favourite list',
        favlist: favlist
    });
}
})
});

module.exports = router;