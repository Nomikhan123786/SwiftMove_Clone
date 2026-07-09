const Areas = () => {
  return (
    <section id="area" className=" bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
          >
            Service Areas
          </div>

          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            We Move You Anywhere
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            From local neighborhoods to coast-to-coast, our network covers it
            all.
          </p>
        </div>

        {/* Card */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className=" container mx-auto mt-16 grid gap-8 lg:grid-cols-2"
        >
          {/* Local Moves */}
          <div
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft dark:bg-gray-800"
            data-delay="100"
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition:
                "opacity 0.6s ease-out 100ms, transform 0.6s ease-out",
            }}
          >
            {/* Header */}
            <div className="mb-6 m-2 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Local Moves
              </h3>
            </div>

            {/* Description */}
            <p className="mb-6 m-2 text-gray-600 dark:text-gray-400">
              Same-day and next-day service available for metro area
              relocations.
            </p>

            {/* Areas List */}
            <ul className="animate-fade-in-up space-y-4 ">
              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="font-medium  text-gray-900 dark:text-white">
                    Chicago Metro
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Same-day available
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="font-medium text-gray-900 dark:text-white">
                    Milwaukee
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~1.5 hr drive
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="font-medium text-gray-900 dark:text-white">
                    Indianapolis
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~3 hr drive
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="font-medium text-gray-900 dark:text-white">
                    Detroit
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~4.5 hr drive
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="font-medium text-gray-900 dark:text-white">
                    St. Louis
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~4.5 hr drive
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="font-medium text-gray-900 dark:text-white">
                    Minneapolis
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~6 hr drive
                </span>
              </li>
            </ul>
          </div>

          {/* Long Distance */}
          <div
            className=" rounded-2xl border border-gray-100 bg-white p-6 shadow-soft dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-delay="200"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition:
                "opacity 0.6s ease-out 200ms, transform 0.6s ease-out",
            }}
          >
            {/* Header */}
            <div className="animate-fade-in-up mb-6 m-2 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3b080] text-[#F97316] dark:bg-amber-900/50 dark:text-[#f07014]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Long Distance
              </h3>
            </div>

            {/* Description */}
            <p className="mb-6 m-2 text-gray-600 dark:text-gray-400">
              Cross-country moves with GPS tracking and guaranteed delivery
              dates.
            </p>

            {/* Routes List */}
            <ul className="animate-fade-in-up space-y-4">
              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-[#fc9f5d] hover:bg-amber-50/50 dark:border-gray-700 dark:hover:border-[#c55c11] dark:hover:bg-amber-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-amber-500"
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

                  <span className="font-medium text-gray-900 dark:text-white">
                    Chicago to New York
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~790 miles
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-amber-200 hover:bg-amber-50/50 dark:border-gray-700 dark:hover:border-amber-800 dark:hover:bg-amber-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-amber-500"
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

                  <span className="font-medium text-gray-900 dark:text-white">
                    Chicago to Los Angeles
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~2,015 miles
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-amber-200 hover:bg-amber-50/50 dark:border-gray-700 dark:hover:border-amber-800 dark:hover:bg-amber-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-amber-500"
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

                  <span className="font-medium text-gray-900 dark:text-white">
                    Chicago to Dallas
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~920 miles
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-amber-200 hover:bg-amber-50/50 dark:border-gray-700 dark:hover:border-amber-800 dark:hover:bg-amber-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-amber-500"
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

                  <span className="font-medium text-gray-900 dark:text-white">
                    Chicago to Denver
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~1,000 miles
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-amber-200 hover:bg-amber-50/50 dark:border-gray-700 dark:hover:border-amber-800 dark:hover:bg-amber-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-amber-500"
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

                  <span className="font-medium text-gray-900 dark:text-white">
                    Chicago to Atlanta
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~720 miles
                </span>
              </li>

              <li className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-amber-200 hover:bg-amber-50/50 dark:border-gray-700 dark:hover:border-amber-800 dark:hover:bg-amber-900/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-amber-500"
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

                  <span className="font-medium text-gray-900 dark:text-white">
                    Chicago to Miami
                  </span>
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ~1,380 miles
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
