import jwt from 'jsonwebtoken';

import { User } from '../Models/User.js';

export const isAuthenticated = async (req,res, next) =>{
    const token = req.header('Auth');

    if(!token){
        return res.status(401).json({success: false, message: 'Unauthorized Access LogIn First'});
    }
const decoded = jwt.verify(token, process.env.JWT);
const id= decoded.userId;

let user = await User.findById(id);
if(!user){  
    return res.status(400).json({success: false, message: "User does not exist"});
}
req.user= user;
next();
    
}



