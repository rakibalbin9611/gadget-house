import React from "react";
import bannerPic from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative text-center px-2 sm:px-4 pt-12 pb-56 sm:pb-64 lg:pb-80 bg-[#9538E2] rounded-b-2xl overflow-visible">
      {/* ---------- Headline ---------- */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Upgrade Your Tech Accessorize with <br className="hidden sm:block" />
        Gadget Heaven Accessories
      </h1>

      {/* ---------- Sub‑text ---------- */}
      <p className="mb-8 text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      {/* ---------- CTA Button ---------- */}
      <div className="flex justify-center">
        <button
          type="button"
          className="flex items-center gap-2 bg-white text-purple-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold border border-purple-200 hover:bg-purple-50 transition shadow-lg"
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

      {/* ---------- Floating Image (responsive) ---------- */}
      <div className="absolute -bottom-36 sm:-bottom-44 md:-bottom-56 lg:-bottom-64 left-1/2 -translate-x-1/2 z-10 w-full px-2 sm:px-4 max-w-3xl sm:max-w-4xl lg:max-w-5xl">
        <div className="rounded-3xl border-4 border-white bg-white/15 p-2 shadow-2xl">
          <img
            src={bannerPic}
            alt="Tech Banner"
            className="rounded-2xl object-cover w-full h-60 sm:h-72 md:h-96 lg:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
