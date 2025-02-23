import express from 'express';
import { addProduct, deleteProductById, getProduct, getProductById, updateProduct } from '../Controllers/product.js';

const router = express.Router();

//add product
//@api - /api/product/add
router.post('/add', addProduct);

//get product
//@api - /api/product/get
router.get('/get', getProduct);

//get product by id specific
//@api - /api/product/get/:id
router.get('/:id', getProductById);

// update product
//@api - /api/product/upddate/:id
router.put('/update/:id', updateProduct);

//delete product
//@api - /api/product/delete/:id
router.delete("/delete/:id",deleteProductById);



export default router;
