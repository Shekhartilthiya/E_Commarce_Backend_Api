import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({},{strict: false});  //strict false to allow dynamic keys


export  const Product = mongoose.model('Product',productSchema);