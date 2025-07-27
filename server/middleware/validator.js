///validator and use it as middle wa
import {body} from "express-validator";
//now create middleware using body and each body will add err correspondint to it in req
export const registrationvalidator=[
    //first
    body("name").trim().notEmpty().withMessage("Name is req").isLength({min:2,max:30}).withMessage("Name aleast 2 charcaters"),
    body("lastname").trim().notEmpty().withMessage("lastname is req").isLength({min:2,max:30}).withMessage("LastName aleast 2 charcaters"),
    body("username").trim().notEmpty().withMessage("username is req").isLength({min:3,max:30}).withMessage("UserName aleast 3 charcaters"),
    body("password").trim().notEmpty().withMessage("password is req").isLength({min:6,max:30}).withMessage(" atleast 6 char")
    .matches(/[A-Z]/).withMessage("Atleast 1 uppercase Char")
    .matches(/[a-z]/).withMessage("Atleast 1 lower char")
    .matches(/[0-9]/).withMessage("Atleast 1 number char")
    .matches(/[@#$%^&*()~]/).withMessage("Atleast one symbol char"),
    body("email").trim().notEmpty().withMessage("Email is req").isEmail().withMessage("Email should be @domain.com")


]
