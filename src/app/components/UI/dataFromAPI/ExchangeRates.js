import styles from './ExchangeRates.module.css'
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeProvider';

import axios from 'axios';

export default function ExchangeRates() {
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);

    const [currencyRates, setCurrencyRates] = useState({
        EUR: 0,
        USD: 0,
        BTC: 0,
        LTC: 0,
        ETH: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            let EUR = 0;
            let USD = 0;
            let BTC = 0;
            let LTC = 0;
            let ETH = 0;

            try {
                const EUR = await axios.get('https://api.coingate.com/v2/rates/merchant/EUR/RUB');
                console.log(EUR);
            } catch (error) {
                console.error('Ошибка при загрузке данных о курсах валют EUR:', error);
                EUR = 0;
            }

            try {
                const USD = await axios.get('https://api.coingate.com/v2/rates/merchant/USD/RUB');
            } catch (error) {
                console.error('Ошибка при загрузке данных о курсах валют USD:', error);
                USD = 0;
            }

            try {
                const BTC = await axios.get('https://api.coingate.com/v2/rates/merchant/BTC/RUB');
            } catch (error) {
                console.error('Ошибка при загрузке данных о курсах валют BTC:', error);
                BTC = 0;
            }

            try {
                const LTC = await axios.get('https://api.coingate.com/v2/rates/merchant/LTC/RUB');
            } catch (error) {
                console.error('Ошибка при загрузке данных о курсах валют LTC:', error);
                LTC = 0;
            }

            try {
                const ETH = await axios.get('https://api.coingate.com/v2/rates/merchant/ETH/RUB');
            } catch (error) {
                console.error('Ошибка при загрузке данных о курсах валют ETH:', error);
                ETH = 0;
            }

            setCurrencyRates({
                EUR: EUR,
                USD: USD,
                BTC: BTC,
                LTC: LTC,
                ETH: ETH,
            });
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

