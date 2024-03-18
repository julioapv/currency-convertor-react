let CurrencyRow = (props) => {
    const {
        currencyOptions
    } = props
    return (
        <div>
            <input type="number" 
            className="border-solid border-gray-500 border-2 rounded m-2 p-1"/>
            <select className="ml-1">
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export { CurrencyRow }