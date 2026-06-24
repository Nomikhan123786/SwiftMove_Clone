import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg z-50 transition-all duration-150"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgressBar;
