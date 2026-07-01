import Faq from "../sections/Faq";
import PricingHero from "../sections/hero/PricingHero";
import PriceSection from "../sections/PriceSection";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      <PriceSection />
      <Faq />
      <section className="bg-blue-600 py-16 lg:py-24 dark:bg-blue-900">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Make Your Move?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
            Get your free, no-obligation quote today or call us to speak with a
            moving specialist.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/#quote"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-medium text-blue-600 shadow-lg transition-colors hover:bg-gray-100"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:5558901234"
            className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            Call (555) 890-1234
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
