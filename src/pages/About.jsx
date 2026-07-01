import { Link } from "react-router-dom";
import AboutHero from "../sections/hero/AboutHero";

const values = [
  {
    title: "Care & Precision",
    description:
      "We handle your belongings with the utmost care. Professional packing and careful handling are our standard.",
  },
  {
    title: "Punctuality",
    description:
      "99% on-time delivery rate. We respect your schedule and keep our promises.",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees or surprises. Our quotes are detailed, accurate, and honored.",
  },
];

const team = [
  {
    name: "Mike Thompson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Jennifer Walsh",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Kevin Lee",
    role: "Fleet Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Rachel Cooper",
    role: "Customer Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
];

function ShieldIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

const About = () => {
  return (
    <div className="animate-fade-in-up">
      <AboutHero />
      {/* ── Mission ── */}
      <section className="animate-fade-in-up py-20 lg:py-28 dark:bg-gray-950/100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Moving Made Simple
              </h2>
              <p className="mt-4 text-lg font-medium italic text-blue-600 dark:text-blue-400">
                "To take the stress out of moving by providing reliable,
                professional, and caring relocation services — treating every
                belonging as if it were our own."
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                SwiftMove started with a single truck and a commitment to do
                moving differently. Since 2009, we've completed over 10,000
                successful relocations, growing into one of the most trusted
                moving companies in the region.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                What sets us apart is our people. Every mover on our team is
                trained, background-checked, and genuinely cares about making
                your move smooth. We know moving is a big life event, and we
                treat it that way.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&h=600&fit=crop"
                alt="About SwiftMove"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ── Values ── */}
      <section className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="animate-fade-in-up mt-16 grid gap-8 sm:grid-cols-3">
            {values.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <ShieldIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Team ── */}
      <section className="animate-fade-in-up py-20 lg:py-28 dark:bg-gray-950/100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              The people behind our success.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, image }) => (
              <div key={name} className="text-center">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA ── */}
      <section className="animate-fade-in-up bg-blue-600 py-16 lg:py-24 dark:bg-blue-900">
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

export default About;
