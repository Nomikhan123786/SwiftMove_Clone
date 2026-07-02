import { useParams, Link } from "react-router-dom";
import POSTS from "../components/Blog/blogGrid/POSTS";

// ---- Share icons (kept inline as small components for readability) -------
function XIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
}

// ---- Renders the article body blocks (headings / paragraphs) -------------
function ArticleBody({ content }) {
  if (!content || content.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        Full article content coming soon.
      </p>
    );
  }

  return content.map((block, i) => {
    if (block.type === "heading") {
      return (
        <h2 key={i} id={block.id}>
          {block.text}
        </h2>
      );
    }
    return <p key={i}>{block.text}</p>;
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="px-4 py-24 text-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Post not found.
        </p>
        <Link
          to="/blog"
          className="mt-4 inline-block text-blue-600 underline dark:text-blue-400"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const shareUrl = `https://example.com/blog/${post.slug}/`;
  const shareText = encodeURIComponent(post.title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <article>
      {/* Article Header */}
      <div className="bg-white pt-8 dark:bg-gray-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>

            <nav
              className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
              aria-label="Breadcrumb"
            >
              <Link
                to="/"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to="/blog"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">Article</span>
            </nav>

            <div className="mt-6">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                {post.categoryLabel}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4 border-b border-gray-200 pb-8 dark:border-gray-800">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} · {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white py-8 lg:py-12 dark:bg-gray-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
            <ArticleBody content={post.content} />
          </div>
        </div>
      </div>

      {/* Social Sharing */}
      <div className="bg-white py-8 dark:bg-gray-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl border-t border-gray-200 pt-8 dark:border-gray-800">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Share this article
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(
                  shareUrl,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[#1DA1F2] hover:text-white dark:bg-gray-800 dark:text-gray-400"
              >
                <XIcon />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[#1877F2] hover:text-white dark:bg-gray-800 dark:text-gray-400"
              >
                <FacebookIcon />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  shareUrl,
                )}&title=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[#0A66C2] hover:text-white dark:bg-gray-800 dark:text-gray-400"
              >
                <LinkedInIcon />
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                aria-label="Copy link"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              >
                <LinkIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
