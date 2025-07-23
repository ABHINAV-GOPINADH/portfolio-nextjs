import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

console.log({ Hero, Services, About, Work, Contact });

export default async function Home() {  
  return (
    <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
      <Navbar/>
      <Hero />
      <Services/>
      <About />
      <Work />
      <Contact />
    </main>
  );
}
