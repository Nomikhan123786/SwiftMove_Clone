const ServicesComponent = () => {
  return (
    <section id="services">
      <div className="animate-fade-in-up container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            data-animate="fade-in-up"
            data-delay="100"
          >
            Moving Solutions for Every Need
          </h2>

          <p
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
            data-animate="fade-in-up"
            data-delay="200"
          >
            Whether you are moving across town or across the country, we have
            the expertise and equipment to get you there safely.
          </p>
        </div>

        {/* Services Card */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* card 1  */}
          <div
            className="group relative rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-soft-lg dark:bg-gray-800"
            data-animate="fade-in-up"
            data-delay="100"
          >
            <div className="cursor-pointer mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Local Moving
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Same-city moves with careful handling of all your belongings. Our
              trained crews ensure everything arrives safely at your new home.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group relative rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-soft-lg dark:bg-gray-800"
            data-delay="150"
          >
            <div className="cursor-pointer mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Long Distance
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Cross-country relocations with real-time GPS tracking, guaranteed
              delivery dates, and dedicated move coordinators.
            </p>
          </div>

          {/* Card 3  */}
          <div
            className="group relative rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-soft-lg dark:bg-gray-800"
            data-delay="200"
          >
            <div className="cursor-pointer mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 13h13l3 3v4H3v-7zm13-6h3l3 3v3h-6V7zM3 7h10v6H3V7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Commercial Moving
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Office and business relocations with minimal downtime. We handle
              IT equipment, furniture, and sensitive documents.
            </p>
          </div>

          {/* Card 4  */}
          <div
            className="group relative rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-soft-lg dark:bg-gray-800"
            data-delay="250"
          >
            <div className="cursor-pointer mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                classNameName="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Packing Services
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Professional packing and unpacking using premium materials. We
              protect everything from fragile china to heavy furniture.
            </p>
          </div>

          {/* Card 5  */}
          <div
            className="group relative rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-soft-lg dark:bg-gray-800"
            data-delay="300"
          >
            <div className="cursor-pointer mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Storage Solutions
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Short and long-term secure, climate-controlled storage facilities.
              Perfect for staged moves or temporary storage needs.
            </p>
          </div>

          {/* Card 6  */}
          <div
            className="group relative rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-soft-lg dark:bg-gray-800"
            data-delay="350"
          >
            <div className="cursor-pointer mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Specialty Items
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Expert handling of pianos, antiques, fine art, and other fragile
              or valuable items with custom crating and white-glove service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
