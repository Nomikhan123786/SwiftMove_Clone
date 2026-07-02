import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Yes, all moves include basic liability coverage at no extra cost. We also offer comprehensive full-value protection plans for additional peace of mind. Our team will discuss coverage options during your free estimate.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 weeks in advance, especially during peak moving season (May-September). However, we do our best to accommodate last-minute moves when possible.",
  },
  {
    question: "Do you provide packing services?",
    answer:
      "Yes, we offer full and partial packing services using professional-grade materials. Our trained packers handle everything from delicate china to large electronics, ensuring safe transport of all your belongings.",
  },
  {
    question: "Can you move specialty items like pianos?",
    answer:
      "Absolutely! Our team is trained and equipped to handle specialty items including pianos, antiques, artwork, and safes. We use specialized equipment and packing techniques for these valuable items.",
  },
  {
    question: "Do you offer storage solutions?",
    answer:
      "Yes, we operate climate-controlled storage facilities for both short-term and long-term needs. This is ideal for moves with different timelines or if you need temporary storage during a transition.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(4);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
          >
            FAQ
          </div>
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Frequently Asked Questions
          </h2>
          <p
            data-aos="fade-up"
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            Find answers to common questions about our moving services and
            process.
          </p>
        </div>

        <div data-aos="fade-up" className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div className="py-6" key={faq.question}>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span
                      className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 dark:bg-gray-800 dark:text-gray-400"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="pt-4 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
