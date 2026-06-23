import { Link } from "react-router-dom";
import delivery from "../../assets/images/delivery.jpg";
import { useEffect, useState } from "react";
const Hero = () => {
  const AnimatedWords = [
    "Simple & Stress Free",
    "Fast and Reliable",
    "Safe & Secure",
    "Smooth & Easy",
  ];
  const [currentindex, setCurrentindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentindex((prev) => (prev + 1) % AnimatedWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section class="relative overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background   */}

      <div class="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side Content */}
          <div>
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Licensed & Insured in All 50 States
            </div>

            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Moving Made
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-amber-700 bg-clip-text text-transparent">
                {AnimatedWords[currentindex]}
              </span>
            </h1>

            <p class="mt-6 max-w-xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
              From local moves to cross-country relocations, our professional
              team handles every detail so you can focus on settling into your
              new home.
            </p>

            {/* Buttons  */}
            <div class="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#quote"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-700 px-7 py-3.5 text-base font-medium text-white shadow-lg"
              >
                Get Free Quote
              </Link>

              <Link
                href="tel:5558901234"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-medium text-gray-700"
              >
                Call (555) 890-1234
              </Link>
            </div>
          </div>

          {/* Right side Image  */}
          <div class="relative">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
              <img
                src={delivery}
                alt="Professional moving services"
                class="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
