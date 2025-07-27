// EmployeeID: 1,
// Name: 'Nancy Davolio',
// Title: 'Sales Representative',
// HireDate: '01/02/2021',
// Country: 'USA',
// ReportsTo: 'Carson',
// EmployeeImage:
// avatar3,
import mongoose from "mongoose";
import { type } from "os";
const employeeschema=new mongoose.Schema({
    EmployeeID:{
        type:Number,
        required:true
    } ,
    Name:{
        type:String,
        trim:true

    },
    Title:
    {
        type:String,
        trim:true

    },
    HireDate:String,
    Country:String,
    ReportsTo: String,
    EmployeeImage: String



}
,
{
    timestamps:true ,
    versionKey: false, 


})
export default mongoose.model("Employees",employeeschema)