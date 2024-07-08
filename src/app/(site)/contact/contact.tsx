import React from "react";
import Link from "next/link";
import PageLabel from "@/components/page/label";
import Strings from "@/utils/constants/strings";
import { Icon } from "@iconify/react/dist/iconify.js";
import { contacts } from "@/utils/constants/data";

const Contact: React.FC = () => {
  return (
    <div>
      <PageLabel label={Strings.contact.title} />
      <div className="w-full flex flex-col gap-6 text-[#909090] py-10 px-0 sm:px-6 md:px-12 lg:px-6">
        <div className="flex flex-col gap-4 w-full text-center justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            {Strings.contact.lets}{" "}
            <span className="text-black">{Strings.contact.talk}</span>
          </h1>
          <p className="max-w-sm">{Strings.contact.desc}</p>
        </div>
        <div className="w-full lg:w-10/12 xl:w-7/12 lg:mx-auto shadow-2xl">
          <iframe
            className="w-full h-full aspect-video"
            src={Strings.contact.maps}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-10 mt-14 xs:px-10 sm:px-15 lg:px-25 w-full">
          {contacts.map((contact, index) => (
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border dark:border-[#909090] p-7 flex flex-col justify-center items-center transition-all ease-in-out duration-[500ms] hover:bg-black hover:text-white hover:scale-[1.03]"
            >
              <Icon
                icon={contact.icon}
                className="text-[#909090] dark:text-[#909090]-dark transition-colors-linear w-16 h-16 p-4"
              />

              <span className="sm:hidden 2xl:inline-block">{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
