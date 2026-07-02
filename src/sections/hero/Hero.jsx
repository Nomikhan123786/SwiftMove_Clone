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
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background   */}

      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              Licensed & Insured in All 50 States
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Moving Made
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-amber-700 bg-clip-text text-transparent">
                {AnimatedWords[currentindex]}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
              From local moves to cross-country relocations, our professional
              team handles every detail so you can focus on settling into your
              new home.
            </p>

            {/* Buttons  */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-700 px-7 py-3.5 text-base font-medium text-white shadow-lg"
              >
                Get Free Quote
              </Link>

              <Link
                href="tel:5558901234"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-medium text-gray-700"
              >
                Call (555) 890-1234
              </Link>
            </div>
          </div>

          {/* Right side Image  */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
              <img
                src={delivery}
                alt="Professional moving services"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
