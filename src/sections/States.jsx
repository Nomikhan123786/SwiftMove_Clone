const States = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Stat 1 */}
          <div className="text-center" data-animate="fade-in-up" data-delay="0">
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span data-counter="10000+">10000+</span>
            </div>

            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Successful Moves
            </div>
          </div>

          {/* Stat 2  */}
          <div
            className="text-center"
            data-animate="fade-in-up"
            data-delay="100"
          >
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span data-counter="99%">99%</span>
            </div>

            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              On-Time Rate
            </div>
          </div>

          {/* Stat 3  */}
          <div
            className="text-center"
            data-animate="fade-in-up"
            data-delay="200"
          >
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span data-counter="50+">50+</span>
            </div>

            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Trucks & Vehicles
            </div>
          </div>

          {/* Stat 4  */}
          <div
            className="text-center"
            data-animate="fade-in-up"
            data-delay="300"
          >
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span data-counter="15+">15+</span>
            </div>

            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
