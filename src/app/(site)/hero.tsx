"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { homeIcon } from "@/utils/constants/data";
import Strings from "@/utils/constants/strings";

const TxtType = (
  el: any,
  textArray: string[],
  loopNum: number,
  period: number,
  txt: string,
  isDeleting: boolean
) => {
  el.querySelector(".type-ef")!.style.animation = null;
  const i = loopNum % textArray.length;
  const fullTxt = textArray[i];

  if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    txt = fullTxt.substring(0, txt.length + 1);
  }

  el.querySelector(".wrap")!.innerHTML = txt;

  let delta = 200 - Math.random() * 100;

  if (isDeleting) {
    delta /= 2;
  }

  if (!isDeleting && txt === fullTxt) {
    el.querySelector(".type-ef")!.style.animation = "typewrite infinite 1s";
    delta = period;
    isDeleting = true;
  } else if (isDeleting && txt === "") {
    el.querySelector(".type-ef")!.style.animation = "typewrite infinite 1s";
    isDeleting = false;
    loopNum++;
    delta = 1000;
  }

  setTimeout(() => {
    TxtType(el, textArray, loopNum, period, txt, isDeleting);
  }, delta);
};

const HeroSection: React.FC = () => {
  const typewriteRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typewriteRef.current) {
      TxtType(
        typewriteRef.current,
        [Strings.home.type_one, Strings.home.type_two],
        0,
        1500,
        "",
        false
      );
    }
  }, []);

  return (
    <div className="w-full grid place-items-center h-full relative z-50">
      <div className="text-[#909090] text-center flex flex-col gap-2 px-0 sm:px-6 md:px-12 lg:px-6 xl:px-24 justify-center items-center">
        <h1 className="text-4xl md:text-5xl pb-3 xs:pb-0">
          {Strings.home.hello} <br className="xs:hidden" /> {Strings.home.im}{" "}
          <span className="font-bold font-raleway underline italic pt-2 sm:pt-0 text-black">
            {Strings.home.name}
          </span>
        </h1>
        <span
          ref={typewriteRef}
          className="typewrite relative text-4xl md:text-5xl w-max min-h-[44px] hidden xs:inline-block"
        >
          <span className="hidden xs:inline-block pr-3">a</span>
          <span className="wrap animate-typewrite font-bold text-black"></span>
          <span className="type-ef absolute right-[-10px] top-[5px] bottom-[5px] w-[5px] bg-black text-inherit text-black"></span>
        </span>
        <div className="flex gap-4 justify-center items-center py-5">
          {homeIcon.map((icon, index) => (
            <Icon
              key={index}
              icon={icon}
              className="w-7 h-7 grayscale hover:grayscale-0 hover:scale-110 transition-all ease-in-out"
            />
          ))}
        </div>
        <p className="sm:px-2 md:px-12 pb-5">{Strings.home.desc}</p>
        <Link href="/contact">
          <span className="py-3 px-6 border border-black font-medium bg-transparent hover:bg-black text-black hover:text-white transition-all ease-in duration-300 cursor-pointer">
            {Strings.home.button}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
