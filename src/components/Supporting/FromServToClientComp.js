'use client'

import { ExchangeContext } from "@/app/context/ExchangeProvider";
import { useContext } from "react";

export default function FromServToClientComp(props) {

    const { currentExchange, setCurrentExchange, updateExchangeData } = useContext(ExchangeContext);

    updateExchangeData(props.currencyRates);
    console.log(props.currencyRates);

    //Ничего не возвращаем а только отдаем данные в context
    return null
}
