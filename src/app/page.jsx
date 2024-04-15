import Button from "@/components/Button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-sm">
      <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
