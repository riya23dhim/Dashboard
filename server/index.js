import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import customerRoutes from "./routes/customerRoutes.js"
import employeeRoutes from './routes/employeeRoutes.js'
//http req logger i
import ordersRoutes from "./routes/ordersRoutes.js";
import authloginRoutes from './routes/authloginRoutes.js'
import morgan from "morgan";
import connectDB from "../server/config/db.js";
import authregisterRoutes from "./routes/authregisterRoutes.js"
import { authmiddleware } from "./middleware/authmiddleware.js";
import {registrationvalidator} from './middleware/validator.js'
dotenv.config();
connectDB();
//app set 
const app=express();
app.use(cors({
    origin: "*",
    credentials: true
  }));
app.use(express.json());
app.use(morgan("dev"));
//routes main 
//for all orders go to mini app
app.use("/api/orders",authmiddleware,ordersRoutes);
//customer route ko mount karoo
app.use("/api/customer",authmiddleware,customerRoutes)
//employee
app.use("/api/employee",authmiddleware,employeeRoutes)
//login
app.use("/api/login",authloginRoutes)
//register
app.use("/api/register",authregisterRoutes)
//fallback
app.use((_req,res)=>{
    res.status(400).json({message:"not valid"})
    res.end()
})
const PORT=3000

app.listen(PORT,()=>{console.log("server running ")})