import logo from "../assets/images/logo.svg";
import light_logo from "../assets/images/logo-light.svg";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, CrossIcon } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [show, setShow] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-ful h-16 lg:h-23  text-center border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/100">
      <div className="container mx-auto flex h-16 items-center justify-between px-2 lg:h-23 lg:px-2 ">
        <div className="flex items-center  gap-2 ">
          <img
            src={logo}
            alt=""
            className="h-8 w-auto lg:h-13 dark:hidden py-1"
          />
          <img
            src={light_logo}
            alt=""
            className="hidden h-8 w-auto lg:h-13 dark:block py-1"
          />
        </div>
        <div className="  hidden lg:flex lg:items-center lg:gap-3">
          <ul className="flex gap-7 ">
            <li className=" ">
              <Link
                to="/about"
                className="flex-3 py-5 text-1xl font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                About
              </Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>Servies </Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>How it Works</Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>Areas </Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>Pricing </Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>Testimonials </Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>Qoute </Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>Blog </Link>
            </li>
            <li className="[&>*]:flex-3  [&>*]:py-5 [&>*]:text-1xl [&>*]:font-medium [&>*]:text-gray-600 [&>*]:transition-colors [&>*]:hover:text-gray-900 [&>*]:dark:text-gray-400 [&>*]:dark:hover:text-white [&>*]:gap-100">
              <Link>Contact </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center  gap-5">
          <div className="  py-1 size-7">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <Sun size={20} className="text-white cursor-pointer " />
              ) : (
                <Moon size={20} className="cursor-pointer " />
              )}
            </button>
          </div>
          <div className=" hidden sm:flex block w-32 h-10 rounded-lg bg-amber-600 px-5 my-3 text-center text-sm  text-white transition-colors hover:bg-amber-600">
            <button className="block w-35 rounded-lg bg-amber-600  py-0.5 text-center text-sm font-medium text-white transition-colors hover:bg-amber-600">
              Free Qoute
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setShow(!show)}>
            {show ? (
              <CrossIcon className="dark:text-white cursor-pointer " />
            ) : (
              <Menu className="dark:text-white cursor-pointer " />
            )}
          </button>
        </div>
      </div>
      <div className="lg-hidden">
        {show ? (
          <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950">
            <ul className=" [&>*]:block [&>*]:py-3 [&>*]:text-base [&>*]:font-medium [&>*]:text-gray-900 [&>*]:dark:text-white">
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
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Navbar;
