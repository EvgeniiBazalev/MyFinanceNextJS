'use client';

import ThemeProvider from "./ThemeProvider";

// import { AuthProvider } from 'AuthProvider';

const ContextProviders = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

export default ContextProviders;