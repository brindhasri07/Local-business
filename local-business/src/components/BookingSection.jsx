import { useState } from "react";

function BookingSection({ businessName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const bookNow = () => {
    if (!name || !date) {
      alert("Please fill all fields");
      return;
    }

    alert(
      `🎉 Booking Confirmed!\n\nBusiness: ${businessName}\nName: ${name}\nDate: ${date}`
    );

    setName("");
    setDate("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">
        📅 Book Appointment
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="border p-3 rounded-lg w-full mb-3"
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
        className="border p-3 rounded-lg w-full mb-3"
      />

      <button
        onClick={bookNow}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingSection;