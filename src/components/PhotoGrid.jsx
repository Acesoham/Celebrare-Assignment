import PhotoCard from "./PhotoCard.jsx";

export default function PhotoGrid({ photos, favourites, onToggleFavourite }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-7">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}
