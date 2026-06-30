import ServiceHero from "../sections/hero/ServiceHero";
import { Link } from "react-router-dom";
import {
  Truck,
  Globe2,
  PackageCheck,
  Warehouse,
  Building2,
  Sparkles,
  Check,
} from "lucide-react";
import WorkSection from "../sections/WorkSection";

const services = [
  {
    icon: Truck,
    title: "Local Moving",
    description:
      "Fast, reliable local moves with careful handling of all your belongings.",
    features: [
      "Same-day availability",
      "Furniture disassembly",
      "Floor protection",
    ],
    href: "/services/local-moving",
  },
  {
    icon: Globe2,
    title: "Long Distance",
    description:
      "Coast-to-coast moving services with GPS tracking and guaranteed delivery dates.",
    features: [
      "Nationwide coverage",
      "GPS shipment tracking",
      "Guaranteed delivery dates",
    ],
    href: "/services/long-distance",
  },
  {
    icon: PackageCheck,
    title: "Packing & Unpacking",
    description:
      "Professional packing services using premium materials to protect your valuables.",
    features: [
      "Premium packing materials",
      "Fragile item specialists",
      "Unpacking & setup",
    ],
    href: "/services/packing-unpacking",
  },
  {
    icon: Warehouse,
    title: "Storage Solutions",
    description:
      "Secure, climate-controlled storage facilities for short-term or long-term needs.",
    features: [
      "Climate-controlled units",
      "Flexible lease terms",
      "24/7 security monitoring",
    ],
    href: "/services/storage-solutions",
  },
  {
    icon: Building2,
    title: "Commercial Moving",
    description:
      "Minimize downtime with our efficient office and commercial relocation services.",
    features: [
      "Weekend & after-hours moves",
      "IT equipment handling",
      "Workstation setup",
    ],
    href: "/services/commercial-moving",
  },
  {
    icon: Sparkles,
    title: "Specialty Items",
    description:
      "Expert handling of pianos, artwork, antiques, and other high-value items.",
    features: [
      "Custom crating",
      "White-glove service",
      "Full valuation coverage",
    ],
    href: "/services/specialty-items",
  },
];

const Service = () => {
  return (
    <div>
      <ServiceHero />
      <section className="py-20 lg:py-28 dark:bg-gray-950/100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Moving Solution for Every Need
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              " Whatever you are moving across town or across the country, we
              have the expertise to get you there. "
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(
              ({ icon: Icon, title, description, features, href }) => (
                <Link
                  key={title}
                  to={href}
                  className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <Check className="h-4 w-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
      <WorkSection />
      <section className="bg-blue-600 py-16 lg:py-24 dark:bg-blue-900">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Planning a move? Get a free, no-obligation estimate today.
          </p>
          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-600 shadow-lg transition-all hover:bg-gray-100"
          >
            Get Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service;
