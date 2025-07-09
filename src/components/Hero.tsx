

export default function HeroSection() {
  return (
    <section className="w-full relative">
  {/* Desktop Banner (lg and up) */}
  <div className="hidden lg:block w-full h-[110vh] bg-[url('/banner1.png')] bg-cover bg-center relative">
    {/* Zigzag at bottom of desktop banner */}
    <div className="absolute bottom-[-1px] left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1] rotate-180" />
  </div>

  {/* Mobile Banner (below lg) */}
  <div className="block  lg:hidden w-full h-[60vh] bg-[url('/banner2.jpeg')] bg-cover bg-center relative">
    {/* Zigzag at bottom of mobile banner */}
    <div className="absolute   bottom-[-1px] left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1] rotate-180" />
  </div>
</section>
  );
}
