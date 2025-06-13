import { NavLink } from "react-router-dom";

const categories = [
  { label: "All Product", slug: "all" },
  { label: "Laptops", slug: "laptops" },
  { label: "Phones", slug: "phones" },
  { label: "Accessories", slug: "accessories" },
  { label: "Smart Watches", slug: "smart-watches" },
  { label: "MacBook", slug: "macbook" },
  { label: "Iphone", slug: "iphone" },
];

const CategorySideBar = () => (
  <div className="bg-white p-4 rounded-xl shadow-md space-y-3">
    {categories.map(({ label, slug }) => (
      <NavLink
        key={slug}
        to={`/gadgets/${slug}`}
        className={({ isActive }) =>
          [
            "block w-full text-left px-4 py-2 rounded-full font-medium transition",
            isActive
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200",
          ].join(" ")
        }
      >
        {label}
      </NavLink>
    ))}
  </div>
);

export default CategorySideBar;
