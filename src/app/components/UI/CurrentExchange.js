import { ExchangeContext } from "@/app/context/ExchangeProvider"
import { useContext, useEffect } from "react"

import styles from './CurrentExchange.module.css'

export default function CurrentExchange() {
    const { updateExchangeData } = useContext(ExchangeContext);

    // useEffect(() => {
    //     updateExchangeData();
    // }, []);
    return (
        <div>
            {Object.keys(currentExchange).map((currency, index) => (
                <div key={index}>
                    <p>{currency}: {currentExchange[currency]}</p>
                </div>
            ))}
        </div>
    )
}
