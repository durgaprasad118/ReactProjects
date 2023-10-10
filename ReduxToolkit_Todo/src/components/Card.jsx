import React from 'react'

const Card = ({name,image,gender,type,species}) => {
  return (
  <div className="card w-96 bg-slate-300-300 shadow-xl">
  <figure><img src={image} className='h-auto w-auto' /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
      <div className="badge badge-secondary">{species}</div>
    </h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{gender}</div>
      <div className="badge badge-outline">{type}</div>
    </div>
  </div>
</div>
  )
}

export default Card