import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/#about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    // {
    //   title: "Blog",
    //   path: "/blog",
    // },
    {
      title: "Contact",
      path: "/#contact",
    },
  ];

  const [isSidebar, setIsSidebar] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="border-b dark:border-b-zinc-500 max-h-28 py-3 overflow-hidden w-full  sticky top-0  z-50  bg-zinc-50 dark:bg-dark-600">
      {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
      <nav className=" max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-3 ">
        <Link href="/" passHref>
          {/* <a className="w-24 h-16 relative cursor-pointer block">
            <Image
              src={logo}
              layout="fill"
              alt="shodex garden logo"
              priority
              loading="eager"
            />
          </a> */}
          <a>
            <h1 className="text-lime-500 text-xl cursor-pointer">Chi_Nnaji</h1>
          </a>
        </Link>

        <div className="flex">
          <div
            className={` ${
              isSidebar ? "block " : "hidden"
            } fixed h-screen lg:h-full  inset-0  ease-in-out duration-500
          lg:block lg:relative`}
          >
            {/* <div className="relativ"> */}
            <MdOutlineClose
              className="cursor-pointer text-3xl  right-10 top-10 absolute lg:hidden text-zinc-600 dark:text-zinc-100"
              onClick={() => setIsSidebar(false)}
            />
            {/* </div> */}

            <ul className="flex lg:flex-row ml-auto flex-col justify-center items-center h-full  bg-zinc-50 dark:bg-dark-600 text-zinc-600 dark:text-zinc-100 -mt-10 md:-mt-0">
              {navLinks.map((navLink) => (
                <li
                  className="hover:text-lime-500 flex flex-col items-center text-lg md:text-sm  px-4 py-2 my-4 lg:my-1 font-medium  lg:capitalize uppercase"
                  onClick={() => setIsSidebar(false)}
                  key={navLink.title}
                >
                  <Link href={navLink.path}>
                    <a>{navLink.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center ml-3">
            {/* <div>
              <span
                onClick={() => setTheme(theme == "light" ? "dark" : "light")}
                className="w-9 h-9 bg-gray-200 text-zinc-600 dark:text-zinc-100 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all cursor-pointer"
              >
                {isMounted ? (
                  <>
                    {theme == "light" ? (
                      <BsFillMoonStarsFill />
                    ) : (
                      <BsFillSunFill />
                    )}
                  </>
                ) : null}
              </span>
            </div> */}
            {/* <div>
              <span
                onClick={() => setTheme(theme == "light" ? "dark" : "light")}
                className="w-9 h-9 bg-gray-200 text-zinc-600 dark:text-zinc-100 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all cursor-pointer"
              >
                {isMounted ? (
                  <>
                    {theme == "light" ? (
                      <BsFillMoonStarsFill />
                    ) : (
                      <BsFillSunFill />
                    )}
                  </>
                ) : null}
              </span>
            </div> */}

            <FiMenu
              onClick={() => setIsSidebar(true)}
              className="ml-4 mr-1 lg:hidden cursor-pointer text-2xl text-zinc-600 dark:text-zinc-100"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
