import { useState } from "react";

function NearbyFinder() {
  const [location, setLocation] =
    useState("");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          `Latitude: ${position.coords.latitude.toFixed(
            4
          )},
           Longitude: ${position.coords.longitude.toFixed(
             4
           )}`
        );
      }
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">
        📍 Nearby Business Finder
      </h2>

      <button
        onClick={getLocation}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Find My Location
      </button>

      {location && (
        <p className="mt-4">
          {location}
        </p>
      )}
    </div>
  );
}

export default NearbyFinder;