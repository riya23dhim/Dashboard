import React from 'react'
import { Drawer } from '@mui/material';
import { queuee } from '../data/dummy'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import riya from '../data/riya.jpeg';
import {Chat,Carts,Notification,UserProfile} from './Indexcomp';
//context import
import { useStateContext } from '../context/ContextProvider';
import Popover from '@mui/material/Popover';
import { useEffect, useState } from 'react';
// import { Button } from '.';
// import { chatData } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';
//navbtn comp
 const NavButton=({title,customFunc,icon,dotColor,color})=>{
  const {currentcolor}=useStateContext();
  return(
  <TooltipComponent content={title} position='BottomCenter'>
    <button type="button" onClick={customFunc} style={{color:currentcolor}} className=' scale-btn dark:hover:bg-dark-hover font-900 relative text-xl rounded-full p-3 hover:bg-light-gray'>

<span className='absolute top-2 right-2 rounded-full h-2 w-2' style={{backgroundColor:dotColor}}/>
{icon}
    </button>
  </TooltipComponent>)}

//navbar
const Navbar = () => {
  // When user clicks an icon we save event.currentTarget (the DOM node) here so Popover knows where to stick.
  // Material UI Popover needs one extra thing:
// the DOM element it should stick to (anchorEl = event.currentTarget).
// So we introduced local state (cartAnchor) because:
// It still tells us open vs closed (null ↔ Node).
// It also gives Popover the exact icon element for positioning.
// They start as null (popover closed).
// ANCHOR DRAWER FOR PROFILE
const [openCart,setOpencart]=useState(false);
//ANCHOR POPOVER OF NAVBAR
const [profAnchor,  setprofAnchor]  = useState(null);
const [notifyAnchor,setNotifyAnchor]=useState(null);
// derived state will tell us that currently which icon is   open will give use true and false where we need them? in popover we pass a prop open.
  const openProf=Boolean(profAnchor) ;
  const openNotify = Boolean(notifyAnchor)
  //helper event handler to setanchors value to be null and e.currenttarget acc to click or you can directly do (e)=>setcartanchoer((prev)=>(prev?))..
  const toggle=(setter)=>{
    return (e)=> setter((prev)=>(prev?null:e.currentTarget))
  }
  //ANCHOR here we will creat handler which will perform som op in carts like show an array of item ,remove them and dlt only one
  const [approvalQueue,setapprovalQueue]=useState(queuee)
  //a handler for r aprrove
  const approveAll=()=>{
    //can do api call to store in backend for approval
    setapprovalQueue([])
  }
  //clear all
  const clearQueue=()=>{
    setapprovalQueue([])
  }
  //REMOVE ONE
  const removeFromQueue=(id)=>{
const newdata=approvalQueue.filter((curr,index)=>curr.id!=id)
setapprovalQueue(newdata)
  }
  //context values
  const{setActiveMenu,activeMenu,handleClick,screen,setScreen}=useStateContext()
  useEffect(()=>{
    //function for getting scrren size and set it setscreen state 
    const handleScreen=()=>setScreen(window.innerWidth)
   
    //recall it when screen size changes
    window.addEventListener('resize',handleScreen);
    //call it for first time when comp mounts
    handleScreen()
    //clean up function beacuse we are using event listners
    return ()=>window.removeEventListener('resize',handleScreen);
  },[])
  //we are having screen size now acc to that we will remove or add side bar 
  useEffect(()=>{
    if(screen<=900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  },[screen])
  return (
    <>
    <div className='flex justify-between p-2 md:ml-15 md:mr-10' >
      {/* btns make comp  */}
      <NavButton title="Menu" customFunc={()=>setActiveMenu(true)} icon={< AiOutlineMenu/>} color="#017881"></NavButton>
    {/* //a div for roght side  all other icons*/}
    <div className='flex gap-1'>
{/* shoping */}
<NavButton title="Cart" customFunc={()=>setOpencart(!openCart)} color="#017881" icon={<FiShoppingCart />} dotColor='#03C9D7'></NavButton>
<NavButton title="Notification" customFunc={toggle(setNotifyAnchor)} color="#017881" icon={< RiNotification3Line/>} dotColor='#03C9D7'></NavButton>
{/* Profile brn thats going to be diff so we will define uniqely */}
<TooltipComponent content="UserProfile" position='BottomCenter'>
  <div className='  dark:hover:bg-dark-hover flex items-center gap-1 cursor-pointer p-1 hover:bg-light-gray rounded-lg ' onClick={toggle(setprofAnchor)}>
    <img className='rounded-full h-10 w-10' src={riya}></img>
    {/* text */}
    {/* <p>
      <span className=' text-gray-400 text-[15px] '>Hi</span>{" "}
      <span className='text-gray-400 text-[15px] ml-1 text-bold'>Riya</span>
    </p>
    {/* drop down arrow */}
    {/* <MdKeyboardArrowDown className='text-gray-400 text-14'/> */} 
  </div>

</TooltipComponent>
    </div>

    </div>
    <Popover open={openProf}
    // this one will provide anchor point e.target value
    anchorEl={profAnchor}
    onClose={()=>setprofAnchor(null)}
    //Which point on the icon to align with (bottom‑center).
    anchorOrigin={{
      vertical:'bottom',
      horizontal:'center'
    }}
    //	Which point inside the pop‑up should touch that anchor (top‑center).
    transformOrigin={{
vertical:'top',
horizontal:'right'
    }}
    slotProps={{
      paper:{
        sx:{width:240,borderRadius:2}
      }
    }}
    >
      <UserProfile/>
      </Popover>
      {/* for next */}
      <Popover open={openNotify}
    // this one will provide anchor point e.target value
    anchorEl={notifyAnchor}
    onClose={()=>setNotifyAnchor(null)}
    //Which point on the icon to align with (bottom‑center).
    anchorOrigin={{
      vertical:'bottom',
      horizontal:'center'
    }}
    //	Which point inside the pop‑up should touch that anchor (top‑center).
    transformOrigin={{
vertical:'top',
horizontal:'right'
    }}
    slotProps={{
      paper:{
        sx:{width:300,borderRadius:2}
      }
    }}
    >
      <Notification/>
      </Popover>
{/* for next */}

<Drawer anchor="right" open={openCart} onClose={() => setOpencart(false)}>
  <div style={{ width: 320, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{backgroundColor:"black", padding: 14, borderBottom: '1px solid #ddd' }}>
      <h3 className='text-gray-400  text-xl tracking-tight text-bold '> Admin Cart</h3>
    </div>
    <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
      <Carts   approvalQueue={approvalQueue}
    onRemove={removeFromQueue}
    onClear={clearQueue}
    onApproveAll={approveAll}/>
    </div>
  </div>
</Drawer>



    </>
  )
}

export default Navbar