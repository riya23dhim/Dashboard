import { api } from "../api";
import { toast } from "react-toastify";
export const orderdatacall=async()=>{
    try{
      const data=await api.get("/api/orders");
      console.log("datafetched")
    
     return data
     
      


    }
    catch(err){
      const status = err.response?.status;
      const msg = err.response?.data?.message;
  
  
      if (status === 401 && msg === "JWT token expired") {
        // Redirect to login — works only in loader alsp on axios but they can't prevent loader error
        localStorage.removeItem("token")
        sessionStorage.removeItem("token")
        toast.error("token expired login again")
        return redirect("/login");
      }
        
      if (err.message){
        console.log(err.message)
      }
      if(err.response){
        console.log("server answered",err.response)
      }
      if(err.request){
        console.log("network down timeout")
      }

    }
  }