import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const OrderPlaced = (props) => {
  const router = useRouter();
  const { cart, createOrder } = useCart();

  useEffect(() => {
    if (cart?.id) {
      createOrder();
    }
  }, [cart?.id]);

  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-800 my-10">
      <div className="text-center">
        <img
          src={props.image.src}
          alt={props.image.alt}
          className="w-26 h-24 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold text-[#1976d2] mb-4">
          {props.title}
        </h1>
        <p className="text-lg mb-8">{props.description}</p>
        <button
          className="bg-[#1976d2] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-6"
          onClick={() => {
            if (props.button.url) router.push(props.button.url);
          }}
        >
          {props.button.label}
        </button>
        <p className="text-sm text-gray-600">
          {props.hometitle}{" "}
          <Link
            href={`mailto:${props.email}`}
            className="text-[#1976d2] underline"
          >
            {props.email}
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default OrderPlaced;
