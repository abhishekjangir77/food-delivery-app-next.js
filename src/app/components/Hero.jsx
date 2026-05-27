import React from "react";
import { FaUtensils } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover Delicious
            <span className="text-orange-500"> Recipes</span>
            For Every Day
          </h1>

          <p className="mt-4 text-gray-600">
            Explore hundreds of tasty recipes from around the world. Cook easily
            at home with fresh ingredients and simple steps.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Link href='/menu'>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition flex items-center gap-2">
              <FaUtensils />
              Explore Recipes
            </button>
            </Link>

            
            <Link href='/menu'>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
              View Menu
            </button>
            </Link>

            
          </div>
        </div>

       
        {/* Right Image */}
        <div className="relative w-full h-[400px] shadow-2xl flex justify-center">
          <Image
            className="rounded-xl shadow-lg object-cover"
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            fill
            alt="food"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
