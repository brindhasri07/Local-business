import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState(
    localStorage.getItem("userName") || ""
  );

  const saveProfile = () => {
    localStorage.setItem(
      "userName",
      name
    );

    alert("✅ Profile Saved");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">

      <h2 className="text-2xl font-bold mb-4">
        👤 User Profile
      </h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="border p-3 rounded-lg w-full"
      />

      <button
        onClick={saveProfile}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Save Profile
      </button>

      {name && (
        <p className="mt-4 font-semibold">
          Welcome, {name} 👋
        </p>
      )}

    </div>
  );
}

export default UserProfile;