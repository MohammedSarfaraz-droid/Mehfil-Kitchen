export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        {/* Background strip */}
        <div className="flex w-full h-[20vh] sm:h-[24vh] md:h-[28vh] bg-[#1a3c34] bg-cover bg-center items-end justify-center pb-8 sm:pb-14 lg:pb-14">
          <p className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            About Us
          </p>
        </div>

        {/* Zigzag at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1] rotate-180" />
      </div>
    </section>
  );
}
