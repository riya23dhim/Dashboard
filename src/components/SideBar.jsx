import React from 'react'
import { useEffect } from 'react';
import {Link,NavLink} from 'react-router-dom';
import {SiShopware} from "react-icons/si";
import {MdOutlineCancel} from 'react-icons/md';
import { RiCloseLine } from "react-icons/ri";
import {links} from '../data/dummy.jsx';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import AOS from 'aos';
import 'aos/dist/aos.css';
//context import
import { useStateContext } from '../context/ContextProvider';
const SideBar = () => {
  // if you waana use aos
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, 
      offset:60,
      easing: 'ease-in-out'  // whether animation should happen only once
    });
  }, []);
  const{setActiveMenu,activeMenu,handleClick,screen,setScreen,currentcolor}=useStateContext()
  const activelink='flex items-center gap-5 pt-4 pl-3 pb-2.5 rounded-lg text-md  m-2 text-white hover:drop-shadow-xl ';
  const inactivelink="flex items-center dark:hover:bg-dark-hover gap-5 pt-4 pl-3 pb-2.5 rounded-lg text-md text-gray-700 dark:bg-secondary-dark-bg dark:text-gray-200 hover:bg-light-gray  m-2  ";
const handleSidebarclose=()=>{
  if (activeMenu && screen<=900 ){
    setActiveMenu(false)
  }}

  return (
    <div className='h-screen ml-3 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
{activeMenu && <><div className=' flex justify-between items-center'>
  <Link data-aos="zoom-in-right" to="/" onClick={ handleSidebarclose} className='flex font-mono items-center gap-2 ml-3 mt-6 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white '>
  <SiShopware/>
  <span >Lumio</span></Link>
  <TooltipComponent content="Menu" position='BottomCenter'>
    <button type="text" onClick={()=>setActiveMenu(!activeMenu)} className='mt-6 p-2.5 text-xl  dark:hover:bg-dark-hover hover:bg-light-gray rounded-full dark:text-white font-extrabold text-slate-700 '>
      < RiCloseLine/>
    </button>
  </TooltipComponent>
</div>
{/* pages */}
<div className=" mt-11">
  {links.map((item)=>(<div  key={item.title}>
    <p className=" m-4 mt-4 text-gray-400 uppercase">{item.title}</p>
    {/* navlink beacuse these are links going us to navigate through pages */}
    {item.links.map((link)=>(<NavLink to={`/${link.name}`} onClick={ handleSidebarclose} key={link.name} style={({isActive})=>isActive?{backgroundColor:currentcolor}:{backgroundColor:""}} className={ ({isActive})=>isActive?activelink :inactivelink}>
{link.icon}<span className=' capitalize'>{link.name}</span>
    </NavLink>))}
  </div>))}
</div>
</>}
    </div>
  )
}

export default SideBar