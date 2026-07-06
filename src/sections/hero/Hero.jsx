import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const animatedWords = ["Fast & Reliable", "Safe & Secure", "Smooth & Easy"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "25,000+", label: "Moves Completed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "15+", label: "Years Experience" },
    { value: "Same-Day", label: "Available" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background decorative blobs */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="animate-hero-float absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/30" />
        <div className="animate-hero-float-reverse absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent-200/30 blur-3xl dark:bg-accent-900/20" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Licensed & Insured in All 50 States
            </div>

            <h1 className="min-h-[112px] text-4xl font-bold font-stretch-200% tracking-tight text-gray-900 sm:min-h-[140px] sm:text-5xl lg:min-h-[145px] lg:text-6xl dark:text-white">
              Moving Made
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-[#F97316] bg-clip-text text-transparent">
                {animatedWords[currentIndex]}
              </span>
            </h1>

            <p className=" max-w-xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
              From local moves to cross-country relocations, our professional
              team handles every detail so you can focus on settling into your
              new home.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30"
              >
                Get Free Quote
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                <svg
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call (555) 890-1234
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
              <img
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&h=600&fit=crop&q=80"
                alt="Professional moving services"
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800 sm:-bottom-6 sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <svg
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Fully Insured
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    All belongings protected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
