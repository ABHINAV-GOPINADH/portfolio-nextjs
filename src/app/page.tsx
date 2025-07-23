import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

console.log({ Hero, Services, About, Work, Contact });

export default async function Home() {  
  return (
    <main className="w-full m-0 p-0 overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Services/>
      <About />
      <Work />
      <Contact />
    </main>
  );
}
