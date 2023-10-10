import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductPurchaseCard from './ProductPurchaseCard'
import { clearCart } from '../utils/storeSlice'

const PurchasePage = () => {
 const cart = useSelector((store) => store.Cart.cart)
 const dispatch = useDispatch();
 console.log(cart);
  return (
    <div className='w-full bg-gray-500 grid grid-cols-1 gap-3 py-4 ' >
        <div>
            <button className="btn btn-error"
            onClick={()=> dispatch(clearCart())}
            >Clear Cart</button>
        </div>
        {
            cart.map(x=>{
                return <ProductPurchaseCard key={x.id} {...x}></ProductPurchaseCard>
            })
        }
    </div>
  )
}

export default PurchasePage