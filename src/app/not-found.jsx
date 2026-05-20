import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import Link from "next/link";

const NotFoundCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center">
        
        {/* Icon */}
        <div className="text-7xl mb-6 animate-bounce text-orange-500 flex justify-center">
          <FaPizzaSlice />
        </div>

        {/* 404 Text */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          Oops! Looks like this recipe got lost in the kitchen. 🍕
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition font-semibold"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default NotFoundCard;