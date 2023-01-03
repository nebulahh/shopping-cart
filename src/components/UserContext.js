import { createContext, useState } from 'react';
import data from './Food-imgs/Foods';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (details) => {
    let res;
    for (let item of items) {
      if (item.id === details) {
        res = item;
      }
    }
    if (res) {
      alert('Item is in cart');
    } else {
      setItems((prevState) => [
        ...prevState,
        data.find((element) => element.id === details),
      ]);
    }
  };

  const delete_from_cart = (details) => {
    setItems(items.filter((item, index) => index !== details));
  };

  const increment_quantity_and_price = (index, title) => {
    const new_items = [...items];

    new_items[index].quantity += 1;

    setItems(new_items);
  };

  const decrement_quantity_and_price = (index) => {
    const new_items = [...items];
    if (new_items[index].quantity === 1) {
      return;
    }
    new_items[index].quantity -= 1;

    setItems(new_items);
  };
  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        delete_from_cart,
        increment_quantity_and_price,
        decrement_quantity_and_price,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
