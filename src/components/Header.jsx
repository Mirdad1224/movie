import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = ({onMode}) => {

  const lightHandler = () => {
    localStorage.setItem('mode', 'light')
    onMode('light')
  }
  const darkHandler = () => {
    localStorage.setItem('mode', 'dark')
    onMode('dark')
  }

  return (
    <header
      className="w-full flex justify-between items-center h-16 bg-slate-200
    dark:bg-slate-600 dark:text-slate-50 fixed z-30 top-0 right-0 left-0"
    >
      <Link to='/' className="flex items-center gap-1 pr-2 cursor-pointer">
        <img
          className="w-12 h-12 dark:bg-slate-50 dark:rounded-lg ml-1"
          src={Logo}
          alt="logo"
        />
        <span className="font-semibold">فیلمکس</span>
      </Link>
      <div className="pl-4 text-xl cursor-pointer">
        <MdOutlineDarkMode className="dark:hidden" onClick={darkHandler} />
        <BiSun className="hidden dark:block" onClick={lightHandler} />
      </div>
    </header>
  );
};

export default Header;
