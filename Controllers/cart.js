import {Cart} from '../Models/Cart.js';

//add to Cart

export const addToCart = async (req, res) =>{
    const {productId, title, price, qty} = req.body;

    const userId = req.user;
    
    let cart = await Cart.findOne({userId});
console.log("cart is ", cart);
    if(!cart){
        cart = new Cart({userId, items:[]});
    }

   
    const itemIndex = cart.items.findIndex((item) => item.productId?.toString() === productId.toString());


    if(itemIndex >-1){
        cart.items[itemIndex].qty += qty;
        cart.items[itemIndex].price += price*qty;
    }else{
        cart.items.push({productId, title, price, qty});
    }
    await cart.save();
    res.json({message: "Product added to cart",success: true, cart});

}

//get user cart
export const userCart = async (req, res) =>{
    const userId  = req.user

    let cart = await Cart.findOne({userId})
    if(!cart){
        return res.json({message: "Cart not found",success: false});
    }
    res.json({message: " User Cart fetched Successfully",success: true, cart});
}

//remove product from cart
export const removeProductFromCart = async (req,res) =>{
    const productID = req.params.productID;
    const userId = req.user;

    let cart = await Cart.findOne({userId});
    if(!cart){
        return res.json({message: "Cart not found",success: false});
    }
    cart.items = cart.items.filter((item) => item.productId?.toString() !== productID.toString());
    await cart.save();

    res.json({message: "Product removed from cart",success: true, cart});

}


//clear cart
export const clearCart = async (req, res) =>{
    const userId = req.user;
    let cart = await Cart.findOne({userId});
    if(!cart){
        cart = new Cart({userId, items:[]});
    }else{
        cart.items = [];
    }
    await cart.save();
    res.json({message: "Cart cleared",success: true, cart});
}

//decrese quantity
export  const decreaseQuantity = async (req, res) =>{

    const {productId, qty} = req.body;

    const userId = req.user;
    
    let cart = await Cart.findOne({userId});
console.log("cart is ", cart);
    if(!cart){
        cart = new Cart({userId, items:[]});
    }

   
    const itemIndex = cart.items.findIndex((item) => item.productId?.toString() === productId.toString());


    if(itemIndex >-1){
       const item = cart.items[itemIndex];

       if(item.qty >qty){
        const pricePerUnit = item.price/item.qty;
        item.qty -= qty;
        item.price -= pricePerUnit*qty;
       }else{
        cart.items.splice(itemIndex, 1);
       }

    }else{
        return res.json({message: "Invalid product Id",success: false});
    }
    await cart.save();
    res.json({message: "Items quantity decresed",success: true, cart});

    

}