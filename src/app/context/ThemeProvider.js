'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const isDarkmode = 222;
    return (
        <ThemeContext.Provider value={{ isDarkmode }} >

            {children}

        </ThemeContext.Provider >
    );
}

export default ThemeProvider;
