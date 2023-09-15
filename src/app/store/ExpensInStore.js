import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addExpens } from './expensSlice'

export function ExpensInStore() {
    const arr = useSelector((state) => state.expens);
    const dispatch = useDispatch();
    console.log(arr);

    return (
        <div>
            <button
                onClick={() => dispatch(addExpens({
                    id: 77,
                    expens: 'Тестовый продукт',
                    price: 9999,
                    exchange: 'руб',
                    date: '12.03.2023',
                }))}
            >
                addExpens
            </button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Категория расходов</th>
                            <th>Дата</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((item) => (

                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.expens}</td>
                                <td>{item.date}</td>
                                <td>{item.price + ' ' + item.exchange}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}