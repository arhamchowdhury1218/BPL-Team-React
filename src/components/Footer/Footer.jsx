import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white pt-16 pb-6 mt-20">
      {/* Logo Center */}
      <div className="flex justify-center mb-12">
        <img
          src="https://i.ibb.co.com/QFNqzYBD/logo-footer.png"
          alt="Logo"
          className="h-40"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left px-6">
        {/* About */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Subscribe</h2>
          <p className="text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>

          <div className="flex justify-center md:justify-start">
            <div className="join w-full max-w-xs">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item w-full text-black"
              />
              <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 border-none join-item">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        ©2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
