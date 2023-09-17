import { useState } from 'react'
import useCurrencyInfo from '../src/hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import { toast } from 'react-toastify'
function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [disp, setDisp] = useState(0)
  const [amount, setamount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const keys = Object.keys(currencyInfo)
  const answer = () => {
    setDisp(currencyInfo[to] * amount)
  }

  return (
    <div
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1600)',
      }}
      className="h-screen w-100vw flex flex-wrap items-center justify-center bg-cover bg-no-repeat"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30 flex flex-col gap-y-6 items-center justify-center">
          <div>
            <div>
              <InputBox
                amount={amount}
                onAmountChange={(amount) => setamount(amount)}
                currencyOptions={keys}
                selectCurrencyFrom={from}
                onCurrencyChangeFrom={(val) => setFrom(val)}
                selectCurrencyTo={to}
                onCurrencyChangeTo={(val) => setTo(val)}
              />
            </div>
          </div>
          <div className=" h-8 rounded-lg w-1/2 text-center">
            <h1 className="text-xl font-bold">{disp}</h1>
          </div>
          <div className=" ">
            <button
              onClick={() => {
                answer()
                toast.success(`converted ${from} to ${to} `, {
                  position: 'top-right',
                  autoClose: 500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
                })
              }}
              className="btn  btn-primary"
            >
              Convert {from} to {to}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
