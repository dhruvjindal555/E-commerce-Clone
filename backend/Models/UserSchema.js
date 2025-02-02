const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    } ,
    date:{
        type:Date,
        default:Date.now
    },
    profileUrl:{
        type:String,
        default:""
    },
    fullName:{
        type:String,
        default:"",
        required: true,
        trim: true 
    },
    phoneNumber:{
        type:String,
        default:""
    },
    address: {
        street: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        pinCode: { type: String, default: "" },
        country: { type: String, default: "" }
    },
    lastLoginDate: { type: Date }
});


const User = mongoose.model('User', UserSchema);

module.exports = User;