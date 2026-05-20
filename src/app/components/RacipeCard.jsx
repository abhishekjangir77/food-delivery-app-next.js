import React from "react";
import { FaStar, FaClock } from "react-icons/fa";
import Link from "next/link";

const RecipeCard = ({ image, title, time, rating ,id}) => {
  return (
    <div className="bg-white  rounded-2xl mt-10 shadow-lg overflow-hidden  hover:scale-90 transition duration-300 w-72">

      {/* Image */}
    <Link href={`/overview/${id}`}>
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      </Link>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        {/* Time + Rating */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">

          <div className="flex items-center gap-1">
            <FaClock className="text-orange-500" />
            {time}
          </div>

          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {rating}
          </div>

        </div>

        {/* Button */}
        <button className="w-full bg-orange-500 cursor-pointer text-white py-2 rounded-lg hover:bg-orange-600 transition">
          View Recipe
        </button>

      </div>
    </div>
  );
};

export default RecipeCard;