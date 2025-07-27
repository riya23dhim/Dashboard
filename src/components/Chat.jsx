import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import SendRoundedIcon from '@mui/icons-material/SendRounded'; 

import { SiShopware } from 'react-icons/si';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
const Chat = () => {
  return (
    <div className=' h-full  flex    flex-col justify-between'>
      {/* uper section */}
      <div className=' flex flex-col'>
      <div className= 'flex   justify-between items-center p-4 bg-black'>
      <div className='flex  gap-2 items-center '>
      <span className='text-xl text-gray-100'><SiShopware/></span>
      <h3 className=' text-15 text-gray-200'>Ai assistant</h3></div>
      <div className='flex items-center justify-center'>
        <TooltipComponent position='BottomCenter' content={"Restart chat"}>
          <button className=' text-gray-400 p-2 rounded-full hover:bg-dark-hover'>
          <RefreshSharpIcon  />
          </button>
        </TooltipComponent>
      </div>
    </div>
    <div className=' p-3 text-sm text-center text-gray-300'><p>Chat with our AI assistant for fast help with your questions and issues.</p></div>
<div> 
</div>
</div>

{/* lower sec */}

  <div className='flex h-[20%] flex-col gap-5'>
    <div className='ml-2 p-5 pt-3.5 h-13 w-65 rounded-full  text-19 tracking-tight bg-gray-100 text-gray-600'><p>Hey what do you want to ask?</p></div>
    <div className='h-12 flex justify-between items-center m-2 w-85 border-1 text-gray-500 p-3 border-gray-200 rounded-full'>
      <input type="text"  className=" outline-0 text-gray-500 text-sm tracking-tight "placeholder='Ask a question...'/>
     
      <p className=' text-lg text-gray-300 hover:text-gray-400 -rotate-33 pb-1'> <SendRoundedIcon/></p>
    
    
    </div>
    <div className='text-gray-400 text-center text-xs pb-2  '>  <p>powered by llm</p></div>
    
  </div>

    </div>
  )
}

export default Chat
