import businesses from "../data/businesses";

function Leaderboard() {
  const topBusinesses = [...businesses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">

      <h2 className="text-2xl font-bold mb-4">
        🏆 Top Rated Businesses
      </h2>

      {topBusinesses.map((business, index) => (
        <div
          key={business.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h3 className="font-semibold">
              #{index + 1} {business.name}
            </h3>

            <p className="text-gray-500">
              {business.category}
            </p>
          </div>

          <div className="text-yellow-500 font-bold">
            ⭐ {business.rating}
          </div>
        </div>
      ))}

    </div>
  );
}

export default Leaderboard;