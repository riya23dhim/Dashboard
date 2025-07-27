import Order from "../models/ordersModels.js"
//can use aync-handler
export const getOrders=async(_req,res)=>{
    try{
       const orderslist=await Order.find();
       res.status(200).json(orderslist)
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:"error"})
    }

}