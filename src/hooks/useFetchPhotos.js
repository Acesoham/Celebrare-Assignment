import { useEffect, useState } from "react";

const PHOTOS_API = "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos(retryKey) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPhotos() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(PHOTOS_API, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("The photo collection could not be reached.");
        }

        const photoList = await response.json();
        if (!Array.isArray(photoList)) {
          throw new Error("The photo collection returned an unexpected response.");
        }
        setPhotos(photoList);
      } catch (fetchError) {
        // Aborted requests are expected when the component unmounts or retries.
        if (fetchError.name !== "AbortError") {
          setError("We couldn’t gather the photos just now. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => controller.abort();
  }, [retryKey]);

  return { photos, loading, error };
}
