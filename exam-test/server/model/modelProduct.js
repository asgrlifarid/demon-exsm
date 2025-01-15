const mongoose = require('mongoose');
const { Schema } = mongoose;



const ProductSchema = new Schema({
    title: String, 
    description: String,
    imageUrl: String,
    price:Number,
   
  });
  const ProductModel = mongoose.model('Products', ProductSchema);
  module.exports=ProductModel;