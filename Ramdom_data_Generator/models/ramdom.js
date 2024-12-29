const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    gender:String,
    email:mongoose.Schema.Types.Mixed ,
    locatioFeild:mongoose.Schema.Types.Mixed ,
    phone:mongoose.Schema.Types.Mixed ,
    ID:mongoose.Schema.Types.Mixed,
    Password:mongoose.Schema.Types.Mixed 
  });
  const User = mongoose.model('User', userSchema)
  module.exports = User