function Recommendation() {
  const hour = new Date().getHours();

  let suggestion = "Coffee House ☕";

  if (hour >= 12 && hour <= 15) {
    suggestion = "Spice Restaurant 🍕";
  }

  if (hour >= 17) {
    suggestion = "Fitness Pro 🏋️";
  }

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl mb-8">
      <h2 className="text-2xl font-bold">
        🤖 AI Recommendation
      </h2>

      <p className="mt-2">
        Recommended for you:
        <span className="font-bold">
          {" "}
          {suggestion}
        </span>
      </p>
    </div>
  );
}

export default Recommendation;