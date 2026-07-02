import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Chicago to Denver Move",
    initial: "J",
    review:
      "SwiftMove made our cross-country move seamless. The crew was professional, careful with our belongings, and arrived right on schedule. Could not have asked for a better experience.",
  },
  {
    name: "Robert Chen",
    role: "Local Chicago Move",
    initial: "R",
    review:
      "I was dreading moving my piano and antique furniture, but the specialty team handled everything with incredible care. Not a single scratch. Truly white-glove service.",
  },
  {
    name: "Amanda Foster",
    role: "Commercial Office Move",
    initial: "A",
    review:
      "As a business owner, I needed zero downtime during our office relocation. SwiftMove planned every detail and had us up and running in the new space by Monday morning.",
  },
  {
    name: "Brian & Kelly Adams",
    role: "Residential Move",
    initial: "B",
    review:
      "Moved our entire 4-bedroom house in one day. The crew was fast, careful, and nothing was damaged. Worth every penny.",
  },
  {
    name: "Patricia Nguyen",
    role: "Office Manager",
    initial: "P",
    review:
      "SwiftMove handled our corporate office relocation over a weekend. We were up and running Monday morning with zero downtime.",
  },
  {
    name: "David Hoffman",
    role: "Long-Distance Move",
    initial: "D",
    review:
      "The packing service saved us so much stress. They even labeled every box by room. Made unpacking a breeze.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = [];

  for (let i = 0; i < cardsPerView; i++) {
    visibleTestimonials.push(testimonials[(current + i) % testimonials.length]);
  }

  return (
    <section
      id="testimonial"
      className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
          >
            Testimonials
          </div>

          <h2
            data-aos="fade-up"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Trusted by Thousands of Families
          </h2>

          <p
            data-aos="fade-up"
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            See what our customers say about their moving experience with
            SwiftMove.
          </p>
        </div>

        {/* slider */}
        <div data-aos="fade-up" className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className=" relative mt-16 px-14">
            {/* button previous */}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                >
                  {/* Stars */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-lg font-medium text-gray-900 dark:text-white">
                    "{item.review}"
                  </blockquote>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      {item.initial}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h4>

                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Next button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
