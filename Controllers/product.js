import { Product } from "../Models/Product.js";



//add product
export const addProduct = async (req,res) => {
    try{
        let product = await Product.create(req.body);
        res.json({message: "Product added Successfully",product ,success: true});

    }catch(err){
        res.json({message: "Something went wrong", err, success: false});   
    }
}

//get product
export const getProduct = async (req,res) => {
    try{
        let products = await Product.find();
        if(!products){
            return res.json({message: "No product found",success: false});
        }
        res.json({message: "product fetched Successfully",products ,success: true});
    }catch(error){
        res.json({message: "Somthing went wrong",error ,success: false});
    }
}

//get product by id
export const getProductById = async (req,res) => {
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.json({message: "Invalid Id ",success: false});  
        }
        res.json({message: " fetched Specific Successfully",product ,success: true});
    }catch(error){
        res.json({message: "Somthing went wrong",error ,success: false});
    }
}

//update product
export const updateProduct = async (req, res)=>{
    try{
        const id = req.params.id;
      let   product = await Product.findByIdAndUpdate(id, req.body,{new: true});
        if(!product){
            return res.json({message: 'Invalid Id cannot update',success: false});
        }
        res.json({message: "Product updated Successfully", product, success: true});

    }catch(error){
        res.json({message: "Somthing went wrong",error ,success: false,error});
    }
}

//delete product
export const deleteProductById = async (req, res) =>{
    try{
        const id= req.params.id;
        let product =  await Product.findByIdAndDelete(id);
        if(!product){
            return res.json({messsage: 'Invalid Id cannot delete', success: false});
        }
        res.json({message: "product Delete Successfully",product, success: true});
    }catch(error){
        res.json({message: "Somthing went wrong",error ,success: false ,error});
    }
}