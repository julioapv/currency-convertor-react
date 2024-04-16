let CurrencyRow = (props) => {
    const {
        currencyOptions,
        defaultCurrency,
        onChangeCurrencySelector,
        amount,
        onChangeAmount,
    } = props
    return (
        <div>
            <input 
            value={amount}
            type="number" 
            className="border-solid border-gray-500 border-2 rounded m-2 p-1"
            onChange={onChangeAmount}
            />
            <select 
            className="ml-1"
            value={defaultCurrency}
            onChange={onChangeCurrencySelector}
            >
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export { CurrencyRow }