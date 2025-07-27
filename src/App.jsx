import React, { use } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Applayout } from './Applayout'
import './App.css';
import {Ecommerce,Orders,Kanban,Employee,Editor,Calender,ColorPicker,ColorMapping,Pies,Pyramid,Bar,Line,Stacked,Customers,Financial,Area} from './pages/Indexpages';
import { useStateContext } from './context/ContextProvider';
import Login from './pages/Login';
import Register from'./pages/Register';
import { orderdatacall } from './loaders/orderloader';
import { customerloader } from './loaders/customerloader';
import employeeloader from './loaders/employeeloader';
import Protectedroute from './pages/protectedroutes';
import Error from './components/Error';
import Servererror from './components/Servererror';

const App = () => {
  const {currentmode}=useStateContext()
  const router=createBrowserRouter([
    //ANCHOR have to change first for auth rouying
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/error',
      element:<Servererror/>
    },

    {
    path:"/",
    errorElement:<Error/>,
    element:(<Protectedroute>
      <Applayout/>
    </Protectedroute>),
    children:[{
      //dashboard
      path:'/',
      element:<Ecommerce/>
    },
    {
      //dashboard
      path:'/ecommerce',
      element:<Ecommerce/>
    },
    //pages
    {
      path:'/orders',
      element:<Orders/>,
      loader:orderdatacall
    }
    ,
    {
      path:'/customers',
      element:<Customers/>,
      loader:customerloader
    }
    ,
    
    {
      path:'/employees',
      element:<Employee/>,
      loader:employeeloader
    }
    ,
    //apps
    {
      path:'/kanban',
      element:<Kanban/>
    }
    ,
    {
      path:'/editor',
      element:<Editor/>
    }
    ,
    {
      path:'/calender',
      element:<Calender/>
    },
    {
      path:'/color-picker',
      element:<ColorPicker/>
    }
  //charts
  ,
    {
      path:'/line',
      element:<Line/>
    },
    {
      path:'/pies',
      element:<Pies/>
    },
    {
      path:'/bar',
      element:<Bar/>
    },
    {
      path:'/area',
      element:<Area/>
    },
    {
      path:'/financial',
      element:<Financial/>
    }
    ,
    {
      path:'/color-mapping',
      element:<ColorMapping/>
    },
    {
      path:'/pyramid',
      element:<Pyramid/>
    },
    {
      path:'/stacked',
      element:<Stacked/>
    }
  ]
  }])
  return (
    <div className={currentmode==="dark"?'dark':"light"}>
       
    <RouterProvider router={router}/>
    <ToastContainer/>
    </div>
  )
}

export default App

