export default function Header() {
  return (
    <header className="border-b border-[#e8e5df]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="text-sm font-semibold tracking-[0.14em] text-[#242127]">
          FRAME <span className="px-1 text-[#b5afa7]">/</span> GALLERY
        </a>
        <p className="hidden text-sm text-[#77727b] sm:block">A collection of moments</p>
      </div>
    </header>
  );
}
