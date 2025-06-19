import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategorySideBar from "../CategorySideBar/CategorySideBar";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const rawData = useLoaderData();
  const gadgets = Array.isArray(rawData) ? rawData : [];
  const [category, setCategory] = useState("All Product");

  // Filter list each render
  const visible =
    category === "All Product"
      ? gadgets
      : gadgets.filter((g) => g.category === category);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <Banner />

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-56 lg:pt-72 pb-16">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center mb-10">
          Explore Cutting‑Edge Gadgets
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* SIDEBAR — stacks on top for mobile */}
          <aside className="w-full md:w-1/4">
            <CategorySideBar selected={category} onSelect={setCategory} />
          </aside>

          {/* PRODUCT GRID */}
          <section className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((p) => (
                <ProductCard key={p.product_id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
