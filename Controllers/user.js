import {User} from '../Models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


//register
export const register = async (req,res)=>{
    const {name,email,password}= req.body;
    
    let user= await User.findOne({email});
    if(user){
        return res.status(400).json({success: false, message: "User already exists"});
    }
    const hashPassword  = await bcrypt.hash(password, 10);

    user= await User.create({ name , email, password: hashPassword});
    return res.status(200).json({success: true, message: "User registered successfully", user});
    
}


//login

export const login = async (req,res) =>{
    const {email, password} = req.body;

    let user = await User.findOne({email});

    if(!user){  
        return res.status(400).json({success: false, message: "User does not exist"});
    }
const validPass = await bcrypt.compare(password, user.password);
    if(!validPass){
        return res.status(400).json({success: false, message: "Wrong Password Server Error"});

    }
    const token = jwt.sign({userId: user._id},process.env.JWT,{expiresIn: '1d'});   

    res.json({message: `Welcome ${user.name}`,token, success: true});

}