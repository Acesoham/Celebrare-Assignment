export function favouritesReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_FAVOURITES":
      return action.payload;
    case "TOGGLE_FAVOURITE":
      return state.includes(action.photoId)
        ? state.filter((photoId) => photoId !== action.photoId)
        : [...state, action.photoId];
    default:
      return state;
  }
}

export function loadSavedFavourites() {
  try {
    const savedFavourites = JSON.parse(localStorage.getItem("frame-favourites"));
    if (!Array.isArray(savedFavourites)) return [];

    // Picsum IDs are strings; discard malformed entries before using them.
    return savedFavourites.filter((photoId) => typeof photoId === "string");
  } catch {
    return [];
  }
}
