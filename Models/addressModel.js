const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const addressSchema = mongoose.Schema({
   customerId:{
    type : ObjectId,
    required : true,
    ref : 'Customer'
   },
   address : {
     type: String,
     required: true
   },
   landmark: {
    type: String,
    required: true
   },
   city: {
    type: String,
    required: true
   },
   state: {
    type: String,
    required: true
   },
   zipCode: {
    type: Number,
    required: true
   }
},{timestamps: true});


module.exports = mongoose.model("address", addressSchema)