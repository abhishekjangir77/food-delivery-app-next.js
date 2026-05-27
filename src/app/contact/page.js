
import React from "react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 min-h-screen py-16">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-3">
            We'd love to hear from you. Send us a message or visit our restaurant!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl text-gray-500 font-semibold mb-6">Send a Message</h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border text-black  p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📍 Address</h3>
              <p className="text-gray-600 mt-2">
                123 Food Street, Jaipur, Rajasthan
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">☎ Phone</h3>
              <p className="text-gray-600 mt-2">+91 98765 43210</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📧 Email</h3>
              <p className="text-gray-600 mt-2">foodie@restaurant.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">⏰ Opening Hours</h3>
              <p className="text-gray-600 mt-2">
                Mon - Fri : 10 AM - 10 PM
                <br />
                Sat - Sun : 11 AM - 12 AM
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}