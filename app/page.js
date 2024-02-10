import Healthcare from "@/components/Home/Healthcare";
import Mobile from "@/components/Home/Mobile";
import Services from "@/components/Home/Services";
import Hero from "@/components/Home/hero";
import Testimonial from "@/components/Home/Testimonial";
import Article from "@/components/Home/Article";
import Navbar from "@/components/Home/navbar";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <div className="px-32 min-h-screen">
        <Hero />
        <Services />
        <Healthcare />
        <Mobile />
        <Testimonial />
        <Article />
      </div>
      <Footer />
    </main>
  );
}
