
import jwt from 'jsonwebtoken'
export const authmiddleware=(req,res,next)=>{
    const authheader=req.headers.authorization;
    if(!authheader || !authheader.startsWith("Bearer")){
        return res.status(401).json({message:"token not provided"})
    }
    //now extract token
    const token=authheader.split(" ")[1] 
   
    try{
        //decode the token and  using secret key
        const decoded=jwt.verify(token,process.env.JWT_SEC_KEY);
        req.user=decoded;
        next();

    }
    catch(err){
         //jwt will throw "TokenExpiredError"
         if(err.name==="TokenExpiredError"){
            return res.status(401).json({message:"JWT token expired"})
        }

return res.status(401).json({ message: 'Unauthorized: Invalid token' })
    }

}