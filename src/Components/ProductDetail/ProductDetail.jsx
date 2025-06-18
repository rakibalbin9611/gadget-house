import { useLoaderData, Link } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaHeart } from "react-icons/fa";
import { addToStoredCartList, addToStoredWishList } from "../Utility/AddToDB";

const ProductDetail = () => {
  const p = useLoaderData();
  // console.log(p);
  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };

  const handleAddToWish = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link
        to={-1}
        className="inline-flex items-center gap-1 text-purple-600 hover:underline mb-6"
      >
        <FaArrowLeft /> Back
      </Link>

      <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-xl shadow p-6">
        {/* Image */}
        <img
          src={p.product_image}
          alt={p.product_title}
          className="w-full lg:w-1/2 object-contain rounded-lg bg-gray-50"
        />

        {/* Details */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">{p.product_title}</h2>
          <p className="text-purple-600 text-xl font-semibold">${p.price}</p>

          <p className="text-gray-700">{p.description}</p>

          {/* Specs */}
          <ul className="list-disc list-inside text-sm text-gray-600">
            {p.specification.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <p>
            Availability:{" "}
            <span
              className={
                p.availability ? "text-green-600 font-medium" : "text-red-500"
              }
            >
              {p.availability ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          <p>Rating: ⭐ {p.rating}</p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => handleAddToCart(p.product_id)}
              className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
              title="Add to Cart"
            >
              <FaShoppingCart size={20} />
            </button>
            <button
              onClick={() => handleAddToWish(p.product_id)}
              className="p-3 rounded-full bg-gray-200 text-red-500 hover:bg-red-100 transition"
              title="Add to Wishlist"
            >
              <FaHeart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
