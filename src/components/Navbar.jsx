import logo from "../assets/images/logo.svg";
import light_logo from "../assets/images/logo-light.svg";

import { Sun, Moon, Menu, CrossIcon } from "lucide-react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [show, setShow] = useState(false);

  return (
    <header
      data-aos="fade-up"
      className="sticky top-0 z-50 w-full   border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/100"
    >
      <div className="container mx-auto flex h-16 items-center  justify-between px-4  lg:h-20 lg:px-8 ">
        <div className="flex items-center  gap-2 ">
          <img
            src={logo}
            alt=""
            className="h-10 w-auto lg:h-12 dark:hidden py-1"
          />
          <img
            src={light_logo}
            alt=""
            className="hidden h-10 w-auto lg:h-12 dark:block py-1"
          />
        </div>
        <div className="  hidden lg:flex lg:items-center ">
          <ul className="flex gap-8 ">
            <li className=" ">
              <Link
                to="/about"
                className="flex-3  py-5 text-[14px] font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#work"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#area"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                Areas
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#testimonial"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#quote"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                Quote
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex-3 py-5 text-[14px]  font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white gap-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center  gap-5">
          <div className="  py-1 size-7 hover:bg-gray-100 dark:hover:bg-gray-700">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <Sun size={20} className="text-white cursor-pointer " />
              ) : (
                <Moon size={20} className="cursor-pointer " />
              )}
            </button>
          </div>
          <div className=" hidden sm:flex block w-28 h-10 rounded-lg bg-[#F97316] px-5 my-3 text-center text-sm  text-white transition-colors hover:bg-[#e76c14]">
            <button className="block w-28 rounded-lg bg-[#F97316]  py-0.5 text-center text-[14px] font-medium text-white transition-colors hover:bg-[#e76c14]">
              Free Quote
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
      <div className="lg:hidden">
        {show ? (
          <div className="border-t border-gray-200 bg-white  py-4 dark:border-gray-800 dark:bg-gray-950">
            <ul className="px-2 text-left">
              <li>
                <Link
                  to="/about"
                  className=" block py-3 text-base font-medium text-gray-900 dark:text-white"
                >
                  About
                </Link>
              </li>
              <li className="left-0 block py-1 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/services">Service </Link>
              </li>
              <li className="left-0 block py-1 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/#work">How it Works</Link>
              </li>
              <li className="left-0 block py-3 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/#area">Areas </Link>
              </li>
              <li className="left-0 block py-1 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/pricing">Pricing </Link>
              </li>
              <li className="left-0 block py-1 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/#testimonial">Testimonials </Link>
              </li>
              <li className="left-0 block py-1 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/#quote">Quote </Link>
              </li>
              <li className="left-0 block py-1 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/blog">Blog </Link>
              </li>
              <li className="left-0 block py-1 text-base font-medium text-gray-900 dark:text-white">
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
            <div className=" hidden lg:flex block w-32 h-10 rounded-lg bg-amber-600 px-5 my-3 text-center text-sm  text-white transition-colors hover:bg-amber-600">
              <button className="block w-32 rounded-lg bg-amber-600  py-0.5 text-center text-sm font-medium text-white transition-colors hover:bg-amber-600">
                Free Quote
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Navbar;
