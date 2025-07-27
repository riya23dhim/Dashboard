import Employees from '../models/employeeModel.js'
const employecontroller=async(req,res)=>{
    try{
        const data=await Employees.find();
        res.status(200).json(data)

    }
    catch(err){
        console.log(err)
        res.status(400).json({message:"error"})

    }
}
export default employecontroller;