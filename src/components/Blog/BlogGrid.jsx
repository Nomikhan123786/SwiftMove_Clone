import { useMemo, useState } from "react";
import POSTS from "./blogGrid/POSTS";
import SearchBar from "./blogGrid/SearchBar";
import FilterBar from "./blogGrid/FilterBar";
import BlogCard from "./blogGrid/BlogCard";

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const visiblePosts = useMemo(() => {
    let result = POSTS;

    //  Category filter
    if (activeFilter !== "all") {
      result = result.filter((post) => post.category === activeFilter);
    }

    //  Search filter (title + excerpt, case-insensitive)
    const query = searchTerm.trim().toLowerCase();
    if (query) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query),
      );
    }

    return result;
  }, [activeFilter, searchTerm]);

  return (
    <section className="px-4 pt-30 sm:px-6 lg:px-8 dark:bg-gray-950/100">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />

      {visiblePosts.length > 0 ? (
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mx-auto max-w-7xl text-center text-gray-500 dark:text-gray-400">
          {searchTerm
            ? `No posts found for "${searchTerm}".`
            : "No posts found in this category yet."}
        </p>
      )}
    </section>
  );
}
