import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
}); //STEP 1: create the context

export const ThemeProvider = ThemeContext.Provider; //STEP 2: create the provider || Make sure that everybody is aware of the context

export default function useTheme() {
    return useContext(ThemeContext);
} //STEP3: if any component needs to access the context, we need to use this hook, useContext