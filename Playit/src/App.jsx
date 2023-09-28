import Aos from 'aos'
import 'aos/dist/aos.css'
import Layout from './components/Layout'
import { Outlet } from 'react-router-dom'
import Appbar from './components/Appbar'
function App() {
  return (
    <>
      <Appbar></Appbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
