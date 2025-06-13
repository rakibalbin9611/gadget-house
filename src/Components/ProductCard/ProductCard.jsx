import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;

  return (
    <div className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
      {/* Product image */}
      <img
        src={product_image}
        alt={product_title}
        className="w-full h-48 sm:h-56 md:h-64 object-contain bg-gray-50"
      />

      {/* Text content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-base sm:text-lg font-semibold line-clamp-2">
          {product_title}
        </h3>

        <span className="text-purple-600 text-lg sm:text-xl font-bold">
          ${price}
        </span>

        {/* Spacer pushes button to bottom on equal-height cards */}
        <div className="flex-1" />

        {/* View Detail button */}
        <Link
          to={`/product/${product_id}`}
          className="mt-2 inline-block text-center bg-purple-600 text-white font-medium px-4 py-2 rounded-full hover:bg-purple-700 transition"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
