import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import businesses from "../data/businesses";
import ReviewSection from "../components/ReviewSection";
import VirtualTour from "../components/VirtualTour";

function BusinessDetails() {
  const { id } = useParams();

  // Scroll to top whenever business changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const business = businesses.find(
    (item) => item.id === Number(id)
  );

  const [visits, setVisits] = useState(0);

  useEffect(() => {
    if (business) {
      const currentVisits =
        Number(
          localStorage.getItem(
            `visit-${business.id}`
          )
        ) || 0;

      const updatedVisits =
        currentVisits + 1;

      localStorage.setItem(
        `visit-${business.id}`,
        updatedVisits
      );

      setVisits(updatedVisits);
    }
  }, [business]);

  if (!business) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Business Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 font-semibold hover:underline"
      >
        ← Back
      </Link>

      {/* Business Image */}
      <img
        src={business.image}
        alt={business.name}
        className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
      />

      {/* Business Details */}
      <div className="bg-white p-8 rounded-3xl shadow-lg mt-6">

        <h1 className="text-4xl font-bold">
          {business.name}
        </h1>

        <p className="text-gray-600 mt-3">
          Category: {business.category}
        </p>

        <p className="text-gray-600 mt-2">
          📍 {business.location}
        </p>

        <p className="text-yellow-500 text-xl mt-2">
          ⭐ {business.rating}
        </p>

        <p className="mt-4 text-lg font-semibold text-blue-600">
          👀 Visits: {visits}
        </p>

        {/* Google Maps */}
        <a
          href={business.mapLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          View on Google Maps 📍
        </a>

        {/* About */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-3">
            About
          </h2>

          <p className="text-gray-700">
            {business.description}
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <ReviewSection
            businessId={business.id}
          />
        </div>

        {/* Virtual Tour */}
        <div className="mt-8">
          <VirtualTour
            gallery={business.gallery}
          />
        </div>

      </div>

    </div>
  );
}

export default BusinessDetails;