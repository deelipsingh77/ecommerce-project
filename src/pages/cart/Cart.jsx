import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { PRODUCTS } from '../../products';
import CartItem from './CartItem';
import "./cart.css"
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cart-title'>
        <h1> Your Cart Items </h1>
      </div>
      <div className='cart-items'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ?
        <div className='checkout'>
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        : <h1>Your Cart is Empty</h1>
      }
    </div>
  )
}

export default Cart