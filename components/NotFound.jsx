// src/components/NotFound.js
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
