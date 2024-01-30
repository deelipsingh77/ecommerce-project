import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { PRODUCTS } from '../../products';
import CartItem from './CartItem';
import "./cart.css"

function Cart() {
  const  { cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
      <div className='cart-title'>
        <h1> Your Cart Items </h1>
      </div>
      <div className='cart-items'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
    </div>
  )
}

export default Cart