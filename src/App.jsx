import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Product from "./components/Product"

function App() {

  const [cart, setCart] = useState([])

  const emptyCart = () => {
    setCart([])
  }

  return (
    <>
      <Header cart={cart} />
      <div className="container mx-auto px-4">
        <Product cart={cart} setCart={setCart} />
        {cart.length > 0 && <Cart cart={cart} emptyCart={emptyCart} />}
      </div>
    </>

  )

}

export default App
