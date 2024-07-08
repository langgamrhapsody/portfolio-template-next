import React, { FC } from "react";

const PageLabel: FC<{ label: string }> = ({ label }) => {
  return (
    <div className="bg-[#efefef] font-montserrat p-3 text-sm flex justify-center items-center w-max uppercase font-bold">
      {label}
    </div>
  );
};

export default PageLabel;
