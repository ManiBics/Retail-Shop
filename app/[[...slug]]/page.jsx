"use client";
import CartProvider from "@/context/CartContext";
import BackdropProvider from "@/context/BackDropContext";
import DynamicComp from "@/components/common/DynamicComp";
import UserProvider from "@/context/UserContext";

export default function ComposablePage() {
  return (
    <BackdropProvider>
      <UserProvider>
        <CartProvider>
          <DynamicComp />
        </CartProvider>
      </UserProvider>
    </BackdropProvider>
  );
}
