import { FaTrash, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PageHeader from "../Component/PageHeader";
import { useStore } from "../Context/StoreContext";

const AddFavCart = () => {
  const { favorites, removeFromFavorites } = useStore();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-₹{i}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-₹{i}`} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div>
      <PageHeader title="Favorite Cart" curPage="AddFavorite" />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {favorites.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">
            No favorite items added yet.
          </p>
        ) : (
          favorites.map((item) => (
            <div
              key={item.id}
              className="relative bg-white overflow-hidden shadow hover:shadow-md transition-all"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-contain p-2 bg-gray-50"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <div className="flex items-center mb-2 text-sm">
                  {renderStars(item.rating || 4)}
                </div>
                <p className="font-bold text-lg">₹{item.price}</p>
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="absolute top-5 right-10 text-red-500 hover:text-red-700 mt-2"
                  title="Remove from favorites"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="absolute inset-0 bg-white/80 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex items-center justify-center gap-3">
            <Link
              to={`/shop/₹{product.id}`}
              className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500"
            >
              <FaRegEye />
            </Link>
            <Link
              onClick={() => addToFavorites(product)}
              className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500"
            >
              <FaHeart />
            </Link>
            <Link
              to={"/cart-page"}
              className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500"
            >
              <FaShoppingCart />
            </Link>
          </div>
    </div>
  );
};

export default AddFavCart;
