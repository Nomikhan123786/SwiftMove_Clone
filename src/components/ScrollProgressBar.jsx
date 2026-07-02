import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight <= 0) {
        setScroll(0);
        return;
      }

      const progress = (scrollTop / totalHeight) * 100;
      setScroll(Math.min(100, Math.max(0, progress)));
    };

    // Scroll pe recalculate
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Page height badalte hi (jaise image load hone pe) recalculate
    const resizeObserver = new ResizeObserver(() => {
      handleScroll();
    });
    resizeObserver.observe(document.body);

    handleScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg z-50 transition-all duration-150"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgressBar;
