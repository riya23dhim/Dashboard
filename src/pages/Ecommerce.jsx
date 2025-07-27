import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Drawer } from '@mui/material';
import { SiShopware } from 'react-icons/si';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
import DashboardExtraCards from '../components/dashextracards.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
import { Stacked ,Pie ,Button ,SparkLine, Chat } from '../components/Indexcomp';
import { earningData,SparklineAreaData,pieChartData, trendPair2 } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
//btn comp not the main
const NavButton=({title,customFunc,icon,dotColor,color})=>{
  const {currentcolor}=useStateContext();

  return( 
    
  // <TooltipComponent content={title} position='BottomLeft'>
    <button type="button" onClick={customFunc} style={{color:currentcolor,zIndex:100000}} className=' wiggle-once bg-gray-700 h-14 w-14  font-900 text-xl rounded-full p-2'>
{icon}
    </button>
  // </TooltipComponent>)}
  //main comp
  )}
const Ecommerce = () => {
  const [openchat,setopenchat]=useState(false)
  const {currentcolor}=useStateContext()
// if you waana use aos
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, 
      offset:60,
      easing: 'ease-in-out'  // whether animation should happen only once
    });
  }, []);
  return (
    // main div with top margin-14
    <div className=' mt-14'>
      <div className=' flex flex-wrap lg:flex-nowrap justify-center'>
        <div  data-aos="fade-down"className={`m-3 drop-shadow-lg  p-8 pt-9 w-full lg:w-[1100px] h-50 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl  bg-white bg-[url('/image2new.png')] bg-contain bg-right bg-no-repeat`}>
        
        <div>


</div>
       <div className='flex gap-25 items-center ' >
        <div >
          <p className='font-bold text-gray-400'>Earnings</p>
          <p className='text-2xl'>$63,4000.78</p>
        </div>
        

       </div>

   
       <div className='flex gap-45 items-center mt-6 '>
       
        <Button 
        color="white"
        bgColor={currentcolor}
        text="Download"
        borderRadius="10px"
        size="md"
       
        />
        
        

       </div>
      
 
        </div>
        
      
        </div>
        <div  className='m-3 flex flex-wrap  justify-center item center gap-2'>

          {/* dynamic data ko ek or div mein dalenge */}
          {earningData.map((item,ind)=>(<div key={item.title} data-aos={`${(ind<2)?"fade-right":"fade-left"}`} data-aos-delay={(ind+1) * 100}
className=' drop-shadow-md hover:drop-shadow-2xl hover:scale-[1.07] hover:z-[50] hover:mx-2 bg-white backdrop-blur-lg pt-9 p-4 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-56'>
            {/* inside thei div we are going to have a btn icon */}
            <button type="button" style={{color:item.iconColor,backgroundColor:item.iconBg}} className=" text-xl p-4 rounded-full opacity-0.9 hover:drop-shadow-xl">
              {item.icon}
            </button>
            <p className='mt-4 flex gap-2 items-center'>
              <span className='text-gray-700 dark:text-gray-200 font-semibold text-lg'>{item.amount}</span>
              <span className={`text-sm ml-1 text-${item.pcColor}`}>{item.percentage}</span>
            </p>
            <p className='text-gray-400 text-sm mt-1 '>{item.title}</p>
          </div>))}
{}
        </div>
        
       

        {/* charts */}
        <div data-aos="slide-right" data-aos-dealy="50"className='flex hover:drop-shadow-xl flex-wrap gap-10 justify-center'>
          <div className='bg-white drop-shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg p-4 m-3 rounded-xl md:w-800'>
            {/* uper ka div with revenu */}
            <div className='flex justify-between'>
              <p className='text-lg dark:text-gray-200 text-gray-700 font-semibold'>Revenue Updates</p>
              <div className='flex items-center gap-4'>
                <p className='text-gray-400 dark:text-gray-200  hover:drop-shadow-xl flex justify-center items-center gap-2'>
                  <span><GoDotFill/></span>
                  <span>
                    Budget
                  </span>
                </p>

             

              {/* expenses */}
                <p className=' text-green-500  hover:drop-shadow-xl  flex justify-center items-center gap-2'>
                  <span><GoDotFill/> </span>
                  <span>
                    Expenses
                  </span>
                </p>
                </div>
                
        

            </div>
            
            {/* charts sunc */}
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-gray-200 m-4 pr-10'>
                <div>
                  <p>
                    <span className=' dark:text-gray-200 text-2xl font-semibold text-gray-700'>
$9367.79
                    </span>
                    <span className='ml-3 text-xs hover:drop-shadow-xl cursor-pointer p-1.5 bg-green-400 rounded-full text-white '>
                      23%
                    </span>
                   
                  </p>
                  <p className='mt-1 dark:text-gray-200 text-gray-400'>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className=' dark:text-gray-200 text-2xl font-semibold text-gray-700'>
$10768.46
                    </span>
                    
                  
                  </p>
                  <p className='mt-1 dark:text-gray-200 text-gray-400'>Expenses</p>
                </div>
                {/* chartsss */}
                
                <div className='mt-5'>
                  <SparkLine currentColor="#03C9D7"
                  id="sparkine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="#03C9D7"
                  />

                </div>
                <div className='mt-10'>
                  <Button color="white" bgColor={currentcolor} text="Download Ready" borderRadius="10px"/>
                </div>
              </div>
              {/* side main col chart */}
              <div className=''>
                <Stacked width="320px" height="360px"/>
              </div>
              
            </div>
          </div>

        </div>
        {/* chat icon  */}
        <div className='ml-2 thinking fixed  bottom-4 ' style={{zIndex:1000}}>
        <NavButton title="Chat" customFunc={()=>setopenchat(true)} color="#017881" icon={<FontAwesomeIcon icon={faCommentDots} size="lg" style={{color: "#ffffff",fill:"#ffffff"}} />} dotColor='#03C9D7'></NavButton>
        </div>
        {/* for chat drawer */}
  <Drawer anchor="left" open={openchat} onClose={() => setopenchat(false)}>
  <div style={{ width: 350, display:"flex",flexDirection:"column" ,height: '100%' ,borderRadius:"30px" }}>

      <Chat/>
  
    
  </div>

</Drawer>

<DashboardExtraCards/>

    </div>
  )
}

export default Ecommerce