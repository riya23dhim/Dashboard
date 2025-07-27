import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const api=axios.create({
    baseURL:  (window.location.hostname === "localhost" && "http://localhost:3000") || "https://dashboard-backend-eqc8.onrender.com",
    headers:{"Content-Type":"application/json",
    }

})
//so that on each time on login new token will be given or can say current 
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export const apistart=axios.create({
    baseURL: (window.location.hostname === "localhost" && "http://localhost:3000") || "https://dashboard-backend-eqc8.onrender.com",
    headers:{"Content-Type":"application/json"}

})

//global err handelling
api.interceptors.response.use(
    res => res,
    err => {
      const status = err.response?.status;
      const msg = err.response?.data?.message;
  //diff from not found page this one have a route an ddefined on app.jsx unlike 404 its and err elemnt 
      if (status === 500) 
      {
        window.location.href = "/error";
        return;
      }
  //already thrown on regitercontroler usingnjwt in built tokenexpired error with status 401
      if (status === 401 && msg === "JWT token expired") {
       
        localStorage.removeItem("token")
          sessionStorage.removeItem("token")
          //ANCHOR very abrupt can' be that smoth even with settimep\out so will use refresh token next time
            window.location.href = "/login";
         
       
       
        return;
      }
  //pass the err to its catch whoever send the error
      return Promise.reject(err); 
    }
  );
  apistart.interceptors.response.use(
    res => res,
    err => {
      const status = err.response?.status;
      const msg = err.response?.data?.message;
  //diff from not found page this one have a route an ddefined on app.jsx unlike 404 its and err elemnt 
      if (status === 500) 
      {
        window.location.href = "/error";
        return;
      }
  //already thrown on regitercontroler usingnjwt in built tokenexpired error with status 401
     
  //pass the err to its catch whoever send the error
      return Promise.reject(err); 
    }
  );