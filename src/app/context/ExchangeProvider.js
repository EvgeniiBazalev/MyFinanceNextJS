'use client';
import { createContext, useState } from 'react';

export const ExchangeContext = createContext();

const ExchangeProvider = ({ children }) => {

    const [currentExchange, setCurrentExchange] = useState({
        EUR: 0,
        USD: 0,
        BTC: 0,
        LTC: 0,
        ETH: 0,
    });
    // const updateExchangeData = (newData) => {
    //     setCurrentExchange(newData);
    // };

    return (
        <ExchangeContext.Provider value={{ currentExchange, setCurrentExchange }} >

            {children}

        </ExchangeContext.Provider >
    );
}

export default ExchangeProvider;
