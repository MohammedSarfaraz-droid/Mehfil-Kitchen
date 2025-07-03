import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Gallery from "@/components/Gallery";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <section className="w-full">
      <div className="relative w-full">
        {/* Background strip */}
        <div className="flex w-full h-[20vh] sm:h-[24vh] md:h-[28vh] bg-[#1a3c34] bg-cover bg-center items-end justify-center pb-8 sm:pb-14 lg:pb-14">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Gallery
          </p>
        </div>

        {/* Zigzag at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1] rotate-180" />
      </div>
    </section>
    <Gallery/>
      <Footer />
      <BackToTop/>
    </>
  );
}
