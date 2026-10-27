import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import ErrorState from "./components/ErrorState.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import PhotoGrid from "./components/PhotoGrid.jsx";
import SearchBar from "./components/SearchBar.jsx";
import useFetchPhotos from "./hooks/useFetchPhotos.js";
import { favouritesReducer, loadSavedFavourites } from "./reducers/favouritesReducer.js";

function initializeFavourites() {
  return favouritesReducer([], {
    type: "INITIALIZE_FAVOURITES",
    payload: loadSavedFavourites(),
  });
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [retryKey, setRetryKey] = useState(0);
  const [favourites, dispatch] = useReducer(favouritesReducer, undefined, initializeFavourites);
  const { photos, loading, error } = useFetchPhotos(retryKey);

  useEffect(() => {
    try {
      localStorage.setItem("frame-favourites", JSON.stringify(favourites));
    } catch {
      // The gallery still works if browser storage is unavailable.
    }
  }, [favourites]);

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const filteredPhotos = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return photos;

    return photos.filter((photo) =>
      String(photo.author ?? "").toLowerCase().includes(normalizedQuery),
    );
  }, [photos, searchQuery]);

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: "TOGGLE_FAVOURITE", photoId });
  }, []);

  const handleRetry = useCallback(() => {
    setRetryKey((currentKey) => currentKey + 1);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#faf9f6]">
      <Header />
      <main>
        <Hero />
        <section className="mx-auto max-w-7xl px-5 pb-4 sm:px-8 lg:px-12" aria-label="Photo collection">
          <SearchBar value={searchQuery} onSearchChange={handleSearchChange} />
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-2 pt-5 sm:px-8 lg:px-12" aria-live="polite">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorState onRetry={handleRetry} />
          ) : filteredPhotos.length > 0 ? (
            <PhotoGrid
              photos={filteredPhotos}
              favourites={favourites}
              onToggleFavourite={handleToggleFavourite}
            />
          ) : (
            <p className="py-20 text-center text-sm text-[#77727b]">No photographers found.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
