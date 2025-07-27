import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';
import './login.css'
import { apistart } from '../api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    const navigate=useNavigate();
    const [formdata,setformdata]=useState({username:"",password:""})
    const [errors,seterrors]=useState({})
    const [rememberMe, setRememberMe] = useState(false);
    //will run once and will automatically log in you if you haven't logout 
    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token) {
          navigate("/"); // you are already logged in go to home
        }
      },[]);
      

    const handleChange=(e)=>{
        const {name,value}=e.target;
          setformdata((prev)=>({...prev,[name]:value}))
          //live validation 
          const err=validatefields(name,value);
          seterrors((prev)=>({...prev,[name]:err}))
    }
    const validatefields=(name,value)=>{
        if(name==="username"){
            if(!value){
                return "username is required"
            }
            if(value.trim().length<3){return "username must be atleast 3charcters"}
        }
        //password
        if(name==="password"){
            if(!value){return "password is required"}
            if(value.length<6){return "password should be alteast 6 characters"}
            if(! /[A-Z]/.test(value)){return "atleast one uppercase"}
            if(! /[0-9]/.test(value)){return "atleast one lowercase"}
            if(! /[!~@#$%^&*()]/.test(value)){return "atleast one special character"}

        }
       
        return ""

    }
    //VALIDATE FOR HANDLESUBMIT IT WILL GIVE THE WHOLE OBJ OF ERRORS 
    const validate=()=>{
        const newErrors={};
       
        //we are iterating list of keys of formdata
        Object.keys(formdata).forEach((field)=>{
            //FOLLOW DRI AND USE THE SAME VALIDATION FUNCTION
            const currerr=validatefields(field,formdata[field]);
        if(currerr){
            newErrors[field]=currerr
        }}
        
    )
  
    return newErrors

    }
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
       
        
        
        const anyerr=validate();
        if(Object.keys(anyerr).length>0){
            seterrors(anyerr)
            return 
        }

        //if i will send post req backedn will return token that need to be stored in loacl stoarege
        try{
        const res=await apistart.post("/api/login",{username:formdata.username,password:formdata.password});
        if (res.data.token) {
            // If Remember Me is checked → use localStorage
            if (rememberMe) {
              localStorage.setItem('token', res.data.token);
            } else {
              sessionStorage.setItem('token', res.data.token);
            }
          }
       
        toast.success("login success");
        navigate("/")}
      
        
        catch(err){
            if (err.message){
                console.log(err.message)
              }
              if(err.response){
                console.log("server answered",err.response)
              }
              if(err.request){
                console.log("network down timeout")
              }
              toast.error("login failed")
            

        }
        

    }
  return (
    //container
    <div className={` w-[100%] min-h-screen flex justify-center items-center bg-shadow-color bg-[url('/nightlogin.jpg')] bg-no-repeat bg-center bg-cover `}>
    <div className="login-container" >
        {/* title */}
        <div className='title'>
            <span className='text-xl text-gray-500 font-semibold '>Login</span>
        </div>
        {/* inputs */}
        <form onSubmit={handleSubmit}>
        <div className='input-field '>
            <input className='inputf' onChange={handleChange} id="username" type="text" name="username" value={formdata.username} placeholder=' ' required/>
            <label className='inputflabel' htmlFor="username"  >UserName</label>
            <PersonOutlineOutlinedIcon className=' text-white absolute text-xl -top-[-18px] right-[15px]'/>
            {errors.username && <p className='px-4 text-red-400 tracking-wider text-shadow-2xs text-shadow-purple-700 text-xs'>{errors.username}</p>}
        </div>
        <div className='input-field'>
            <input className='inputf' onChange={handleChange} id="password" type="password" name="password" value={formdata.password} placeholder=' 'required/>
            <label  className='inputflabel' htmlFor="username" >Password</label>
            <LockOpenOutlinedIcon className='absolute text-white text-xl -top-[-18px] right-[15px]'/>
            {errors.password && <p className='px-4 text-red-400 tracking-wider text-shadow-2xs text-shadow-purple-700 text-xs'>{errors.password}</p>}
        </div>
        {/* forgot */}
        <div className='rem-for'>
            <div className='rem flex items-center'>
                <input  onChange={(e) => setRememberMe(e.target.checked)} checked={rememberMe} className=" h-4 w-4 checkbox bg-black border-0 rounded-full outline-0"id="remember"type="checkbox" name="remember"/>
                <label className='tracking-tight p-2' htmlFor='remember'>Remember me</label>
            </div>
            <div className='forget '>
                <NavLink className=" hover:bg-blue-50/10 p-2 tracking-tight rounded-full" to="#"> Forgot Password</NavLink>
            </div>
        </div>
        {/* submit */}
        <div className='submit'>
            <input  id ="submit" type="submit" name="Login"/>
           
        </div>
        </form>
        {/* signup */}
        <div className='signup'>
            <span className='tracking-wide'>Don't have an account? </span><NavLink  className=" hover:bg-blue-50/10 p-2 tracking-tight rounded-full" to="/register">Sign Up</NavLink>
        </div>

    </div>
    </div>
  )
}

export default Login