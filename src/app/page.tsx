import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import { Footer } from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Menu />
      <Testimonials />
      <Footer />
    </>
  );
}
