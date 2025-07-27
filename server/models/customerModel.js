import mongoose from "mongoose";
import { type } from "os";
// CustomerID: 1001,
//       CustomerName: 'Nirav Joshi',
//       CustomerEmail: 'nirav@gmail.com',
//       CustomerImage:
//         avatar2,
//       ProjectName: 'Hosting Press HTML',
//       Status: 'Active',
//       StatusBg: '#8BE78B',
//       Weeks: '40',
//       Budget: '$2.4k',
//       Location: 'India',
const customerschema=new mongoose.Schema({
    CustomerID:{
        type:Number,
        required:true
    },
    CustomerEmail:{
        type:String,
        required:true,
        trim:true


    },
    CustomerImage:String,

    ProjectName:{
        type:String,
        trim:true
    },
    Status:{
        type:String,
        enum: ["Pending", "Completed", "Active", "Cancel", "rejected"],
        default:"pending",
    },
    StatusBg:{
        type:String,
        trim:true
    },
    Weeks:{
        type:String
    },
    Budget:String,
    Location:String

    
    
}
//dusra obj,
, {
    timestamps: true,     // creates createdAt & updatedAt automatically
    versionKey: false,
}

)
export default mongoose.model("Customers",customerschema)