import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import expensReducer from './expensSlice'
import exchangeReducer from './exchangeSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        expens: expensReducer,
        exchange: exchangeReducer
    },
})