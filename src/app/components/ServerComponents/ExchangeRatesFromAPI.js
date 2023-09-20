import styles from './ExchangeRatesFromAPI.module.css'
import FromServToClientComp from '../Supporting/FromServToClientComp';

async function getData() {
    let ExchangeRates = {
        EUR: 0,
        USD: 0,
        BTC: 0,
        LTC: 0,
        ETH: 0,
    }

    const EURres = await fetch('https://api.coingate.com/v2/rates/merchant/EUR/RUB')
    const EUR = await EURres.json();
    if (!EURres.ok) {
        throw new Error('Ошибка в получении информации о курсах валют EUR')
    }

    const USDres = await fetch('https://api.coingate.com/v2/rates/merchant/USD/RUB')
    const USD = await USDres.json();
    if (!USDres.ok) {
        throw new Error('Ошибка в получении информации о курсах валют USD')
    }

    const BTCres = await fetch('https://api.coingate.com/v2/rates/merchant/BTC/RUB')
    const BTC = await BTCres.json();
    if (!BTCres.ok) {
        throw new Error('Ошибка в получении информации о курсах валют BTC')
    }

    const LTCres = await fetch('https://api.coingate.com/v2/rates/merchant/LTC/RUB')
    const LTC = await LTCres.json();
    if (!LTCres.ok) {
        throw new Error('Ошибка в получении информации о курсах валют LTC')
    }

    const ETHres = await fetch('https://api.coingate.com/v2/rates/merchant/ETH/RUB')
    const ETH = await ETHres.json();
    if (!ETHres.ok) {
        throw new Error('Ошибка в получении информации о курсах валют ETH')
    }


    ExchangeRates = {
        EUR: EUR,
        USD: USD,
        BTC: BTC,
        LTC: LTC,
        ETH: ETH,
    }

    return ExchangeRates
}

export default async function ExchangeRatesFromAPI() {

    const currencyRates = await getData()

    return (
        <div>

            <FromServToClientComp currencyRates={currencyRates}></FromServToClientComp>


            {/* <div className={styles.currencyRatesContainer}>
                {Object.keys(currencyRates).map((currency, index) => (
                    <div key={index} className={styles.currencyRate}>
                        <p>{currency}: {currencyRates[currency]}</p>
                    </div>
                ))}
            </div> */}

        </div>

    )
}
