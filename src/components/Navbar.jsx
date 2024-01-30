import { Link } from "react-router-dom"
import { ShoppingCart} from "phosphor-react"
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="links">
            <li><Link to="/">Shop</Link></li>
            <li id="cart-icon">
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar