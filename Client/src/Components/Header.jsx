/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  console.log("Header component rendered"); // Debugging line

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
      <Button className="w-12 h-10 lg:hidden rounded-full" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 items-center">
        <button className="w-12 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white">
          <FaMoon />
        </button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
      </div>
    </Navbar>
  );
}
