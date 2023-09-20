'use client'

import { ExchangeContext } from "@/app/context/ExchangeProvider";
import { useContext } from "react";

export default function FromServToClientComp(props) {

    const { currentExchange, setCurrentExchange } = useContext(ExchangeContext);
    setCurrentExchange(props.currencyRates);
    console.log(props.currencyRates);
    return (
        <div>
            {Object.keys(props.currencyRates).map((currency, index) => (
                <div key={index}>
                    <p>{currency}: {props.currencyRates[currency]}</p>
                </div>
            ))}
        </div>
    )
}
