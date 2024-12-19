import { useState } from "react";
import "./App.css";
import InputBox from "../components/InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import img1 from "./img1.jpg";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${img1})` }}
        className="w-full h-screen bg-cover flex items-center justify-center"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="h-[300px] w-[500px] p-2.5 pt-5 bg-blue-500 bg-opacity-30 rounded-lg">
            <InputBox
              label={"From"}
              amount={amount}
              currencyOption={options}
              OnCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
            />
            <br />
            <div className="absolute mt-[-30px] pl-52">
              <button
                className="bg-blue-600 h-9 w-16 rounded-lg text-white"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <InputBox
              label={"To"}
              Amount={convertedAmount}
              currencyOption={options}
              OnCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisabled={true}
            />

            <br />
            <button
              type="submit"
              className="bg-blue-600 w-full rounded-lg h-12 text-white "
            >
              Convert {from} To {to}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
