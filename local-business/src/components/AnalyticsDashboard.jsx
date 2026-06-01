import businesses from "../data/businesses";

function AnalyticsDashboard() {
  const totalBusinesses =
    businesses.length;

  const topBusiness =
    [...businesses].sort(
      (a, b) => b.rating - a.rating
    )[0];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">

      <h2 className="text-2xl font-bold mb-4">
        📊 Platform Analytics
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-indigo-100 p-4 rounded-xl">
          <h3 className="font-bold">
            Businesses
          </h3>
          <p className="text-3xl">
            {totalBusinesses}
          </p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl">
          <h3 className="font-bold">
            Top Rated
          </h3>
          <p>
            {topBusiness.name}
          </p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          <h3 className="font-bold">
            Best Rating
          </h3>
          <p>
            ⭐ {topBusiness.rating}
          </p>
        </div>

      </div>

    </div>
  );
}

export default AnalyticsDashboard;