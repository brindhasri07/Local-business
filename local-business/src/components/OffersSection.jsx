import businesses from "../data/businesses";

function OffersSection() {
  const claimOffer = (businessName) => {
    alert(
      `🎉 Offer claimed successfully from ${businessName}!`
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">
        🎟️ Today's Offers
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="border rounded-xl p-4"
          >
            <h3 className="font-bold">
              {business.name}
            </h3>

            <p className="text-green-600">
              {business.offer}
            </p>

            <button
              onClick={() =>
                claimOffer(business.name)
              }
              className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Claim Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersSection;