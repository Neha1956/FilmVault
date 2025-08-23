import { createContext, useState } from "react";
export const ThemeContext=createContext(null);
export const ThemeProvider=({children})=>{
    const [theme,settheme]=useState(false);
    function handlechange(){
        //settheme((prev)=>prev==='light'?'dark':'light');
        settheme((prev)=>!prev)
    }
  return(
    <ThemeContext.Provider value={{theme,handlechange}}>
        {children}
    </ThemeContext.Provider>
  )
}