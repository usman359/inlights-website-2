import Underline from "@/components/Underline";
import Image from "next/image";
import React from "react";

interface DropDownCardProps {
  imageSrc: string;
  title: string;
  onClick: () => void;
}

export default function DropDownCard({
  imageSrc,
  title,
  onClick,
}: DropDownCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex h-[152px] cursor-pointer flex-col items-center justify-center gap-[16px] rounded-[24px] bg-[#03030E] p-[20px] shadow-shadowCustom lg:w-[143px] xl:w-[163px] 2xl:w-[183px]"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={40}
        height={40}
        className="flex-shrink-0"
      />
      <span className="relative font-normal lg:text-size-7 xl:text-size-6 2xl:text-size-6">
        {title}
        <Underline />
      </span>
    </div>
  );
}
