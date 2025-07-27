 import express from "express";
 import userregistercontroller from "../controller/userregistercontroller.js"
 import {registrationvalidator} from '../middleware/validator.js'
 const registerrouter=express.Router();

 registerrouter.route("/")
 .post(registrationvalidator,userregistercontroller)
 export default registerrouter;