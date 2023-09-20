'use client'

import { useSelector, useDispatch } from 'react-redux';
import { newExchange } from '@/app/store/exchangeSlice';

export default function FromServToClientComp(props) {
    const dispatch = useDispatch();
    const exchange = useSelector((state) => state.exchange);
    dispatch(newExchange(props.currencyRates));
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
