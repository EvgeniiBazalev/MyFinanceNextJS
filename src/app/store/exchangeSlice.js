import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    EUR: 0,
    USD: 0,
    BTC: 0,
    LTC: 0,
    ETH: 0,
};

export const exchangeSlice = createSlice({
    name: 'exchangeSlice',
    initialState,
    reducers: {
        newExchange: (state, action) => action.payload,
    },
})

// Action creators are generated for each case reducer function
export const { newExchange } = exchangeSlice.actions

export default exchangeSlice.reducer