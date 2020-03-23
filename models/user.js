var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user model

var userSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    beautician: {type: Boolean, default: false },
    location: String, 
    avlDateandTime: String,
    profileImage: String,
    typeOfService: String,
    price: {type: String, required: true}, 
    clientImage: [{type:String}],
    description: {type: String},  
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;