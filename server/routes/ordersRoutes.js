import express from 'express';
//MINI ROUTER
import { getOrders } from '../controller/ordercontroller.js';
const orderrouter=express.Router()
//mini router for all base paths

orderrouter.route("/")
.get(getOrders)
export default orderrouter
