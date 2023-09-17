import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify'
function App() {
  const [length, setLength] = useState(7)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    let characters = '!~@#$%^&*(){}[],./?|'
    if (numberAllowed) str += numbers
    if (charAllowed) str += characters
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // copy password on clicking the button
  const copyPassword = useCallback(() => {
    //we have given reference of password to the button that on clicking it that should be copied
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    toast.success(`Copied to Clipboard `, {
      position: 'top-right',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }, [password])
  useEffect(() => {
    // const fetchData = async () => {
    //   const pass = await axios.get('http://localhost:4999/getrandomPassword', {
    //     headers: {
    //       numberAllowed: true,
    //       length: 8,
    //       charAllowed: true,
    //     },
    //   })
    //   setPassword(pass.data)
    // }
    // fetchData()
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className="flex flex-col items-center justify-center w-100vw h-screen">
      <h1 className="text-2xl font-bold">Random Password Generator</h1>
      <div className=" h-auto md bg- p-3 rounded-lg">
        <div className=" border-2 h-auto   rounded-2xl  bg-white flex items-center justify-between ">
          <input
            ref={passwordRef}
            value={password}
            placeholder="password"
            className="input input-bordered text-black md:font-bold font-semibold bg-white w-full max-w-xs"
          />

          <button
            onClick={copyPassword}
            className="btn btn-neutral outline-none  h-[100%]  md:rounded-2xl md:-translate-x-1"
          >
            Copy
          </button>
        </div>
        <div className="mt-8 md:mt-4 grid grid-cols-1 md:grid-cols-3 justify-items-center content-center h-10">
          <div className="col-span-1 text-center  my-auto">
            <input
              type="range"
              min={1}
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="range range-warning   "
              step="1"
            />
          </div>
          <div className="col-span-2 flex  md:justify-start justify-center ">
            <label className="label cursor-pointer">
              <span className="text-xl font-semibold px-1 md:px-2">
                Numbers
              </span>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
                className="checkbox"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="text-xl font-semibold px-1 md:px-2">
                Characters
              </span>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(!charAllowed)}
                className="checkbox"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
