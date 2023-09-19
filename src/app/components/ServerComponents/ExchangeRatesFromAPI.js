import styles from './ExchangeRatesFromAPI.module.css'

async function getData() {
    let ExchangeRates = {
        EUR: 0,
        USD: 0,
        BTC: 0,
        LTC: 0,
        ETH: 0,
    }

    const res = await fetch('https://api.coingate.com/v2/rates/merchant/EUR/RUB')
    const EUR = await res.json();
    if (!res.ok) {
        throw new Error('Ошибка в получении информации о курсах валют')
    }

    ExchangeRates = {
        EUR: EUR,
        USD: 0,
        BTC: 0,
        LTC: 0,
        ETH: 0,
    }

    return ExchangeRates
}

export default async function ExchangeRatesFromAPI() {

    const currencyRates = await getData()
    console.log(currencyRates);

    return (

        <div className={styles.currencyRatesContainer}>
            {Object.keys(currencyRates).map((currency, index) => (
                <div key={index} className={styles.currencyRate}>
                    <p>{currency}: {currencyRates[currency]}</p>
                </div>
            ))}
        </div>
    )
}
