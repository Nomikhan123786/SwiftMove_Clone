import BlogGrid from "../components/Blog/BlogGrid";
import NewsLetter from "../components/Blog/NewsLetter";

import BlogHero from "../sections/hero/BlogHero";

const Blog = () => {
  return (
    <div data-aos="fade-up">
      <BlogHero />
      <BlogGrid />
      <NewsLetter />
    </div>
  );
};

export default Blog;
