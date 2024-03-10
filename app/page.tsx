import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Offer from "@/app/components/Offer";
import OurWorks from "@/app/components/OurWorks";
import Footer from "@/app/components/Footer";
// import i18n from "./i18n/index";
// import {I18nextProvider} from "react-i18next";

export default function Home() {
  return (
      // <I18nextProvider i18n={i18n}>
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
      // </I18nextProvider>
  );
}
