'use client'

import { Provider } from "react-redux"
import { store } from "@/app/store/store"
import Expens from "./Expens"

import postData from "../DataBase/DataBaseInfo"

export default function ExpensUI() {
    postData();
    return (
        <Provider store={store}>
            <Expens></Expens>
        </Provider>
    )
}
