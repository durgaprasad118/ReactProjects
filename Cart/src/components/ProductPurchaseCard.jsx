import React from 'react'
import { useDispatch } from 'react-redux'
import { decremntQty, increaseQty,  removeItem } from '../utils/storeSlice'

const ProductPurchaseCard = ({ image, title, description, price, id,qty }) => {
    console.log(qty);

  const dispatch = useDispatch()
  return (
    <div className="card w-full px-52 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>

        <p>{qty }</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(decremntQty(id))}
          >
            -
          </button>
          <p className="text-xl font-bold">{price*qty}</p>
          <button
            onClick={() => dispatch(increaseQty(id))}
            className="btn btn-error"
          >
            +
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(removeItem(id))}
          >
            RemoveItem
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPurchaseCard
