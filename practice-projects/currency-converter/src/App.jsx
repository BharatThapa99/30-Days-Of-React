import React, { useEffect, useState} from "react";
import './App.css';
import CurrencyRow from "./CurrencyRow";

const API_KEY = 'fca_live_CYPYxbWXLRm6gJ9XGehsi1VVENyQ0QU6lE04yYtK'
const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest/?apikey='+API_KEY
export default function App() {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    console.log(currencyOptions)
    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            const firstCurrency = Object.keys(data.data)[0]
            setCurrencyOptions([...Object.keys(data.data)])
            setFromCurrency("USD")
            setToCurrency(firstCurrency)
            setExchangeRate(data.data[firstCurrency])
        })
    },[])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}&base_currency=${fromCurrency}&currencies=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.data[toCurrency]))
        }
    }, [fromCurrency, toCurrency] )

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }
    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }
    
    return (
    <>
        <h1>Convert</h1>
        <CurrencyRow 
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
            />
        <div className="equals">=</div>
        <CurrencyRow
             currencyOptions={currencyOptions} 
             selectedCurrency={toCurrency}
             onChangeCurrency={e => setToCurrency(e.target.value)}
             onChangeAmount={handleToAmountChange}
             amount={toAmount}
             
             />
    </>
    )
}
