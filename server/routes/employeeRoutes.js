import express from "express";
import employecontroller from '../controller/employeecontroller.js';
const employerouter=express.Router();
employerouter.route("/")
.get(employecontroller);
export default employerouter;