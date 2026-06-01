import SearchHistory from "../components/SearchHistory";
import SearchSuggestions from "../components/SearchSuggestions";
import UserProfile from "../components/UserProfile";
import EventsSection from "../components/EventsSection";
import NearbyFinder from "../components/NearbyFinder";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import OffersSection from "../components/OffersSection";
import BusinessOfTheDay from "../components/BusinessOfTheDay";
import Leaderboard from "../components/Leaderboard";
import CompareBusinesses from "../components/CompareBusinesses";
import Recommendation from "../components/Recommendation";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import BusinessCard from "../components/BusinessCard";
import businesses from "../data/businesses";

function Home({ favorites, setFavorites }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(
        favorites.filter((item) => item !== id)
      );
    } else {
      setFavorites([...favorites, id,]);
    }
  };

  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (selected === "All" ||
        business.category === selected)
  );

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-white mb-8 shadow-xl">
        <h1 className="text-5xl font-bold">
          Discover Local Businesses
        </h1>

        <p className="mt-3 text-lg">
          Find the best cafes, gyms,
          restaurants and services near you.
        </p>
      </div>
  <Recommendation />
  <CompareBusinesses />
  <Leaderboard />
  <BusinessOfTheDay />
  <OffersSection />
  <AnalyticsDashboard />
  <NearbyFinder />
  <EventsSection />
  <UserProfile />
      {/* Search */}
      <SearchHistory search={search} />
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <SearchSuggestions
  search={search}
  businesses={businesses}
  setSearch={setSearch}
/>

      {/* Categories */}
      <div className="my-6">
        <CategoryFilter
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBusinesses.map((business) => (
          <BusinessCard
            key={business.id}
            business={business}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;