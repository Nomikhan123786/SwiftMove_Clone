import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section data-aos="fade-up" className=" relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Make Your Move?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
            Join 25,000+ families who trusted SwiftMove for a stress-free
            relocation. Get your free quote today or call us now.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Get Quote Button */}
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-600 hover:shadow-xl"
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
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Call Button */}
            <Link
              href="tel:5558901234"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
