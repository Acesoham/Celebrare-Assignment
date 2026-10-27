export default function SearchBar({ value, onSearchChange }) {
  return (
    <div className="relative w-full max-w-md">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[18px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#827b86]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
        <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <label className="sr-only" htmlFor="photographer-search">
        Search photographers by name
      </label>
      <input
        id="photographer-search"
        type="search"
        value={value}
        onChange={(event) => onSearchChange(event.currentTarget.value)}
        placeholder="Search photographers by name..."
        className="w-full rounded-lg border border-[#e5e1db] bg-white py-4 pl-[50px] pr-4 text-sm text-[#242127] shadow-[0_3px_14px_rgba(36,33,39,0.035)] outline-none transition duration-200 placeholder:text-[#99939b] hover:border-[#d1c9d8] focus:border-[#6d3fa0] focus:ring-4 focus:ring-[#6d3fa0]/[0.08]"
      />
    </div>
  );
}
