const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    userName: {
        type: String,  //Email validation
        //required: true,
        //unique: true
    },
    email : {
        type : String,
        //required : true
    },
    phone : {
        type : String,
        //required : true
    },
    dob : {
        type : String,
        //required : true
    },
    gender : {
        type : String,
        //required : true,
        enum : ['M', 'F', 'Others']
    },
    password: {
        type: String,
        //required: true,
        minLength: 8,
        maxLength: 15
    },
    confirmPassword: {
        type: String,
       // required: true,
        minLength: 8,
        maxLength: 15
    },
    image : {
        type : String,
        default : 'https://tinyurl.com/2auvrb5n'
    },
    isDeleted : {
        type : Boolean, 
        default: false
    }
},{timestamps: true});


module.exports = mongoose.model("Customer", customerSchema)