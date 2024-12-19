import React, { useState } from "react";

function InputBox({
  label,
  Amount,
  onAmountChange,
  OnCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  clasName = "",
}) {
  return (
    <div className="bg-white h-[5rem] w-[30rem] rounded-lg pl-3 pr-3">
      <div className="flex justify-between text-gray-600">
        <div>
          <label htmlFor="">{label}</label>
        </div>
        <div>
          <label htmlFor="">Currency Type</label>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div>
          <input
            type="number"
            className="outline-none placeholder:text-black"
            value={Amount}
            disabled={amountDisabled}
            placeholder="0"
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div>
          <select
            value={selectCurrency}
            onChange={(e) => {
              OnCurrencyChange && OnCurrencyChange(e.target.value);
            }}
            disabled={currencyDisabled}
          >
            {currencyOption.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
