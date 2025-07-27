import mongoose from "mongoose";
//asyn fn banan hai jo atlas url se connect karega kita to thik nahi to error denge and process.exit(1) kar denge taaki os exit ho jaye
 const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo coonected to ${conn.connection.host}`)


    }
    catch(error){
        console.log(error);
        process.exit(1);

    }
}
export default connectDB