'use client'

import { ThemeContext } from '@/context/ThemeProvider';
import styles from './CurrentExchange.module.css'
import { useContext } from 'react'

export default function CurrentExchange({ currencyRates }) {

    const { isDarkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className={`${styles.currencyRatesContainer} + ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            {Object.keys(currencyRates).map((currency, index) => (
                <div key={index} className={`${styles.currencyRate} + ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
                    <p>{currency}: {currencyRates[currency]}</p>
                </div>
            ))}
        </div>
    )
}
