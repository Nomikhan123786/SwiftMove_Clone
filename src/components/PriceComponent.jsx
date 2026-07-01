const pricingPlans = [
  {
    title: "Studio / 1BR",
    subtitle: "Small apartments and studios",
    price: "$299",
    features: [
      "2-3 professional movers",
      "Small moving truck",
      "3-5 hours estimated",
      "Blankets & basic protection",
    ],
    disabled: ["Packing services", "Storage available"],
    popular: false,
  },
  {
    title: "2-3 Bedrooms",
    subtitle: "Houses and large apartments",
    price: "$599",
    features: [
      "3-4 professional movers",
      "Large moving truck",
      "5-8 hours estimated",
      "Full padding & wrapping",
      "Disassembly & reassembly",
      "Packing services add-on",
    ],
    disabled: [],
    popular: true,
  },
  {
    title: "4+ Bedrooms",
    subtitle: "Large homes and estates",
    price: "$999",
    features: [
      "4-5 professional movers",
      "2 moving trucks",
      "Full day service",
      "Premium protection",
      "Packing & unpacking",
      "Storage available",
    ],
    disabled: [],
    popular: false,
  },
];

const PriceComponent = () => {
  return (
    <section id="pricing" className="animate-fade-in-up text-center">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Transparent, Honest Pricing
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            No hidden fees, no surprises. Get a clear estimate before your move
            day.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="animate-fade-in-up mt-12 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all hover:shadow-lg ${
                plan.popular
                  ? "ring-2 ring-blue-600 bg-white dark:bg-gray-800 shadow-lg"
                  : "bg-gray-50 dark:bg-gray-900 shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {plan.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    from
                  </span>

                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400"
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

                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}

                {plan.disabled.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-500 dark:text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-8">
                <a
                  href="/#quote"
                  className={`block w-full rounded-lg py-3 text-center font-medium transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  }`}
                >
                  Get Exact Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Final price based on distance, items, and additional services. All
          quotes are free and no-obligation.
        </p>
      </div>
    </section>
  );
};

export default PriceComponent;
