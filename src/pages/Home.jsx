import ServiceSection from "../sections/ServiceSection";
import Hero from "../sections/hero/Hero";
import States from "../sections/States";
import WorkSection from "../sections/WorkSection";
import Areas from "./Areas";
import PriceSection from "../sections/PriceSection";
import Testimonials from "./Testinomials";

const Home = () => {
  return (
    <div>
      <Hero />
      <States />
      <ServiceSection />
      <WorkSection />
      <Areas />
      <PriceSection />
      <Testimonials />
    </div>
  );
};

export default Home;
