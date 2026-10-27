export default function ErrorState({ onRetry }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center text-center" role="alert">
      <p className="text-base font-medium text-[#39353d]">We couldn’t gather the photos just now.</p>
      <p className="mt-2 text-sm text-[#77727b]">Please check your connection and try again.</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-5 rounded-md bg-[#6d3fa0] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#593183] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d3fa0]"
      >
        Retry
      </button>
    </div>
  );
}
