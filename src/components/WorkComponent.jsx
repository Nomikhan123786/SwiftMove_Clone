const WorkComponent = () => {
  return (
    <section id="how-it-works">
      <div className="animate-fade-in-up container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            data-animate="fade-in-up"
            data-delay="100"
          >
            Your Move in 4 Easy Steps
          </h2>

          <p
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
            data-animate="fade-in-up"
            data-delay="200"
          >
            We have streamlined the moving process to make it as simple and
            transparent as possible.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div
          className="mt-16 hidden lg:block"
          data-animate="fade-in-up"
          data-delay="300"
        >
          <div className="relative">
            <div
              className="absolute left-0 right-0 top-8 h-0.5 bg-blue-200 dark:bg-blue-800"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                  01
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Request a Quote
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Fill out our quick form or call us for a free, no-obligation
                  estimate tailored to your move.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                  02
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Schedule Your Move
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Pick your preferred date and time. We will confirm all the
                  details and assign your crew.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                  03
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  We Handle Everything
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Our professional team handles packing, loading, and
                  transporting with care and precision.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative text-center">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                  04
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Welcome Home
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  We unload, place furniture exactly where you want it, and do a
                  final walkthrough with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative">
            {/* Step 1 */}
            <div className="relative flex gap-6 pb-10">
              <div
                className="absolute left-8 top-16 h-full w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-800"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                01
              </div>

              <div className="pt-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Request a Quote
                </h3>

                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Fill out our quick form or call us for a free, no-obligation
                  estimate tailored to your move.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-6 pb-10">
              <div
                className="absolute left-8 top-16 h-full w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-800"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                02
              </div>

              <div className="pt-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Schedule Your Move
                </h3>

                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Pick your preferred date and time. We will confirm all the
                  details and assign your crew.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-6 pb-10">
              <div
                className="absolute left-8 top-16 h-full w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-800"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                03
              </div>

              <div className="pt-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  We Handle Everything
                </h3>

                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our professional team handles packing, loading, and
                  transporting with care and precision.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex gap-6">
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                04
              </div>

              <div className="pt-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Welcome Home
                </h3>

                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We unload, place furniture exactly where you want it, and do a
                  final walkthrough with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;
