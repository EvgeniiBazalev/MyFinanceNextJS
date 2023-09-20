'use client';
import ThemeProvider from "./ThemeProvider";
import ExchangeProvider from "./ExchangeProvider";
// import { AuthProvider } from 'AuthProvider';

const ContextProviders = ({ children }) => {
    return (
        // <ExchangeProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        // </ExchangeProvider>
    );
}

export default ContextProviders;