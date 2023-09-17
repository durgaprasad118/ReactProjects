import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')
  return (
    <div
      className="w-100vw h-screen flex items-center justify-center "
      style={{ backgroundColor: color }}
    >
      <div className="flex w-1/2 h-20 bg-base-300 items-center justify-between  rounded-xl px-2 ">
        <button
          onClick={() => {
            setColor('Pink')
          }}
          className="btn btn-secondary"
        >
          Pink
        </button>
        <button
          onClick={() => {
            setColor('Red')
          }}
          className="btn btn-error "
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor('Blue')
          }}
          className="btn btn-accent"
        >
          Sky
        </button>
        <button
          onClick={() => {
            setColor('Purple')
          }}
          className="btn btn-primary"
        >
          Purple
        </button>
        <button
          onClick={() => {
            setColor('Green')
          }}
          className="btn btn-success"
        >
          Green
        </button>
      </div>
    </div>
  )
}

export default App
