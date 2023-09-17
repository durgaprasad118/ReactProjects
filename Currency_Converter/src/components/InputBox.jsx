import React from 'react'

const InputBox = ({
  amount,
  onAmountChange,
  onCurrencyChangeFrom,
  selectCurrencyFrom,
  currencyOptions = [],
  selectCurrencyTo,
  onCurrencyChangeTo,
}) => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <div>
        <label className="label">
          <span className="label-text">Enter Amount</span>
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            onAmountChange(Number(e.target.value))
          }}
          placeholder="From"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">From</span>
        </label>
        <select
          value={selectCurrencyFrom}
          onChange={(e) => onCurrencyChangeFrom(e.target.value)}
          className="select select-ghost w-full max-w-xs"
        >
          {currencyOptions.map((x) => {
            return (
              <option
                value={x}
                key={x}
              >
                {x}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label className="label">
          <span className="label-text">To</span>
        </label>
        <select
          value={selectCurrencyTo}
          onChange={(e) => onCurrencyChangeTo(e.target.value)}
          className="select select-ghost w-full max-w-xs"
        >
          {currencyOptions.map((x) => {
            return (
              <option
                value={x}
                key={x}
              >
                {x}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default InputBox
