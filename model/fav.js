let mongoose = require ('mongoose');

let favouriteSchema= mongoose.Schema({
name:String,
description: String,
},
{
collection: "favourite-things"

}
);

module.exports = mongoose.model('demo',favouriteSchema);