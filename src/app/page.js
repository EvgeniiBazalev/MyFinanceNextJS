import ExpensUI from "./components/UI/ExpensUI"
import ExchangeRatesFromAPI from "./components/ServerComponents/ExchangeRatesFromAPI"

export default function Home() {
  return (
    <div>
      <ExpensUI></ExpensUI>
      <ExchangeRatesFromAPI></ExchangeRatesFromAPI>
    </div>
  )
}
