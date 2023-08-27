'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setDarkMode }} >

            {children}

        </ThemeContext.Provider >
    );
}

export default ThemeProvider;
