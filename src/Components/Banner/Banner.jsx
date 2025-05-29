import React from "react";

const Banner = () => {
  return (
    <div className="text-center px-4 pt-12 pb-32 md:pb-56 bg-[#9538E2]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Upgrade Your Tech Accessories with <br className="hidden sm:block" />
        Gadget Heaven Accessories
      </h1>
      <p className="mb-8 text-white text-base sm:text-lg max-w-2xl mx-auto">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      {/* Centered Button */}
      <div className="flex justify-center">
        <button
          type="button"
          className="flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold border border-purple-200 hover:bg-purple-50 transition duration-300 shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h14l-1.35 6.45a2 2 0 01-1.96 1.55H8.91a2 2 0 01-1.98-1.7L5 6H3"
            />
          </svg>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
