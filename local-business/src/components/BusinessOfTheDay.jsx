import businesses from "../data/businesses";

function BusinessOfTheDay() {
  const business =
    businesses[
      new Date().getDate() %
        businesses.length
    ];

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg mb-8">

      <h2 className="text-2xl font-bold">
        🌟 Business of the Day
      </h2>

      <h3 className="text-xl mt-2">
        {business.name}
      </h3>

      <p>{business.category}</p>

      <p>⭐ {business.rating}</p>
    </div>
  );
}

export default BusinessOfTheDay;