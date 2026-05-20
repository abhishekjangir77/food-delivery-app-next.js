import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500 mb-3">
            🍔 FoodZone
          </h1>
          <p className="text-sm leading-relaxed">
            Delicious food delivered to your doorstep. Enjoy the best meals
            with fresh ingredients and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Menu</li>
            <li className="hover:text-orange-500 cursor-pointer">Offers</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              Rajasthan, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-orange-500" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              support@foodzone.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <div className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} FoodZone. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;