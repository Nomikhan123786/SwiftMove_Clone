import { Link } from "react-router-dom";
import TermServicesHero from "../sections/hero/TermServicesHero";

const TermService = () => {
  return (
    <div data-aos="fade-up">
      <TermServicesHero />
      <section className="py-20 lg:py-28 dark:bg-gray-950/100">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Last updated: February 24, 2026
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              By accessing and using the SwiftMove website and services , you
              accept and agree to be bound by these Term of Services and our
              Privacy Policy. if you do not agree to be these term, plese do not
              usr our services.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              2. Description of Services
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              SwiftMove provides a range of services as described on our
              website. We reserve the right to modify, suspend, or discontinue
              any part of our services at any time without prior notice.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              3. User Accounts
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              When you create an account with us, you must provide accurate and
              complete information. You are responsible for:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1.5 h-4 w-4 flex-shrink-0 text-blue-500"
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
                <span>
                  Maintaining the confidentiality of your account credentials
                </span>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="mt-1.5 h-4 w-4 flex-shrink-0 text-blue-500"
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
                <span>All activities that occur under your account</span>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="mt-1.5 h-4 w-4 flex-shrink-0 text-blue-500"
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
                <span>Notifying us immediately of any unauthorized use</span>
              </li>
            </ul>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              4. Payment Terms
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              All fees are quoted in US dollars unless otherwise stated. Payment
              is due at the time of purchase. We accept major credit cards and
              other payment methods as displayed during checkout. All sales are
              final unless otherwise specified in our refund policy.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              5. Intellwctual Property
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of SwiftMove or its content
              suppliers and is protected by intellectual property laws. You may
              not reproduce, distribute, or create derivative works without our
              express written permission.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              6. Prohibited Conduct
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              You agree not to:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500"
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
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Use the service for any unlawful purpose
                </span>
              </div>

              <div className="flex items-start gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500"
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
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Interfere with or disrupt the service
                </span>
              </div>

              <div className="flex items-start gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500"
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
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Attempt to gain unauthorized access
                </span>
              </div>

              <div className="flex items-start gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500"
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
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Upload malicious code or content
                </span>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              7. Limitation of Liability
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              SwiftMove shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use or inability to use the service. Our total liability shall not
              exceed the amount you paid us in the twelve months preceding the
              claim.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              8. Disclaimer of Warranties
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The service is provided "as is" and "as available" without
              warranties of any kind, either express or implied. We do not
              warrant that the service will be uninterrupted, error-free, or
              free of harmful components.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              9. Termination
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We may terminate or suspend your access to our services
              immediately, without prior notice, for any reason including breach
              of these Terms. Upon termination, your right to use the service
              will cease immediately.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              10. Governing Law
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              These terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which SwiftMove operates, without
              regard to conflict of law provisions.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              11. Change to Terms
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We reserve the right to modify these terms at any time. We will
              provide notice of significant changes by posting the updated terms
              on our website. Your continued use of the service after changes
              constitutes acceptance of the modified terms.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
              12. Contact Information
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              For questions about these Terms of Service, please contact us:
            </p>

            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
              <p className="font-semibold text-gray-900 dark:text-white">
                SwiftMove
              </p>

              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Email:{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Contact us here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermService;
