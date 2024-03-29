import { useEffect, useState } from 'react';
import { CurrencyRow } from './components/CurrencyRow'
import './App.css'

const BASE_URL = 'https://api.fxratesapi.com/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if(amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null) {
        fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
          .then(res => res.json())
          .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className='flex justify-center items-center text-center'>
      <div>
        <h1 className='text-3xl mb-2'>Currency Convertor</h1>
        <CurrencyRow  
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          amount={fromAmount}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
        />
        <div className='text-6xl font-bold'>=</div>
        <CurrencyRow 
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          amount={toAmount}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
        />
      </div>
    </div>
  )
}

export default App
