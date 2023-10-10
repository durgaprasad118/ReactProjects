import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Card from './Card'
import { useSelector } from 'react-redux'
const ProductPage = () => {
  const fetchData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')

    return data
  }
 
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchData,
  })
  if (isLoading) {
    return <div>Loading....</div>
  }
  if (isError) {
    return <div>Errr varma</div>
  }

  return (
    <div className="grid mt-20 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 content-center justify-items-center">
      {data.map((x) => {
        return (
          <Card
            className=""
            key={x.id}
            {...x}
          ></Card>
        )
      })}
    </div>
  )
}

export default ProductPage
