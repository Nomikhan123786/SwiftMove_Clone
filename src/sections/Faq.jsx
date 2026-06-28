

const Faq = () => {
  return (
    <section id="faq" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
  <div className="container mx-auto px-4 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
        FAQ
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Frequently Asked Questions
      </h2>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Find answers to common questions about our moving services and process.
      </p>
    </div>

    {/* FAQ List */}
    <div className="mx-auto mt-16 max-w-3xl">
      <div className="divide-y divide-gray-200 dark:divide-gray-800">

        {/* FAQ 1 */}
        <div className="py-6">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Are my belongings insured during the move?
            </span>

            <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 dark:bg-gray-800 dark:text-gray-400">
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
                  d="M12 6v12M6 12h12"
                />
              </svg>
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              Yes, all moves include basic liability coverage at no extra cost.
              We also offer comprehensive full-value protection plans for
              additional peace of mind. Our team will discuss coverage options
              during your free estimate.
            </p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="py-6">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              How far in advance should I book?
            </span>

            <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 dark:bg-gray-800 dark:text-gray-400">
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
                  d="M12 6v12M6 12h12"
                />
              </svg>
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              We recommend booking at least 2–3 weeks in advance, especially
              during peak moving season (May–September). However, we do our best
              to accommodate last-minute moves whenever possible.
            </p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="py-6">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Do you provide packing services?
            </span>

            <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 dark:bg-gray-800 dark:text-gray-400">
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
                  d="M12 6v12M6 12h12"
                />
              </svg>
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              Yes, we offer full and partial packing services using
              professional-grade materials. Our trained packers safely handle
              everything from delicate china to large electronics.
            </p>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="py-6">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Can you move specialty items like pianos?
            </span>

            <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 dark:bg-gray-800 dark:text-gray-400">
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
                  d="M12 6v12M6 12h12"
                />
              </svg>
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              Absolutely! Our team is trained and equipped to handle specialty
              items including pianos, antiques, artwork, and safes using
              specialized equipment and packing techniques.
            </p>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="py-6">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Do you offer storage solutions?
            </span>

            <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 dark:bg-gray-800 dark:text-gray-400">
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
                  d="M12 6v12M6 12h12"
                />
              </svg>
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              Yes, we operate climate-controlled storage facilities for both
              short-term and long-term needs. This is ideal if you need
              temporary storage during your move.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}

export default Faq
