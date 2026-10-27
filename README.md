# Frame / Gallery

A responsive photo gallery built with React, Vite, and Tailwind CSS for the Celebrare frontend assignment. It loads 30 photos from Picsum, filters them by photographer name, and saves favourite photo IDs in localStorage.

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

## Key files

- `src/hooks/useFetchPhotos.js` fetches the collection, handles loading and errors, and aborts requests on cleanup. Incrementing the retry key starts a fresh request.
- `src/reducers/favouritesReducer.js` initializes the saved IDs and immutably toggles favourites.
- `src/App.jsx` connects the hook and reducer, persists favourites, and memoizes the author search results.
- `src/components/` contains the small header, search, gallery, card, and loading/error UI pieces.

The gallery requires an internet connection to load images from Picsum Photos.
