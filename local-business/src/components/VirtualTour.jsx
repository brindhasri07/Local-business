function VirtualTour({ gallery }) {
  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-4">
        🌍 Virtual Tour
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Business Tour"
            className="rounded-2xl h-60 w-full object-cover hover:scale-105 transition duration-300"
          />
        ))}

      </div>

    </div>
  );
}

export default VirtualTour;