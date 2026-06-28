import ServiceSection from "../sections/ServiceSection";
import Hero from "../sections/hero/Hero";
import States from "../sections/States";
import WorkSection from "../sections/WorkSection";
import Areas from "./Areas";
import PriceSection from "../sections/PriceSection";
import Testimonials from "./Testinomials";
import Quote from "./Quote";
import Faq from "../sections/Faq";
import CTASection from "../sections/CTASection";
import Footer from "../components/Footer";

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
      <Quote />
      <Faq />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
