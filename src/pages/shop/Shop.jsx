import { PRODUCTS } from "../../products"
import Product from "./Product.jsx"
import "./shop.css"

function Shop() {
  return (
    <div className="shop">
        <div className="shop-title">
            <h1>PedroTech Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product)=> <Product data={product} />)}
        </div>
    </div>
  )
}

export default Shop