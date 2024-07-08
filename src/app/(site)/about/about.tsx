import Link from "next/link";
import Image from "next/image";
import PageLabel from "@/components/page/label";
import Strings from "@/utils/constants/strings";
import { MapPinIcon } from "@heroicons/react/20/solid";

const About: React.FC = () => {
  return (
    <div className="h-full">
      <PageLabel label={Strings.about.title} />
      <div className="flex flex-col xl:flex-row gap-10 py-14 text-[#909090] xl:h-full items-center mx-auto">
        <div className="w-max xl:w-6/12 flex justify-center items-center overflow-hidden">
          <img
            src={Strings.about.img}
            alt={Strings.about.name}
            className="w-6/12 xl:w-[90%] h-auto aspect-square grayscale hover:grayscale-0 hover:scale-105 transition-all ease-in-out duration-300"
          />
        </div>
        <div className="w-full xl:w-6/12 h-auto flex justify-center items-center sm:items-start flex-col gap-4">
          <div className="hidden xs:flex gap-3 text-black transition-all ease-in-out duration-300 font-bold items-center">
            <MapPinIcon className="w-6 h-6" />
            <p>{Strings.about.location}</p>
          </div>
          <h1 className="text-4xl 2xl:text-5xl font-bold sm:text-left text-center">
            {Strings.about.my}{" "}
            <span className="text-black italic">{Strings.about.name}</span>
          </h1>
          <p className="italic w-full text-center sm:text-left">
            {Strings.about.desc}
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link href="/portfolio" passHref>
              <span className="px-6 py-2 border-2 font-bold hover:bg-[#909090] hover:text-white transition-all ease-in duration-200 text-center">
                {Strings.about.button_1}
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="px-6 py-2 border-2 bg-[#909090] text-white hover:bg-transparent hover:text-[#909090] transition-all ease-in duration-200 font-bold text-center">
                {Strings.about.button_2}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
