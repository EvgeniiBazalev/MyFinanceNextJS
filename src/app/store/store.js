import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import expensReducer from './expensSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        expens: expensReducer,
    },
})