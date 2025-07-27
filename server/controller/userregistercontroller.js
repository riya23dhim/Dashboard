import Users from "../models/userModel.js"
import User from "../models/userModel.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator";
const userregistercontroller=async(req,res)=>{
    
    try{
        //this will extract errors 
        const errors=validationResult(req);
        
        if(!errors.isEmpty()){
            
            return res.status(400).json({
                success:false,
                err:errors.array().map((er)=>({
                    field:er.path,
                    message:er.msg

                }))
            })
        }
        const {name,lastname,email,password,username}=req.body
        //check if any one is missing
        if(!name || !lastname || !email || !password || !username){
            return res.status(400).json({message: "pls fill all req fields"})
        }
        //check if the user already there
        const existinguser=await Users.findOne({
            $or:[{username},{email}]
        })
        if(existinguser){
            return res.status(400).json("user already existed")
        }
        //hash password
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(password,salt);
        //save user
        const newUser=await Users.create({name,username,password:hashedpassword,email,lastname})
        //sign jwt token
        const token=jwt.sign({ id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            email: newUser.email},process.env.JWT_SEC_KEY,{expiresIn:"1h"})

        return res.status(201).json({message:"useraddessuccess"
        ,
        user:{
            id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            
        },
        token})

      

    }
    catch(err){
        //jwt will throw "TokenExpiredError"
        if(err.name==="TokenExpiredError"){
            return res.status(401).json({message:"JWT token expired"})
        }
        //yahan pe hi mein create kar ri thi to yahan par hi mongo validation errr capture karte hai
         //mongo ka pakdte hai error for validation
    if(err.name==="ValidationError"){
        //it will give err.errors wich is obje with keys as field (name,lastname) and the values are error obj with e.path and messages
        const arrayerr=Object.values(err.errors).map((e)=>({
            field:e.path,
            message:e.message
        }))
        return res.status(400).json({
            success:false,
            err:arrayerr
        })

    }
    //mongodb err for duplicates
    if(err.code===11000){
        //err.keyvalues have an error obkect  showing who commited crime we can loop all values but showing one can be enough at  atime
        Object.keys(err.keyValue)[0];
        return res.status(400).json({
            success:false,
            err:{field,message:`${field} already exists`}
        })
    }
        console.error("Registration error:", err.message);
        return res.status(500).json({ error: "Server error" });

    }
   
}
export default userregistercontroller