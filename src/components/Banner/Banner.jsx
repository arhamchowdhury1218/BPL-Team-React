import React from "react";

const Banner = () => {
  return (
    // <div
    //   className="hero min-h-screen max-w-full md:w-9/12 mx-auto rounded-2xl"
    //   style={{
    //     backgroundImage: "url(https://i.ibb.co.com/hRfnXPbh/bg-shadow.png)",
    //   }}
    // >
    //   {/* <div className="hero-overlay"></div> */}

    //   <div className="hero-content text-neutral-content text-center">
    //     <div className="">
    //       <img
    //         src="https://i.ibb.co.com/PsVSzGbx/banner-main.png"
    //         alt="Banner Image"
    //       />
    //       <h1 className="mb-5 font-black text-3xl">
    //         Assemble Your Ultimate Dream 11 Cricket Team
    //       </h1>
    //       <p className="mb-5">Beyond Boundaries Beyond Limits</p>
    //       <button className="btn bg-[#e7fe29] border-4 border-black rounded-xl p-4">
    //         Claim Free Credit
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div
      className="max-w-full md:w-9/12 mx-auto rounded-2xl flex items-center justify-center text-center bg-cover bg-center min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/Y7nx1w8m/vackground-com-0-F2p-C8-Dwv-M-unsplash.jpg)",
      }}
    >
      <div className="space-y-4">
        <img
          src="https://i.ibb.co.com/PsVSzGbx/banner-main.png"
          alt="Banner"
          className="mx-auto"
        />

        <h1 className="font-black text-3xl md:text-5xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-950">Beyond Boundaries Beyond Limits</p>

        <button className="bg-[#e7fe29] border-4 border-black rounded-xl px-6 py-2 font-bold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
