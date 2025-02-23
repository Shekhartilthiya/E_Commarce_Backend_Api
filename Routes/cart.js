import express from 'express';
import { addToCart, clearCart, decreaseQuantity, removeProductFromCart, userCart } from '../Controllers/cart.js';
import {isAuthenticated} from '../Middleware/Auth.js';





const router = express.Router();

//add to cart 
//@api/cart/add
router.post('/add',isAuthenticated, addToCart);

//get user cart

router.get('/user',isAuthenticated,userCart );

//remove product from cart
router.delete('/remove/:productID',isAuthenticated,removeProductFromCart);

//clear cart
router.delete('/clear',isAuthenticated,clearCart);
    //decrease quantity
router.post('/decrease',isAuthenticated,decreaseQuantity);


export default router;
