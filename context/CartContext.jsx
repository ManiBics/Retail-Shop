import React, { createContext, useState, useEffect, useContext } from "react";
import {
  addItemToCart,
  createCart,
  createOrderFromCart,
  getCart,
  removeCart,
  removeItemFromCart,
  updateItemQuantityToCart,
} from "./apiHandler";
import { useRouter } from "next/navigation";
import { useBackDrop } from "./BackDropContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const router = useRouter();
  const { showBackDrop, hideBackDrop } = useBackDrop();

  useEffect(() => {
    (async () => {
      const storedCartId = localStorage.getItem("cartId");
      showBackDrop();
      if (storedCartId) {
        const cartData = await getCart(storedCartId);
        setCart(cartData);
      } else {
        const cartData = await createCart();
        if (cartData.id) {
          localStorage.setItem("cartId", cartData.id);
          setCart(cartData);
        }
      }
      hideBackDrop();
    })();
  }, []);

  const addItem = async (product) => {
    showBackDrop();
    const updatedCart = await addItemToCart(cart.id, product, cart.version);
    if (updatedCart.id) setCart(updatedCart);
    hideBackDrop();
  };

  const removeItem = async (lineItemId) => {
    showBackDrop();
    const updatedCart = await removeItemFromCart(
      cart.id,
      lineItemId,
      cart.version
    );
    if (updatedCart.id) setCart(updatedCart);
    hideBackDrop();
  };

  const updateItemQuantity = async (lineItemId, quantity, pricevalue) => {
    showBackDrop();
    const updatedCart = await updateItemQuantityToCart(
      cart.id,
      lineItemId,
      quantity,
      pricevalue,
      cart.version
    );
    if (updatedCart.id) setCart(updatedCart);
    hideBackDrop();
  };

  const isInCart = (sku) => {
    return cart?.lineItems?.find((item) => item?.variant?.sku === sku);
  };

  const cancelOrder = async () => {
    showBackDrop();
    const updatedCart = await removeCart(cart.id, cart.version);
    if (updatedCart.id) {
      setCart(null);
      localStorage.removeItem("cartId");
    }
    hideBackDrop();
  };

  const createOrder = async () => {
    showBackDrop();
    const updatedCart = await createOrderFromCart(cart.id, cart.version);
    if (updatedCart.id) {
      setCart(null);
      localStorage.removeItem("cartId");
    }
    hideBackDrop();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateItemQuantity,
        isInCart,
        cancelOrder,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
