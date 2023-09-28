import { Outlet } from 'react-router-dom'
import Appbar from './components/Appbar'
import { useEffect } from 'react'

function App() {
  return (
    <>
      <Appbar></Appbar>
      <Outlet />
    </>
  )
}

export default App
