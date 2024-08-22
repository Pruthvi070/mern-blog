/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  // Use useLocation hook to get the current path
  const pathname = useLocation();

  return (
    <Navbar className="border-b-2 flex justify-between items-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Pruthvi'sBlog
        </span>
      </Link>

      <form className="hidden lg:block">
        <TextInput type="text" placeholder="Search..." icon={AiOutlineSearch} />
      </form>

      <div className="flex gap-2 md:order-2">
        <button className="w-12 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white">
          <FaMoon />
        </button>
        <Link to="/sign-in">
        <button className="px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
  Sign In
</button>


        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <div className="flex space-x-4">
          <Navbar.Link active={pathname === "/"} as={'div'}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={pathname === "/about"} as={'div'}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={pathname === "/projects"} as={'div'}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
