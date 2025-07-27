import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from "yup";
import './login.css'
import { apistart } from '../api';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    //we are going to do validation nusing yup
    //1 create schema that will yup.objectreceive an obj and check fields are of req format or not
    //ANCHOR can extract in naother file
     const schemayup=yup.object().shape({
        name:yup.string().min(2,"atleast 2 charcaters").required("Fill your firstname"),
        lastname:yup.string().min(2,"atleast 2 charcaters").required("Fill your lastname"),
        username:yup.string().min(3,"atleast 3 charcaters").max(30).required("fill username "),
        email:yup.string().email("Email is invalid should be @domain.com").required("Email is required"),
        password:yup.string().min(6,"Must be atleast 6 characters")
        .matches(/[A-Z]/,"At least one upercase character")
        .matches(/[0-9]/,"At least one upercase chacracter")
        .matches(/[a-z]/,"Atleast one lowercase character")
        .matches(/[@#$%^&*~()]/,"At least one Symbol")
        .required("Password is required fill it")

     })
    
    const [formdata,setformdata]=useState({ name:"",lastname:"",email:"",username:"",password:""})
    //errors 
    const [errors,seterrors]=useState({});
    const [rememberMe, setRememberMe] = useState(false);
    const [ servererrors,setservererr]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setformdata((prev)=>({...prev,[name]:value}))
        //instead of doing live check we will set error to " " each time so that we  can  erase prev errors on change and errors will only we seen now on next submit
        seterrors((prev)=>({...prev,[name]:""}))



    }
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();

        
        try{
            //abortearly measn do not get out after first err and if the data is not valid it will diectly go to catch block

           await schemayup.validate(formdata,{abortEarly:false})
          
                //an object  to store error
            const res=await apistart.post("/api/register",{name:formdata.name,lastname:formdata.lastname,email:formdata.email,username:formdata.username,password:formdata.password})
            
            if (res.data.token) {
                // If Remember Me is checked → use localStorage
                if (rememberMe) {
                  localStorage.setItem('token', res.data.token);
                } else {
                  sessionStorage.setItem('token', res.data.token);
                }
              }
            const token=res.data.token;
          
            toast.success("login success")
            if(token){
                navigate("/")
            }

            
        }
        catch(err){
           //this one will catch any type of validatio err from backend as aall have same structure for validation err express validator ya mongo
            if(err.response){
                if(err.response.data.success===false){
                const servererr={};
                console.log(err,"hjo")
                //can't do directly like next one as the very first time on spreading filed it would be undefined
                err.response.data.err.forEach((ele) => {
                    if (!servererr[ele.field]) {
                      servererr[ele.field] = [];
                    }
                    servererr[ele.field].push(ele.message);
                  });
                setservererr(servererr)
                }
            }
            //this on ewill catch frontend yup validation err
            if(err.inner){
                console.log(err.inner)
              const errobj={}
                err.inner.forEach(el => {
                    errobj[el.path]=el.message
                    
                });
                seterrors(errobj)}
            

            //if everything worked but some internal errors in server remember the first one is also repobse and backedn
            //will always send one response so on err.response ok so either uper wal exec hoga ya ye 
            //why diff as that err.response i was using for validation or yah pe just user already existed or internal errors
              if(err.response){
                console.log("server answered",err.response)
                
                if (typeof err.response.data==='string'){
                   
                toast.error(`${err.response.data}`)}
                else{
                    toast.error("Something went wrong on the server");
                }
                //if server is not working
              }
             else if(err.request){
                console.log("network down timeout")
                toast.error("network down timeout")
              }
              //anything else
              else{
                if(err.message){
                    console.log(err.message)
                }
              toast.error("login failed ")}

        }

    }

  return (
    //container
    <div className={` w-[100%] min-h-screen flex justify-center items-center bg-shadow-color bg-[url('/nightlogin.jpg')] bg-no-repeat bg-center bg-cover `}>
        <div></div>
    <div className="login-container" >
        {/* title */}
        <div className='title'>
            <span className='text-xl text-gray-500 font-semibold '>Register</span>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='flex gap-3'>
          
        <div className='input-field '>
            <input className='inputf' id="name" type="text" name="name" placeholder=' 'value={formdata.name} onChange={handleChange} required/>
            <label className='inputflabel' htmlFor="name"  >Name</label>
            { (servererrors.name || errors.name) && <p  className='px-4 text-red-400 tracking-wider text-shadow-2xs text-shadow-purple-700 text-xs'>{servererrors.name || errors.name}</p>}
            
        </div>
        <div className='input-field'>
            <input className='inputf' id="lastname" type="text" name="lastname" value={formdata.lastname} onChange={handleChange} placeholder=' 'required/>
            <label  className='inputflabel' htmlFor="lastname" >LastName</label>
            { (servererrors.lastname || errors.lastname) && <p  className='px-4 text-red-400 tracking-wider text-shadow-2xs text-shadow-purple-700 text-xs'>{servererrors.lastname || errors.lastname }</p>}
           
        </div>
        
        </div>
        
        {/* inputs */}
        <div className='input-field'>
            <input className='inputf' id="email" type="email" name="email" value={formdata.email} onChange={handleChange} placeholder=' 'required/>
            <label  className='inputflabel' htmlFor="username" >Email</label>
            {  (servererrors.email|| errors.email )&& <p  className='px-4 text-red-400 tracking-wider text-shadow-2xs text-shadow-purple-700 text-xs'>{servererrors.email|| errors.email}</p>}
           
        </div>
        <div className='input-field '>
            <input className='inputf' id="username" type="text" name="username" placeholder=' ' value={formdata.username} onChange={handleChange} required/>
            <label className='inputflabel' htmlFor="username"  >UserName</label>
            <PersonOutlineOutlinedIcon className=' text-white absolute text-xl -top-[-18px] right-[15px]'/>
            { (servererrors.username|| errors.username) && <p  className='px-4 text-red-400 tracking-wider text-shadow-2xs text-shadow-purple-700 text-xs'>{servererrors.username|| errors.username}</p>}
        </div>
        <div className='input-field'>
            <input className='inputf' id="password" type="password" name="password" value={formdata.password} onChange={handleChange}  placeholder=' 'required/>
            <label  className='inputflabel' htmlFor="username" >Password</label>
            <LockOpenOutlinedIcon className='absolute text-white text-xl -top-[-18px] right-[15px]'/>
            { (servererrors.password||errors.password) && <p  className='px-4 text-red-400 tracking-wider text-shadow-2xs text-shadow-purple-700 text-xs'>{servererrors.password||errors.password}</p>}
        </div>
        {/* forgot */}
        <div className='rem-for'>
            <div className='rem flex items-center'>
                <input  onChange={(e) => setRememberMe(e.target.checked)} checked={rememberMe} className=" h-4 w-4 checkbox bg-black border-0 rounded-full outline-0"id="remember"type="checkbox" name="remember"/>
                <label className='tracking-tight p-2' htmlFor='remember'>Remember me</label>
            </div>
            
        </div>
        {/* submit */}
        <div className='submit'>
            <input id ="submit" type="submit" name="Register"/>
            
        </div>
        </form>
        {/* signup */}
        <div className='signup'>
            <span className='tracking-wide'>Already have an account </span><NavLink  className=" hover:bg-blue-50/10 p-2 tracking-tight rounded-full" to="/login">Login</NavLink>
        </div>

    </div>
    </div>
  )
}

export default Register