import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
  return (
    <div>
    <input type="number" className='input' id="" value={amount} onChange={onChangeAmount}/>
    <select onChange={onChangeCurrency} name="" id="" value={selectedCurrency}>
        {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
        ))}
        
    </select>
    </div>
  )
}
