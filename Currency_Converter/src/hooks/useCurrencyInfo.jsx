import { useState, useEffect } from 'react'
import axios from 'axios'

const UseCurrencyInfo = (currency)=> {
  const [val, setVal] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
        )
        const data = response.data
        setVal(data[currency])
      } catch (er) {
        console.log(er)
      }
    }
    fetchData()
  }, [currency])
  return val
}

export default UseCurrencyInfo
