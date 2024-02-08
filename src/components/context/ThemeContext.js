import React, {createContext, useState, useEffect} from "react";
import useLocalStorage from 'use-local-storage';

const ThemeContext = createContext();

//creating custom ThemeContextProvider
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const [switchBtn, setSwitchBtn] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setSwitchBtn(!switchBtn)
        console.log("btn switched")
    }

    useEffect(() => {
        if(theme === "dark") {
        setSwitchBtn(true)
        }
        //whenever we are in dark mode, set state back to true when the page rerender's(when we refresh page, reload page).
    },[theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, switchBtn}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;

