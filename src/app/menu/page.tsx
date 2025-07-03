import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Menu from "@/components/Menu";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <>
      <section className="w-full">
      <div className="relative w-full">
        {/* Background strip */}
        <div className="flex w-full h-[20vh] sm:h-[24vh] md:h-[28vh] bg-[#1a3c34] bg-cover bg-center items-end justify-center pb-8 sm:pb-14 lg:pb-14">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Menu
          </p>
        </div>

        {/* Zigzag at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1] rotate-180" />
      </div>
    </section></>
      <Menu />
      <Footer />
      <BackToTop/>
    </>
  );
}
