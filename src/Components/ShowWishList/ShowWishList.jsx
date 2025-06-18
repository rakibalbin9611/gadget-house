import { FaDollarSign, FaStar, FaTimes } from "react-icons/fa";

const ShowWishList = ({ cart, handleRemoveWishItem }) => {
  const { product_id, product_title, category, product_image, rating, price } =
    cart;

  const handleRemove = () => {
    handleRemoveWishItem(product_id);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 my-6 rounded-xl border p-4 shadow-md bg-white max-w-4xl mx-auto">
      {/* Product image */}
      <div className="w-full md:w-32 shrink-0 flex justify-center items-center">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-md shadow-md p-4 w-32 md:w-full h-auto object-contain bg-gray-50"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between w-full text-center md:text-left">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {product_title}
          </h2>
          <p className="text-sm md:text-base text-gray-600">{category}</p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 text-sm mt-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
              <FaStar className="text-yellow-500" /> {rating}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full">
              <FaDollarSign /> {price}
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-center md:justify-end">
          <button
            onClick={handleRemove}
            className="text-red-600 text-xl hover:text-red-800 transition"
            title="Remove from wishlist"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowWishList;
