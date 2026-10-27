export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#8d8790]"
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
        onChange={onChange}
        placeholder="Search photographers by name..."
        className="w-full rounded-md border border-[#e4e0da] bg-white py-3.5 pl-12 pr-4 text-sm text-[#242127] outline-none transition placeholder:text-[#99939b] focus:border-[#6d3fa0] focus:ring-2 focus:ring-[#6d3fa0]/10"
      />
    </div>
  );
}
