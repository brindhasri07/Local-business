function SearchHistory({ search }) {
  if (!search) return null;

  return (
    <div className="bg-yellow-100 p-4 rounded-xl mb-6">
      <h3 className="font-bold">
        🔍 Last Search
      </h3>

      <p>{search}</p>
    </div>
  );
}

export default SearchHistory;