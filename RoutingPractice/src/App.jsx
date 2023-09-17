import { Outlet } from "react-router-dom"
import Appbar from "./components/Appbar"
function App() {
return(

  <>
  <Appbar></Appbar>
  <Outlet/>
  </>
)
}

export default App
