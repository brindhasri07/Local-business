import { Moon, Sun } from "lucide-react";

function Navbar({
  favoriteCount,
  darkMode,
  setDarkMode,
}) {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Local Business Discovery
        </h1>

        <div className="flex items-center gap-4">

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="bg-white text-indigo-600 p-2 rounded-full"
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold">
            ❤️ {favoriteCount}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;