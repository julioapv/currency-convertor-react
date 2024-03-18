import { useEffect, useState } from 'react';
import { CurrencyRow } from './components/CurrencyRow'
import './App.css'

const BASE_URL = 'https://api.fxratesapi.com/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCure]

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])

  return (
    <div className='flex justify-center items-center text-center'>
      <div>
        <h1 className='text-3xl mb-2'>Currency Convertor</h1>
        <CurrencyRow  
          currencyOptions={currencyOptions}
        />
        <div className='text-6xl font-bold'>=</div>
        <CurrencyRow 
          currencyOptions={currencyOptions}
        />
      </div>
    </div>
  )
}

export default App
