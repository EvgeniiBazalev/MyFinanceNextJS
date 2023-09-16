'use client'

import { Provider } from "react-redux"
import { store } from "@/app/store/store"
import Expens from "./Expens"

export default function ExpensUI() {
    return (
        <Provider store={store}>
            <Expens></Expens>
        </Provider>
    )
}
