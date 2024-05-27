import React, { createContext, useState, useEffect, useContext } from "react";
import {
  addItemToCart,
  createCart,
  getCart,
  removeItemFromCart,
} from "./apiHandler";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    (async () => {
      const storedCartId = localStorage.getItem("cartId");
      if (storedCartId) {
        const cartData = await getCart(storedCartId);
        setCart(cartData);
      } else {
        const cartData = await createCart();
        if (cartData.id) localStorage.setItem("cartId", cartData.id);
        setCart(cartData);
      }
    })();
  }, []);

  const addItem = async (product) => {
    const updatedCart = await addItemToCart(cart.id, product, cart.version);
    if (updatedCart.id) setCart(updatedCart);
  };

  const removeItem = async (lineItemId) => {
    const updatedCart = await removeItemFromCart(
      cart.id,
      lineItemId,
      cart.version
    );
    if (updatedCart.id) setCart(updatedCart);
  };

  const updateItemQuantity = async (lineItemId, quantity) => {
    const updatedCart = await updateItemQuantity(
      cart.id,
      lineItemId,
      quantity,
      cart.version
    );
    if (updatedCart.id) setCart(updatedCart);
  };

  const isInCart = (sku) => {
    return cart?.lineItems?.find((item) => item?.variant?.sku === sku);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateItemQuantity, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
