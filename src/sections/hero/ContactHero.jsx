import { Link } from "react-router-dom";
const ContactHero = () => {
  return (
    <section className="bg-blue-600 py-16 dark:bg-blue-900 lg:py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Planning a move? Get a free, no-obligation estimate today.
        </p>

        <nav
          className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-200"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>

          <span>/</span>

          <span className="text-white">Contact</span>
        </nav>
      </div>
    </section>
  );
};

export default ContactHero;
