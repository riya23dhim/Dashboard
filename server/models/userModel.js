import mongoose from "mongoose";
//have to add more validation further in moongose in backedn and frontend
const userschema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        minlength: [2, "First name must be at least 2 characters"],
      },
      lastname: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
        minlength: [2, "Last name must be at least 2 characters"],
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: [6, "Password must be at least 6 characters"],
        match: [/(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])/, "Password must contain uppercase, lowercase, and a symbol"],
      },
      username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: [true, "Username already exists"],
        minlength: [3, "Username must be at least 3 characters"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: [true, "Email already exists"],
        match: [
          /^\S+@\S+\.\S+$/,
          "Please provide a valid email address",
        ],
      },


})//but now this can throw validation erro as it is used in controller we have to catch it there

export default mongoose.model("Users",userschema)