import React,{useState,createContext} from 'react';
export const themeContext = createContext()

export default function ThemeContext({children}) {
    const [theme,setTheme] = useState(localStorage.getItem("theme")==="dark")

    const changeTheme=()=>{
      localStorage.setItem("theme",!theme?"dark":"ligth")
      setTheme(!theme)
    }
  return <themeContext.Provider value={{theme,changeTheme}}>
      {children}
  </themeContext.Provider>;
}
