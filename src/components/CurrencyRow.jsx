let CurrencyRow = (props) => {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
    } = props
    return (
        <div>
            <input 
            type="number" 
            className="border-solid border-gray-500 border-2 rounded m-2 p-1"
            value={amount}
            onChange={onChangeAmount}
            />
            <select 
            onChange={onChangeCurrency}
            value={selectedCurrency}
            className="ml-1">
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export { CurrencyRow }