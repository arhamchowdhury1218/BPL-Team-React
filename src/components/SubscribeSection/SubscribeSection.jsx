import React from "react";

const SubscribeSection = () => {
  return (
    <div className="relative -mb-40 z-10 mt-20">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-100 via-white to-orange-200 rounded-3xl p-10 shadow-xl text-center border border-gray-200">
        <h2 className="text-3xl font-bold mb-3">Subscribe to our Newsletter</h2>

        <p className="text-gray-600 mb-6">
          Get the latest updates and news right in your inbox!
        </p>

        <div className="flex justify-center">
          <div className="join w-full max-w-md">
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
  );
};

export default SubscribeSection;
