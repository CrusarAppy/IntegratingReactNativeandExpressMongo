const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    Fullname : {
        type : String,
        //required : true
    },    
    Username: {
        type : String,
       // required : true
    }, 
    Address : {
        type : String,
       // required : true
    },  
    PhoneNumber :{
        type : String,
        //required : true
    },

    Email : String,

    Password : {
        type : String,
       // required : true
    },

    Gender: String,

    DOB : String,

    LicenseNo:{
        type : String,
        //required : true
    },

    Specialization: {
        type : String,
        //required : true
    },
    PanNo : {
        type : String,
        //required : true
    },
    
    Type : String

});

module.exports = mongoose.model('Users',userSchema );