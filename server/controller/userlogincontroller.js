import Users from "../models/userModel.js"
import User from "../models/userModel.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userlogincontroller=async(req,res)=>{
    
 
    
    // find user by email /username in db
    //filter
    try{
        const {username,password}=req.body;
    const filterusername={username};
    const user=await Users.findOne(filterusername);
    if(!user){
        return res.status(400).json({msg:"username invalid credentials"})
    }
    
    // now check users password using bcrypt.compare (passwordsend,userpassword in db)
    const ismatch=await bcrypt.compare(password,user.password);
    console.log(ismatch)
    if(!ismatch){
        return res.status(400).json({msg:`password is invalid credentials ${ismatch}`})
    }
//in dono se pass ho gay means the user is valid so we will sign jwt token nd return in response
//hum jwt sign karenge header(auto algo),payload(userdata ,expiry time),signature means hashing header and payload with secret key  =jwt.sign({userdata},"secretkey",{expiresIn:1h})
const token=jwt.sign({username},process.env.JWT_SEC_KEY,{ expiresIn: "1h" })

return res.status(201).json({token})}
catch(err){
   

   
    return res.status(500).json({msg:"tryblock"})
}

}
export default userlogincontroller