import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from './Root.jsx'
import Cart from './pages/cart/Cart.jsx'
import Shop from "./pages/shop/Shop.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
        </Route>
    )
);