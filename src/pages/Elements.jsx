import ElementsHero from "../sections/hero/ElementsHero";
import { useState } from "react";
import { Link } from "react-router-dom";

function Tabs() {
  const tabs = ["Overview", "Features", "Pricing"];
  const [active, setActive] = useState("Overview");

  const content = {
    Overview:
      "This is the content for the Overview tab. Each tab panel contains its own content, and only the active panel is visible at a time. Tabs are a great way to organize large amounts of information into digestible sections without overwhelming the user.",
    Features:
      "This panel highlights the key features of the product. Use this space to showcase what makes your offering stand out from the competition.",
    Pricing:
      "This panel covers pricing tiers and plans. You can embed a full pricing table here or link through to a dedicated pricing page.",
  };

  return (
    <div className="mt-8">
      <div className="flex border-b border-gray-200 dark:border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              active === tab
                ? "border-blue-600 font-semibold text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="rounded-b-lg border border-t-0 border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {active}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 ">
          {content[active]}
        </p>
      </div>
    </div>
  );
}

const accordionItems = [
  {
    question: "What technologies does this template use?",
    answer:
      "This template is built with Astro 5.x for static site generation, Tailwind CSS 4.x for utility-first styling, and vanilla TypeScript for client-side interactivity. No jQuery or heavy JavaScript frameworks are used, resulting in excellent performance scores.",
  },
  {
    question: "Is the template responsive and mobile-friendly?",
    answer:
      "Yes, every section is fully responsive and tested across all major screen sizes, from small phones to wide desktops.",
  },
  {
    question: "How do I customize the colors and design?",
    answer:
      "Colors are defined as CSS custom properties at the root level. Simply update the blue palette tokens and every component inherits the new values automatically.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mt-8 space-y-3">
      {accordionItems.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between bg-white px-6 py-4 text-left dark:bg-gray-800"
          >
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 transition-transform ${
                open === i
                  ? "rotate-180 text-blue-600 dark:text-blue-400"
                  : "text-gray-400"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {open === i && (
            <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const Elements = () => {
  return (
    <div>
      <ElementsHero />
      <section className="py-20 lg:py-28 dark:bg-gray-950/100">
        <div className="container mx-auto max-w-5xl px-4 lg:px-8">
          {/* ── Typography ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Typography
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Heading levels, paragraph styles, and text treatments.
          </p>
          <div className="mt-8 space-y-6 ">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Heading 1 — The quick brown fox
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              Heading 2 — The quick brown fox
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Heading 3 — The quick brown fox
            </h3>
            <h4 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              Heading 4 — The quick brown fox
            </h4>
            <h5 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
              Heading 5 — The quick brown fox
            </h5>
            <h6 className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
              Heading 6 — The quick brown fox
            </h6>
            <hr className="border-gray-200 dark:border-gray-800" />
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <strong>Lead text.</strong> This is a lead paragraph with a larger
              font size, suitable for introductions and important callouts. It
              draws the reader's attention and sets the tone for the content
              that follows.
            </p>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <strong>Body text.</strong> This is a standard paragraph used for
              body copy throughout the template. It uses the default font size
              and a comfortable line height for readability. Good typography is
              the foundation of any well-designed interface, ensuring that users
              can easily consume and understand the content presented to them.
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-500">
              <strong>Small text.</strong> This is smaller text, useful for
              captions, footnotes, meta information, and secondary details that
              support the main content.
            </p>
            <blockquote className="border-l-4 border-blue-600 py-2 pl-6 italic text-gray-700 dark:border-blue-400 dark:text-gray-300">
              "Design is not just what it looks like and feels like. Design is
              how it works."
              <span className="mt-2 block text-sm font-medium not-italic text-gray-500 dark:text-gray-400">
                — Steve Jobs
              </span>
            </blockquote>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Buttons ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Buttons
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            blue, secondary, and outline button styles in various sizes.
          </p>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Variants
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  blue
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                >
                  Outline
                </button>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Small
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Default
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Large
                </button>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Disabled
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white opacity-50"
                >
                  blue Disabled
                </button>
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-lg bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 opacity-50 dark:bg-gray-700 dark:text-white"
                >
                  Secondary Disabled
                </button>
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 opacity-50 dark:border-blue-400 dark:text-blue-400"
                >
                  Outline Disabled
                </button>
              </div>
            </div>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Badges ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Badges & amp; Tags
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Colored labels for statuses, categories, and metadata.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              blue
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
              Success
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
              Warning
            </span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">
              Error
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              Info
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              Neutral
            </span>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Alerts ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Alerts / Notices
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Contextual feedback messages for user actions and system states.
          </p>
          <div className="mt-8 space-y-4">
            {/* Info */}
            <div
              className="flex gap-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20"
              role="alert"
            >
              <div className="shrink-0">
                <svg
                  className="h-5 w-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                  Information
                </h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
                  This is an informational alert. Use it to highlight neutral
                  tips or contextual information for the user.
                </p>
              </div>
            </div>
            {/* Success */}
            <div
              className="flex gap-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20"
              role="alert"
            >
              <div className="shrink-0">
                <svg
                  className="h-5 w-5 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-800 dark:text-green-300">
                  Success
                </h4>
                <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                  Your action has been completed successfully. Everything is
                  working as expected.
                </p>
              </div>
            </div>
            {/* Warning */}
            <div
              className="flex gap-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20"
              role="alert"
            >
              <div className="shrink-0">
                <svg
                  className="h-5 w-5 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                  Warning
                </h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  Please review the details carefully. This action may have
                  unintended consequences if not properly configured.
                </p>
              </div>
            </div>
            {/* Error */}
            <div
              className="flex gap-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20"
              role="alert"
            >
              <div className="shrink-0">
                <svg
                  className="h-5 w-5 text-red-600 dark:text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-red-800 dark:text-red-300">
                  Error
                </h4>
                <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                  Something went wrong. Please check the form fields and try
                  again, or contact support if the issue persists.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Cards ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cards
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Flexible content containers with various styles and layouts.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Basic */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950/100">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Basic Card
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A simple card with a border, padding, and rounded corners. Ideal
                for displaying grouped information.
              </p>
            </div>
            {/* Hover Shadow */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950/100">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Hover Shadow
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                This card elevates on hover with a larger shadow, providing
                visual feedback and encouraging interaction.
              </p>
            </div>
            {/* Icon */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950/100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Icon Card
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Features a prominent icon above the content, useful for
                services, features, and benefit highlights.
              </p>
            </div>
          </div>

          {/* Card with Image — uses React Router Link */}
          <div className="mt-8 max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950/100">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Card with Image
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  A card featuring an image area at the top with content below.
                  The gradient placeholder represents the image area.
                </p>
                <Link
                  to="/learn-more"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Learn more
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Form Elements ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white ">
            Form Elements
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Input fields, selects, textareas, and other form controls.
          </p>
          <div className="mt-8 max-w-2xl space-y-6">
            {/* Text */}
            <div>
              <label
                htmlFor="text-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="text-input"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email-input"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>
            {/* Select */}
            <div>
              <label
                htmlFor="select-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <select
                id="select-input"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              >
                <option value="">Select a subject...</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            {/* Textarea */}
            <div>
              <label
                htmlFor="textarea-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="textarea-input"
                rows={4}
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                style={{ minHeight: "120px" }}
              />
            </div>
            {/* Checkboxes */}
            <div>
              <span className="mb-3 block text-sm font-medium text-gray-900 dark:text-white">
                Preferences
              </span>
              <div className="space-y-3">
                {[
                  "Email notifications",
                  "SMS notifications",
                  "Marketing updates",
                ].map((label, i) => (
                  <label key={label} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked={i === 0}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-950/100"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {/* Radio */}
            <div>
              <span className="mb-3 block text-sm font-medium text-gray-900 dark:text-white">
                Contact Method
              </span>
              <div className="space-y-3">
                {["Email", "Phone", "In Person"].map((label, i) => (
                  <label key={label} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="contact-method"
                      defaultChecked={i === 0}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {/* Toggle */}
            <div>
              <span className="mb-3 block text-sm font-medium text-gray-900 dark:text-white">
                Toggle Switch
              </span>
              <label className="inline-flex cursor-pointer items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500/20 dark:bg-gray-700" />
                  <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Enable dark mode
                </span>
              </label>
            </div>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Lists ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Lists
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Unordered, ordered, and icon-based list styles.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Unordered
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                {[
                  "Responsive design patterns",
                  "Cross-browser compatibility",
                  "Accessibility best practices",
                  "Performance optimization",
                  "SEO-friendly markup",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Ordered
              </h3>
              <ol className="list-decimal space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                {[
                  "Plan your content strategy",
                  "Design the user interface",
                  "Develop and implement",
                  "Test across devices",
                  "Deploy and monitor",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Check List
              </h3>
              <ul className="space-y-3">
                {[
                  "Tailwind CSS 4.x ready",
                  "Dark mode support",
                  "Fully responsive",
                  "Vanilla JavaScript",
                  "WCAG accessible",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Table ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tables
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Structured data display with striped rows and responsive layout.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  {["Plan", "Price", "Features", "Status"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 font-semibold text-gray-900 dark:text-white"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    plan: "Starter",
                    price: "$9/mo",
                    features: "5 pages, basic support",
                    status: "Active",
                    statusColor: "green",
                  },
                  {
                    plan: "Professional",
                    price: "$29/mo",
                    features: "25 pages, priority support",
                    status: "Active",
                    statusColor: "green",
                    striped: true,
                  },
                  {
                    plan: "Enterprise",
                    price: "$99/mo",
                    features: "Unlimited pages, 24/7 support",
                    status: "Pending",
                    statusColor: "amber",
                  },
                ].map(
                  ({ plan, price, features, status, statusColor, striped }) => (
                    <tr
                      key={plan}
                      className={`border-b border-gray-200 dark:border-gray-800 ${striped ? "bg-gray-50/50 dark:bg-gray-800/30" : ""}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                        {plan}
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                        {price}
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                        {features}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full bg-${statusColor}-100 px-2.5 py-0.5 text-xs font-medium text-${statusColor}-700 dark:bg-${statusColor}-900/50 dark:text-${statusColor}-300`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Tabs ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tabs
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Tabbed navigation for organizing content into panels.
          </p>
          <Tabs />

          <hr className="my-16 border-gray-200 dark:border-gray-800" />

          {/* ── Accordion ── */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Accordion
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Expandable content sections for FAQs and collapsible information.
          </p>
          <Accordion />
        </div>
      </section>
    </div>
  );
};

export default Elements;
