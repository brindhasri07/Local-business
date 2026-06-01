function SearchSuggestions({
  search,
  businesses,
  setSearch,
}) {
  if (!search) return null;

  const suggestions = businesses.filter(
    (business) =>
      business.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg mt-2 mb-4">

      {suggestions.map((business) => (
        <div
          key={business.id}
          onClick={() =>
            setSearch(business.name)
          }
          className="p-3 border-b cursor-pointer hover:bg-gray-100"
        >
          {business.name}
        </div>
      ))}

    </div>
  );
}

export default SearchSuggestions;