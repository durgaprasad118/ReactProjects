import { useState } from 'react'
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import PurchasePage from './components/PurchasePage';



function App() {

  return (
    <>
    <Navbar></Navbar>
    <ProductPage></ProductPage>
    <PurchasePage></PurchasePage>
    </>
  )
}

export default App
