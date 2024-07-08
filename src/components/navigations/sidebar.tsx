"use client";
import { useState, useEffect, FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { socialList } from "@/utils/constants/data";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import Strings from "@/utils/constants/strings";
import { navLinks } from "@/utils/constants/routes";
import { usePathname } from "next/navigation";

const Sidebar: FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isNavOpen]);

  return (
    <div className="flex max-h-screen overflow-hidden relative">
      <div
        className={`absolute z-[100] top-0 left-0 lg:relative w-full xs:w-10/12 sm:w-8/12 lg:w-[600px] h-screen shadow-2xl transition-all ease-in-out duration-[700ms] ${
          isNavOpen
            ? "left-0"
            : "left-[-100%] xs:left-[-83.333333%] sm:left-[-66.666667%] lg:left-0"
        }`}
      >
        <div className="relative w-full h-full bg-white lg:border-r border-[#e6e6e699]">
          <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex flex-col justify-center items-center">
              <p className="font-raleway font-bold text-5xl underline italic">
                {Strings.sidebar.title}
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center capitalize py-4 font-montserrat">
              {navLinks.map((links) => (
                <Link key={links.link} href={links.link}>
                  <span
                    onClick={toggleNav}
                    className={`cursor-pointer hover:tracking-widest hover:font-bold transition-all ease-in-out ${
                      pathname === links.link && "font-bold"
                    }`}
                  >
                    {links.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex gap-4 items-center justify-center">
              {socialList.map((social) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="hover:scale-110 transition-all ease-in-out"
                >
                  <Icon icon={social.icon} className="w-8 h-8" />
                </a>
              ))}
            </div>
            <div className="italic font-light text-sm text-center py-4">
              <p>
                {Strings.sidebar.description} <br /> {Strings.sidebar.by}{" "}
                <span className="font-normal">{Strings.sidebar.provider}</span>
              </p>
            </div>
            <div className="py-10">
              <button
                type="button"
                onClick={toggleNav}
                className="xs:hidden rounded-full w-10 h-10 border p-2 border-black flex justify-center items-center"
              >
                <ChevronDoubleLeftIcon className="w-full h-full text-black" />
              </button>
            </div>
          </div>
          <button
            onClick={toggleNav}
            className="rounded-button absolute top-1/2 -translate-y-1/2 right-[-42px] w-[42px] h-[10%] bg-white flex flex-col justify-center items-center p-3 lg:hidden text-[#909090] hover:text-black transition-all ease-in duration-300"
          >
            <ChevronDoubleRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        onClick={() => setIsNavOpen(false)}
        className={`w-full h-full overflow-hidden lg:hidden absolute bg-black transition-all ease-in-out duration-500 z-[98] bg-opacity-60 ${
          isNavOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>
      <div className="w-full min-h-screen overflow-hidden overflow-y-scroll p-8 bg-[#f8f8f8] relative z-10">
        <div className="w-full h-full pt-8 xs:p-8 lg:px-12 font-montserrat">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
