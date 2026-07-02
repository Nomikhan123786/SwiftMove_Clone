import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg dark:bg-gray-900 dark:ring-gray-800">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              {post.categoryLabel}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {post.date}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
export default BlogCard;
