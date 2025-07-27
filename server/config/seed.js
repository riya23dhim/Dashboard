import Order from '../models/ordersModels.js';
import Customers from '../models/customerModel.js'
import { ordersData } from '../../src/data/ordersData.js';
import mongoose from "mongoose";
import { config } from 'dotenv';
import { customersData } from '../../src/data/customerdata.js';
import { employeesData } from '../../src/data/employeedata.js';
import Employees from '../models/employeeModel.js';
import Users from "../models/userModel.js"
//asyn fn banan hai jo atlas url se connect karega kita to thik nahi to error denge and process.exit(1) kar denge taaki os exit ho jaye
 const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo coonected to ${conn.connection.host}`)


    }
    catch(error){
        console.log(error);
        process.exit(1);

    }
}
const userdata={username:"riya34",name:"riya",lastname:"dhiman",password:"1234",email:"riya@gmail.com"}
config();
await connectDB();
//delete all
await Promise.all([Order.deleteMany(),Customers.deleteMany(),Employees.deleteMany(),Users.deleteMany()])

await Promise.all([Order.insertMany(ordersData),Customers.insertMany(customersData),Employees.insertMany(employeesData),Users.insertMany(userdata)])



console.log("done")
process.exit(0)
