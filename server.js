import express from 'express'
import mongoose  from 'mongoose'
import bodyParser from 'body-parser'
import {config} from 'dotenv';
import userRouter from './Routes/user.js';
import  productRouter from './Routes/product.js';
import cartRouter from './Routes/cart.js';

//env config
config({path: `.env`});



const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI,
    {dbName: "Nodejs_Mastery_Course_E_Commerce_API"}
).then(()=>console.log("mongodb Connected..")).catch((err)=>console.log(err)) ;


//user router
app.use('/api/user', userRouter);

//product router
app.use('/api/product', productRouter);

//cart router
app.use('/api/cart', cartRouter);


app.get('/',(req,res)=>{
    res.send("hello");
});    











const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);       
})