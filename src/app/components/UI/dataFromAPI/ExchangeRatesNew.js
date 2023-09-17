import styles from './ExchangeRates.module.css'
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeProvider';

import axios from 'axios';

const currencyRates = {};
export default function ExchangeRates() {
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const respons = await axios.get('https://api.coingate.com/v2/rates/merchant/EUR/RUB');
                const currencyRates = {
                    EUR: respons.Valute.EUR.Value,
                    USD: respons.Valute.USD.Value,
                    CNY: respons.Valute.CNY.Value,
                    GEL: respons.Valute.GEL.Value,
                    RSD: respons.Valute.RSD.Value / 100,
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных о курсах валют:', error);
            }

        };

        fetchData();
    }, []);


    return (
        <div>

            <div className={styles.currencyRatesContainer}>
                {Object.keys(currencyRates).map((currency, index) => (
                    <div key={index} className={`${styles.currencyRate} + ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
                        <p>{currency}: {currencyRates[currency]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

