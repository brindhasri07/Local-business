import { useState } from "react";
import businesses from "../data/businesses";

function CompareBusinesses() {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(2);

  const business1 = businesses.find(
    (b) => b.id === Number(first)
  );

  const business2 = businesses.find(
    (b) => b.id === Number(second)
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">

      <h2 className="text-2xl font-bold mb-4">
        ⚖️ Compare Businesses
      </h2>

      <div className="flex gap-4 mb-6">
        <select
          value={first}
          onChange={(e) =>
            setFirst(e.target.value)
          }
          className="border p-2 rounded"
        >
          {businesses.map((business) => (
            <option
              key={business.id}
              value={business.id}
            >
              {business.name}
            </option>
          ))}
        </select>

        <select
          value={second}
          onChange={(e) =>
            setSecond(e.target.value)
          }
          className="border p-2 rounded"
        >
          {businesses.map((business) => (
            <option
              key={business.id}
              value={business.id}
            >
              {business.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-xl p-4">
          <h3 className="font-bold text-xl">
            {business1?.name}
          </h3>

          <p>⭐ {business1?.rating}</p>
          <p>📍 {business1?.location}</p>
          <p>🏷️ {business1?.category}</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-bold text-xl">
            {business2?.name}
          </h3>

          <p>⭐ {business2?.rating}</p>
          <p>📍 {business2?.location}</p>
          <p>🏷️ {business2?.category}</p>
        </div>

      </div>
    </div>
  );
}

export default CompareBusinesses;