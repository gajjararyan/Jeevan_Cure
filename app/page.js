import Healthcare from "@/components/Home/Healthcare";
import Mobile from "@/components/Home/Mobile";
import Services from "@/components/Home/Services";
import Hero from "@/components/Home/hero";
import Testimonial from "@/components/Home/Testimonial";
import Article from "@/components/Home/Article";

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
