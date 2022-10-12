import { createContext, useState } from "react";
import data from "./Food-imgs/Foods";

const CartContext = createContext()

export function CartProvider({children}) {
  const [items, setItems] = useState([])

  const addToCart = (details) => {
    setItems(prevState => [...prevState, data.find(element => element.id === details)])

  }
  return (
    <CartContext.Provider value={{items, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext