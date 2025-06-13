const categories = [
  "All Product",
  "Laptops",
  "Smartphones",
  "Accessories",
  "Smartwatches",
  "MacBook",
  "Earbuds",
];

const CategorySideBar = ({ selected, onSelect }) => (
  <div className="bg-white p-4 rounded-xl shadow-md space-y-3">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelect(cat)}
        className={`w-full text-left px-4 py-2 rounded-full font-medium transition
            ${
              selected === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategorySideBar;
