import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Offer from "@/app/components/Offer";
import OurWorks from "@/app/components/OurWorks";
import Footer from "@/app/components/Footer";
import "../18n"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-[1000px] bg-[#000] pt-10 max-[1040px]:h-[800px]">
          <Navbar />
          <Hero />
      </div>
        <section id="obout"><About /></section>
        <section id="offer"><Offer /></section>
        <section id="ourworks"><OurWorks /></section>
        <Footer />
    </main>
  );
}
