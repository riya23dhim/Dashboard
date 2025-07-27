import Customers from "../models/customerModel.js"
export const customercontrol=async(_req,res)=>{
    try{
        const data=await Customers.find();
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:"error"})
    }


}