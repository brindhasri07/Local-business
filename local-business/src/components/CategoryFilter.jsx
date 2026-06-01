const categories = [
  "All",
  "Cafe",
  "Gym",
  "Restaurant",
];

function CategoryFilter({
  selected,
  setSelected,
}) {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() =>
            setSelected(cat)
          }
          className={`px-4 py-2 rounded-lg ${
            selected === cat
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;