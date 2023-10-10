import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/storeSlice'
const Card = ({ image, title, description, price, id }) => {
  const dispatch = useDispatch()
  return (
    <div className="card w-96 h-80 bg-slate-800 shadow-xl overflow-hidden">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-24 w-24"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>

        <div className="w-full py-2 flex  justify-between">
          <h1 className="text-xl text-white  font-bold">{price}</h1>
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch(
                addItem({
                  id,
                  price,
                  title,
                  description,
                  image,
                  qty: 1,
                }),
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
