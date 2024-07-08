import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageLabel from "@/components/page/label";
import Strings from "@/utils/constants/strings";
import { portfolios } from "@/utils/constants/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Portfolio: React.FC = () => {
  return (
    <div>
      <PageLabel label={Strings.portfolio.title} />
      <div className="w-full flex flex-col gap-6 text-[#909090] py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            {Strings.portfolio.my}
            <span className="text-black">{Strings.portfolio.work}</span>
          </h1>
          <p>{Strings.portfolio.desc}</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolios.map((porto, index) => (
            <div key={index}>
              <div className="group block relative overflow-hidden rounded-xl transition-all ease-in-out duration-300 hover:shadow-xl">
                <div className="w-full h-full transition-all ease-in-out duration-300">
                  <img
                    className=" w-full h-auto group-hover:brightness-50 brightness-100 object-cover object-center transition-all ease-in-out duration-300 grayscale group-hover:grayscale-0"
                    src={porto.img}
                    alt={porto.name}
                  />
                </div>
                <div className="bg-white w-full absolute bottom-[-150px] gap-2 p-4 transition-all ease-in-out duration-300 group-hover:bottom-[0] flex justify-between">
                  <p className="font-bold text-base min-h-[3rem] line-clamp-4 w-1/2">
                    {porto.name}
                  </p>

                  <div className="h-auto flex flex-col w-1/2 gap-2 items-center justify-center">
                    <a
                      href={porto.link}
                      target="_blank"
                      className="w-full p-2 rounded-xl border text-sm flex justify-between items-center hover:bg-black hover:text-white transition-all ease-in-out duration-300 group"
                    >
                      {Strings.portfolio.visit}
                      <Icon
                        key={index}
                        icon="entypo:direction"
                        className="w-7 h-7 text-inherit group-hover:scale-110 "
                      />
                    </a>

                    <a
                      href={porto.github}
                      target="_blank"
                      className="w-full p-2 rounded-xl border text-sm flex justify-between items-center hover:bg-black hover:text-white transition-all ease-in-out duration-300 group"
                    >
                      {Strings.portfolio.source}{" "}
                      <Icon
                        key={index}
                        icon="mdi:github"
                        className="w-7 h-7 text-inherit group-hover:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
