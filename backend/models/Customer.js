const mongoose=require('mongoose');
const customerSchema = new mongoose.Schema({
    phoneNumber: {
        type:String,
        required: true
    },
    firstName:{
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    } ,
    email: {
        type:String,
        required: true
    } ,
    street: {
        type:String,
        required: true
    } ,
    city: {
        type:String,
        required: true
    } ,
    state: {
        type:String,
        required: true
    } ,
    zip: {
        type:String,
        required: true
    } ,
    organization: {
        type:String,
        required: true
    }
  });
  
  const Customer = mongoose.model('Customer', customerSchema);
  module.exports=Customer;