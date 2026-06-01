import events from "../data/events";

function EventsSection() {
  const registerEvent = (title) => {
    alert(
      `🎉 Successfully registered for ${title}`
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">

      <h2 className="text-2xl font-bold mb-4">
        📅 Upcoming Events
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-xl p-4"
          >
            <h3 className="font-bold">
              {event.title}
            </h3>

            <p>📍 {event.business}</p>

            <p>🕒 {event.date}</p>

            <button
              onClick={() =>
                registerEvent(
                  event.title
                )
              }
              className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Register
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default EventsSection;