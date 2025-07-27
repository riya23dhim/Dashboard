import React from 'react'
import { themeColors } from '../data/dummy'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs'
import { useStateContext } from '../context/ContextProvider'
const ThemeSettings = () => {
  const {setmode,setColor,currentcolor,currentmode,setThemesettings}=useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed top-0 right-0 nav-item'>
      <div className='h-screen dark:bg-secondary-dark-bg float-right bg-white w-400 dark:text-gray-200 dark:[#484B52'>
{/*  */}
<div className='flex justify-between items-center p-4 ml-4'>
  <p className='font-semibold text-lg text-slate-700 dark:text-gray-200dark:bg-secondary-dark-bg tracking-tight dark:text-gray-100 '>Theme Settings</p>
  <button type="button" onClick={()=>setThemesettings(false)} style={{color:'rgb(153,171,180)'}} className='rounded-full text-2xl p-3  hover:drop-shadow-xl hover:bg-gray-50/45'>
<MdOutlineCancel className=''/>

  </button>
</div>
{/* lower div with flex col */}
<div className='flex-col border-t-1 border-gray-200 p-4 ml-4 mr-4'>
  <p className='font-semibold text-lg text-slate-700 dark:text-gray-100 dark:bg-secondary-dark-bg tracking-tight '>Theme Options</p>
  {/* input */}
  <div className='mt-4'>
    <input type="radio" 
    id="light"
    name="theme"
    value="light"
    onChange={setmode}
    className='cursor-pointer'
    checked={currentmode==='light'}/>
    <label className='ml-2  text-gray-400 tracking-tighttext-md cursor-pointer' htmlFor="light">Light</label>
  </div>
  <div className='mt-4'>
    <input type="radio" 
    id="dark"
    name="theme"
    value="dark"
    onChange={setmode}
    className='cursor-pointer'
    checked={
      currentmode==="dark"}/>
    <label className='ml-2  text-gray-400  tracking-tight text-md cursor-pointer' htmlFor="dark">Dark</label>
  </div>
</div>
<div className='flex-col border-t-1 border-gray-200 p-4 ml-4 mr-4'>
  <p className=' font-semibold text-lg text-slate-700 dark:text-gray-100 dark:bg-secondary-dark-bg tracking-tight'>Theme Colors</p>
  <div className='mt-4 flex gap-3'>{
    themeColors.map((item,index)=><div key={index}>
      <TooltipComponent content={item.name} position="TopCenter">
       
          <button  onClick={()=>setColor(item.color)} type="button" className='rounded-full  h-10 w-10 flex items-center  justify-center' style={{backgroundColor:item.color}}>
            <BsCheck className={`ml-0.5 text-white  text-xl ${currentcolor===item.color?'block':'hidden'}` }/>
          </button>
        
      </TooltipComponent>
    </div>)
    }</div>
</div>

      </div>
    </div>

  )
}

export default ThemeSettings