import ServiceSection from "../sections/ServiceSection";
import Hero from "../sections/hero/Hero";
import States from "../sections/States";
import WorkSection from "../sections/WorkSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <States />
      <ServiceSection />
      <WorkSection />
    </div>
  );
};

export default Home;
