import { useState } from 'react'
import PasswordStrengthBar from 'react-password-strength-bar'
import ValidatePassword from './hooks/usePasswordValidate'
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillCheckCircleFill,
  BsFillBackspaceReverseFill,
} from 'react-icons/bs'

import { FcCheckmark, FcInfo, FcCancel } from 'react-icons/fc'
function App() {
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [validate, setValidate] = useState({
    hasLow: false,
    hasCap: false,
    hasNum: false,
    hasChar: false,
    has8digit: false,
  })

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-md relative">
          <label className="label">
            <span className="label-text">Enter Password</span>
          </label>
          <input
            type={visible ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              ValidatePassword(e.target.value, setValidate)
            }}
            placeholder="Enter Password"
            className="input input-bordered  w-full max-w-xs lg:input-lg md:input-md input-sm"
          />
          <label className="swap absolute lg:bottom-5 lg:right-8 ">
            <input
              type="checkbox"
              checked={visible}
              onChange={() => setVisible(!visible)}
            />
            <div className="swap-on">
              <BsFillEyeFill />{' '}
            </div>
            <div className="swap-off">
              <BsFillEyeSlashFill />
            </div>
          </label>
        </div>

        <div className="max-w-md">
          <ul className="flex flex-col items-start w-full ">
            {!validate.hasLow && (
              <li className="text-red-700 flex items-center">
                <FcCancel className=" mr-1" /> LowerCase letter
              </li>
            )}
            {!validate.hasCap && (
              <li className="text-red-700 flex items-center">
                <FcCancel className=" mr-1" /> UpperCase letter
              </li>
            )}
            {!validate.hasNum && (
              <li className="text-red-700 flex items-center">
                <FcCancel className=" mr-1" /> Number
              </li>
            )}
            {!validate.hasChar && (
              <li className="text-red-700 flex items-center">
                <FcCancel className=" mr-1" /> A special Character
              </li>
            )}
            {!validate.has8digit && (
              <li className="text-red-700 flex items-center">
                <FcCancel className=" mr-1" /> Length greater than 8
              </li>
            )}
            {validate.has8digit &&
              validate.hasCap &&
              validate.hasChar &&
              validate.hasLow &&
              validate.hasNum && (
                <li className="text-green-500 flex items-center">
                  <FcCheckmark className="h-3 mr-1" /> Your password is
                  extremely secure
                </li>
              )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
