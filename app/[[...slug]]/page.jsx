"use client";
import CartProvider from "@/context/CartContext";
import BackdropProvider from "@/context/BackDropContext";
import DynamicComp from "@/components/common/DynamicComp";

export default function ComposablePage() {
  return (
    <BackdropProvider>
      <CartProvider>
        <DynamicComp />
      </CartProvider>
    </BackdropProvider>
  );
}
