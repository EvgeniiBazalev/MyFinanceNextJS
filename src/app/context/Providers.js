'use client';
import ThemeProvider from "./ThemeProvider";
// import { AuthProvider } from 'AuthProvider';

const Providers = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

export default Providers;