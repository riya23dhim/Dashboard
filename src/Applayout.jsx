import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { Outlet } from 'react-router';
import { Navbar,SideBar,Footer,ThemeSettings } from './components/Indexcomp';
import { useNavigation } from 'react-router-dom';
import SkeletonLoader from './components/Skeleton';

//context import
import { useStateContext } from './context/ContextProvider';
export const Applayout=()=>{
    const{setActiveMenu,activeMenu,handleClick,themesettings,setThemesettings,currentcolor}=useStateContext()
    const navigation = useNavigation();
    return(
        <div className="flex relative dark:bg-main-dark-bg ">
            {/* setting icon */}
            <div className='fixed right-4 bottom-4 ' style={{zIndex:1000}}>
                <TooltipComponent content="Settings" position="Top">
                    <button  onClick={()=>setThemesettings(true)}type="button" className="text-3xl spin-once p-3 hover:drop-shaodow-xl hover:bg-light-gray text-white" style={{background:currentcolor,borderRadius:'50%'}}>
                        <FiSettings/>
                    </button>
                </TooltipComponent>
            </div>
            {/* Sidebar */}
            {activeMenu?
            (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white drop-shadow-sm'> <SideBar/></div>):
            (<div className='w-0 dark:bg-secondary-dark-bg bg-white'><SideBar/></div>)
                }
                {/* navbar */}
                <div className={`min-h-screen overflow-hidden w-full   bg-main-bg dark:bg-main-dark-bg ${activeMenu?'md:ml-72':'flex-2'}`} >
                    <div className={` backdrop-blur-md dark:shadow-sm dark:shadow-gray-500/10 dark:bg-secondary-dark-bg/12 dark:backdrop-blur-2xl h-18 bg-gray-400/10 fixed top-0 rounded-b-xl  ${activeMenu?'md:left-76':'left-4'} right-4 dark:bg-main-dark-bg z-60`}>
                        <Navbar/>
                    </div>
{/* told you inside the first div outsode nav was baout thw whole page */}
{themesettings && <ThemeSettings/>}
                    <div className="mt-25">
                     {/* if navigation state showing loading show sjeleton */}
                    {navigation.state === 'loading' ? (
        <SkeletonLoader/>
      ) : (
        <Outlet />
      )}
                </div>  
                </div>
               
               
              
        </div>
    )
}
