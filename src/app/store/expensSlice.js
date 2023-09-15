import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, expens: 'Продукты', price: 2000, exchange: 'руб', date: '01.01.2021' },
    { id: 2, expens: 'Курица', price: 5000, exchange: 'руб', date: '05.01.2021' },
    { id: 3, expens: 'Вазелин', price: 500, exchange: 'руб', date: '01.02.2022' },
    { id: 4, expens: 'Лекарства', price: 1500, exchange: 'руб', date: '12.02.2022' },
    { id: 5, expens: 'Парикмахер', price: 1000, exchange: 'руб', date: '01.03.2023' },
    { id: 6, expens: 'Маникюр', price: 6000, exchange: 'руб', date: '12.03.2023' },
];

export const expensSlice = createSlice({
    name: 'expensSlice',
    initialState,
    reducers: {
        addExpens: (state, action) =>
            [...state, action.payload]
    },
})

// Action creators are generated for each case reducer function
export const { addExpens } = expensSlice.actions

export default expensSlice.reducer