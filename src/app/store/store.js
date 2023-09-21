import { configureStore } from '@reduxjs/toolkit'

import expensReducer from './expensSlice'

export const store = configureStore({
    reducer: {
        expens: expensReducer,
    },
})