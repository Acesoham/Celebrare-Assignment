export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#e9e6e1] bg-white shadow-[0_3px_12px_rgba(36,33,39,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(36,33,39,0.11)]">
      <div className="aspect-[4/3] overflow-hidden bg-[#eeece8]">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/450`}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />
      </div>
      <div className="flex min-h-[68px] items-center justify-between gap-3 px-4 py-3 sm:px-[18px]">
        <p className="truncate text-sm font-medium tracking-[0.005em] text-[#39353d]">{photo.author}</p>
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? `Remove ${photo.author} from favourites` : `Add ${photo.author} to favourites`}
          aria-pressed={isFavourite}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ease-out active:scale-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d3fa0] ${
            isFavourite
              ? "scale-110 text-[#e5484d] hover:bg-[#fff0f0] hover:text-[#d7373c]"
              : "text-[#77727b] hover:bg-[#f5f1f8] hover:text-[#6d3fa0]"
          }`}
        >
          <svg
            aria-hidden="true"
            className="h-[19px] w-[19px] transition-colors duration-200"
            viewBox="0 0 24 24"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path
              d="M20.8 8.6c0 4.1-8.8 10.1-8.8 10.1S3.2 12.7 3.2 8.6a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
