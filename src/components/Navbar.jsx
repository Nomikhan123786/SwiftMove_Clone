import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex py-1 ">
        <div className="py-5 h-8 w-full lg:h-10 dark:hidden">
          <img src={logo} alt="" />
        </div>
        <div className="  hidden lg:flex lg:items-center lg:gap-8">
          <ul className="flex [&>*]:flex-3 [&>*]:w-25 [&>*]:py-5 [&>*]:text-sm [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white ">
            <li>
              <Link>About </Link>
            </li>
            <li>
              <Link>Servies </Link>
            </li>
            <li>
              <Link>How it Works</Link>
            </li>
            <li>
              <Link>Areas </Link>
            </li>
            <li>
              <Link>Pricing </Link>
            </li>
            <li>
              <Link>Testimonials </Link>
            </li>
            <li>
              <Link>Qoute </Link>
            </li>
            <li>
              <Link>Blog </Link>
            </li>
            <li>
              <Link>Contact </Link>
            </li>
          </ul>
        </div>
        <div className="w-60  py-6 size-7">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <div className=" hidden sm:flex block w-40 h-13 rounded-lg bg-amber-600 px-5 my-3 text-center text-lg font-medium text-white transition-colors hover:bg-accent-600">
          <button className="block w-35 rounded-lg bg-amber-600 px-5 py-0.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-600">
            Free Qoute
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
