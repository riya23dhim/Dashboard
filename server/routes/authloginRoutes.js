
import userlogincontroller from "../controller/userlogincontroller.js";
import express from "express";
const loginrouter=express.Router();

loginrouter.route("/")
.post(userlogincontroller);

export default loginrouter;