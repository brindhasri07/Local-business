import { Link } from "react-router-dom";

function BusinessCard({
  business,
  favorites = [],
  toggleFavorite,
}) {
  const isFavorite = favorites.includes(
    business.id
  );

  const currentHour =
    new Date().getHours();

  const isOpen =
    currentHour >= business.openingHour &&
    currentHour < business.closingHour;

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Favorite Button */}
      <button
  onClick={() => {
    alert("Button clicked");
  }}
  className="absolute top-3 right-3 z-20 text-3xl"
>
  🤍
</button>

      <Link to={`/business/${business.id}`}>
        <img
          src={business.image}
          alt={business.name}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">

          <div className="flex justify-between items-center mb-2">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
              🔥 Trending
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-800">
            {business.name}
          </h2>

          <p className="text-gray-600 mt-1">
            {business.category}
          </p>

          <p className="text-gray-500">
            📍 {business.location}
          </p>

          <p
            className={`font-semibold mt-2 ${
              isOpen
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {isOpen
              ? "🟢 Open Now"
              : "🔴 Closed"}
          </p>

          <p className="text-yellow-500 font-semibold mt-2">
            ⭐ {business.rating}
          </p>

        </div>
      </Link>

    </div>
  );
}

export default BusinessCard;