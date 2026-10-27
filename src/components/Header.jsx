export default function Header() {
  return (
    <header className="border-b border-[#e8e5df] bg-[#faf9f6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-[18px] sm:px-8 lg:px-12">
        <a href="#top" className="text-[11px] font-semibold tracking-[0.18em] text-[#242127] sm:text-xs">
          FRAME <span className="px-1 text-[#b5afa7]">/</span> GALLERY
        </a>
        <p className="text-xs tracking-[0.02em] text-[#77727b] sm:text-sm">A collection of moments</p>
      </div>
    </header>
  );
}
