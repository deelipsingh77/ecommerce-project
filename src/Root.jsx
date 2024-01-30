import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ShopContextProvider } from "./context/ShopContext"

function Root() {

  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <Outlet />
      </ShopContextProvider>
    </>
  )
}

export default Root
