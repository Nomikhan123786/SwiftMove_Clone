import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section data-aos="fade-up" className="bg-blue-700 py-16 dark:bg-blue-900 lg:py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <span class=" inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
          Our Blog
        </span>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Insight & Updates
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Stay up to date with the latest tips, trends, and insights from our
          team.
        </p>

        <nav
          className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-200"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>

          <span>/</span>

          <span className="text-white">Blog</span>
        </nav>
      </div>
    </section>
  );
};

export default BlogHero;
