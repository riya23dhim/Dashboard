import { Navigate } from "react-router-dom";
export default function Protectedroute({children}){
    //we are creating a wrapper compwhich will wrap our app 
    //first it will acces token so if we have token in local stoareg means this user can access this
    const token=localStorage.getItem("token") || sessionStorage.getItem("token")
    //navigate comp will directly redirect us to login
    return token?children:<Navigate to="/login"/>
}