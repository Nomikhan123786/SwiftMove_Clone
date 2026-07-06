const Quote = () => {
  return (
    <section id="quote" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center rounded-full bg-[#fddec7] px-3 py-1 text-sm font-medium text-[#5f2f0c] dark:bg-[#5f2f0c] dark:text-[#fddec7]"
          >
            Free Quote
          </div>

          <h2
            data-aos="fade-up"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Get Your Free Moving Quote
          </h2>

          <p
            data-aos="fade-up"
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            Tell us about your move and we will provide a detailed,
            no-obligation estimate within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Quote Form */}
          <div data-aos="fade-up" className="lg:col-span-2">
            <form className="rounded-2xl bg-gray-50 p-6 shadow-soft sm:p-8 dark:bg-gray-900">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 000-0000"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Move Date */}
                <div>
                  <label
                    htmlFor="move-date"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Move Date
                  </label>

                  <input
                    type="date"
                    id="move-date"
                    name="move-date"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                {/* Moving From */}
                <div>
                  <label
                    htmlFor="moving-from"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Moving From
                  </label>

                  <input
                    type="text"
                    id="moving-from"
                    name="moving-from"
                    required
                    placeholder="City or ZIP code"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Moving To */}
                <div>
                  <label
                    htmlFor="moving-to"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Moving To
                  </label>

                  <input
                    type="text"
                    id="moving-to"
                    name="moving-to"
                    required
                    placeholder="City or ZIP code"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Home Size */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="home-size"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Home Size
                  </label>

                  <select
                    id="home-size"
                    name="home-size"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select home size</option>
                    <option value="studio">Studio</option>
                    <option value="1br">1 Bedroom</option>
                    <option value="2br">2 Bedrooms</option>
                    <option value="3br">3 Bedrooms</option>
                    <option value="4br+">4+ Bedrooms</option>
                  </select>
                </div>

                {/* Additional Services */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Additional Services
                  </label>

                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        name="services"
                        value="packing"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
                      />
                      Packing & amp; Unpacking
                    </label>

                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        name="services"
                        value="storage"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
                      />
                      Storage
                    </label>

                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        name="services"
                        value="specialty"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
                      />
                      Piano / Specialty Items
                    </label>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Additional Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about any special requirements..."
                    style={{ minHeight: "120px" }}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#F97316] px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-[#e76c14] hover:shadow-xl hover:shadow-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div data-aos="fade-up" className="space-y-6">
            {/* Trust Badges */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-soft dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Why Choose SwiftMove?
              </h3>

              <ul className="mt-4 space-y-4">
                {/* Licensed & Insured */}
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      Licensed & Insured
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      USDOT registered, fully insured
                    </div>
                  </div>
                </li>

                {/* BBB A+ Rated */}
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      BBB A+ Rated
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Top-rated by Better Business Bureau
                    </div>
                  </div>
                </li>

                {/* Rating */}
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      4.9/5 Rating
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Based on 2,500+ reviews
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Call CTA */}
            <div className="rounded-2xl bg-blue-600 p-6 text-center text-white">
              <h3 className="text-lg font-semibold">Prefer to Call?</h3>

              <p className="mt-2 text-blue-100">
                Speak with a moving specialist now
              </p>

              <a
                href="tel:5558901234"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-blue-700 transition-colors hover:bg-blue-50"
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
                (555) 890-1234
              </a>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-soft dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Hours
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    7:00 AM - 8:00 PM
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    8:00 AM - 6:00 PM
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    9:00 AM - 5:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
