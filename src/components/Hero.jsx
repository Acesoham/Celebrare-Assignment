export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-9 pt-14 sm:px-8 sm:pb-11 sm:pt-[4.5rem] lg:px-12 lg:pt-20">
      <p className="mb-5 flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.22em] text-[#6d3fa0] sm:text-[11px]">
        <span aria-hidden="true" className="h-px w-7 bg-[#6d3fa0]" />
        THE PHOTO COLLECTION
      </p>
      <h1 className="max-w-4xl text-[clamp(2.7rem,5.5vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.055em] text-[#242127]">
        A little world of{" "}
        <span className="font-serif font-normal italic tracking-[-0.06em] text-[#6d3fa0]">
          beautiful moments.
        </span>
      </h1>
      <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#77727b] sm:mt-6 sm:text-base sm:leading-7">
        Explore photographs from around the world and keep the moments you love close.
      </p>
    </section>
  );
}
