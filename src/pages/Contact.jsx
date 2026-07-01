import ContactHero from "../sections/hero/ContactHero";
import ContactSection from "../sections/ContactSection";
import Map from "../sections/Map";

const Contact = () => {
  return (
    <div className="animate-fade-in-up">
      <ContactHero />
      <ContactSection />
      <Map />
    </div>
  );
};

export default Contact;
