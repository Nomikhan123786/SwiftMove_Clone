import { Link } from "react-router-dom";

export default function MobileCTA() {
  return (
    <div
      id="mobile-cta"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 shadow-lg lg:hidden dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex gap-3">
        {/* Call Now — tel: is a native protocol, keep as <a> */}
        <a
          href="tel:5558901234"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          <svg
            className="h-4 w-4"
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
        </a>

        {/* Get Quote — in-page hash anchor via React Router Link */}
        <Link
          to="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
