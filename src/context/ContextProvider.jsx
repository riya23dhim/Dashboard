import React from 'react'
import { useContext,createContext,useState } from 'react'
const StateProvider=createContext();
const initialState={
    chat:false,
    cart:false,
    notifiaction:false,
    userprofile:false
}
const localcolor=localStorage.getItem("color");
const localtheme=localStorage.getItem("theme")
console.log(localcolor)
const ContextProvider = ({children}) => {
  //LETS SAY WE want to hide sidebar for small scrrens and when we navigate them in small scrrens we need to keep track of scrren
  const [screen, setScreen]=useState(undefined)

    const [activeMenu,setActiveMenu]=useState(true);
    //state navbar clicks
    const [isClicked,setIsClicked]=useState(initialState);
    //themes
    const [currentcolor,setcurrentcolor]=useState(localcolor);
    const [currentmode,setcurrentmode]=useState(localtheme);
    const[themesettings,setThemesettings]=useState(false)
    //setcoloe,setmode
    const setmode=(e)=>{
setcurrentmode(e.target.value)
localStorage.setItem("theme",e.target.value);
setThemesettings(false);
    }
    const setColor=(col)=>{
      setcurrentcolor(col)
      localStorage.setItem("color",col);
      document.documentElement.style.setProperty('--grid-search', col);

setThemesettings(false);

    }
    //handlling navbar clicks
    const handleClick=(title)=>{
setIsClicked((prev)=>({...prev,[title]:true}))
    }

  return (
    <StateProvider.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screen,setColor, setScreen,setmode,themesettings,currentcolor,currentmode,setThemesettings}}>
{children}
    </StateProvider.Provider>
    
  )
}
export const useStateContext=()=>useContext(StateProvider);
export default ContextProvider;