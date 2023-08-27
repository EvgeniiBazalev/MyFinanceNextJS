'use client';
import { createContext, useState } from 'react';

const Theme = createContext();

const ThemeProvider = (children) => {
    const [isDarkmode, setDarkMode] = useState(false);

    return (
        <ThemeProvider.Provider value={{ isDarkmode }}>

            {children}

        </ThemeProvider.Provider>
    );
}

export default ThemeProvider;
