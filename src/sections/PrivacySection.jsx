import { Link } from "react-router-dom";
const PrivacySection = () => {
  return (
    <section data-aos="fade-up" className="py-20 lg:py-28 dark:bg-gray-950/100">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: February 24, 2026
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            1. Information We Collect
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We collect information you provide directly to us, such as when you
            create an account, make a purchase, fill out a form, or communicate
            with us. This may include:
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
                Name, email address, phone number, and mailing address
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
              <span>Payment information and billing details</span>
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
              <span>Account preferences and communication choices</span>
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
              <span>Any other information you choose to provide</span>
            </li>
          </ul>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            2. How We Use Your Information
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We use the information we collect to:
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
              <span>Provide, maintain, and improve our services</span>
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
              <span>Process transactions and send related information</span>
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
              <span>Send promotional communications (with your consent)</span>
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
              <span>Respond to your comments, questions, and requests</span>
            </li>
          </ul>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            3. Information Sharing
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy. We may share information with:
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
              <span>Service providers who assist in our operations</span>
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
              <span>Law enforcement when required by law</span>
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
              <span>Business partners with your explicit consent</span>
            </li>
          </ul>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            4. Data Security
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. These measures
            include encryption, secure servers, and regular security
            assessments.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            5. Cookies and Tracking
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We use cookies and similar tracking technologies to enhance your
            experience on our website. You can control cookie preferences
            through your browser settings. For more details, see our cookie
            consent banner when you first visit our site.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            6. Your Rights
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Access & Portability
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Request a copy of your personal data in a portable format.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Correction
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Request correction of inaccurate or incomplete data.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Deletion
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Request deletion of your personal data under certain conditions.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Opt-Out
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Unsubscribe from marketing communications at any time.
              </p>
            </div>
          </div>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            7. Third-Party Links
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices of these external sites. We
            encourage you to review their privacy policies before providing any
            personal information.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            8. Children's Privacy
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our services are not directed to individuals under the age of 16. We
            do not knowingly collect personal information from children. If we
            become aware that we have collected data from a child without
            parental consent, we will take steps to delete that information.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            9. Changes to This Policy
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the "Last updated" date above. We encourage you to review
            this policy periodically.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            10. Contact Us
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            If you have any questions about this privacy policy or our data
            practices, please contact us:
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
  );
};

export default PrivacySection;
