import express from "express";
import {customercontrol} from '../controller/customercontroller.js'
const customeroutes=express.Router();
customeroutes.route("/")
.get(customercontrol)
export default customeroutes;