import axios from 'axios'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Card from './Card'
const Character = () => {
  const fetchCharacters = async () => {
    const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character',
    )
    return data.results
  }
 
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  })
  if (isLoading) {
    return <div>Loading .....</div>
  }
  if (isError) {
    return <div className="bg-red-900">Error</div>
  }

  return (
    <div className='grid grid-cols-4 gap-4 '>
      {data.map((x) => {
        return (
         <Card key={x.id} {...x} ></Card>
        )
      })}
    </div>
  )
}

export default Character
