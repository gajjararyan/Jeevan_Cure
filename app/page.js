import Healthcare from "@/components/Healthcare";
import Mobile from "@/components/Mobile";
import Services from "@/components/Services";
import Hero from "@/components/hero";
import Testimonial from "@/components/Testimonial";
import Article from "@/components/Article";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen px-32">
      <Hero/>
      <Services/>
      <Healthcare/>
      <Mobile/>
      <Testimonial/>
      <Article/>
    </main>
  );
}
