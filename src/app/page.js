'use client'

import Expens from './components/UI/Expens'
import { store } from './store/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <Expens></Expens>
    </Provider>
  )
}
