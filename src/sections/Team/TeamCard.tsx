import Image from "next/image";
import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

export default function TeamCard({ image, name, role }: TeamCardProps) {
  return (
    <div className="relative flex flex-col items-start gap-[16px]">
      {/* Image */}
      <div className="relative h-[300px] w-full overflow-hidden rounded-[16px] sm:h-[350px] md:h-[417px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Name and Role */}
      <div className="flex flex-col items-start gap-[10px]">
        <h1 className="text-center text-xl font-semibold sm:text-size-3">
          {name}
        </h1>
        <p className="text-center text-base font-normal opacity-80 sm:text-size-5">
          {role}
        </p>
      </div>

      {/* Social Icons */}
      <div className="absolute right-[13px] top-[15px] flex items-start gap-[8px]">
        <div className="flex cursor-pointer items-start gap-[7px]">
          <div className="relative h-[35px] w-[35px] rounded-full bg-[#FBFBFB]">
            <Image
              src="/team/facebook.png"
              alt="Linkedin"
              width={10}
              height={15}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[var(--Black,#0C0C0C)] stroke-[1.05px]"
            />
          </div>
        </div>
        <div className="flex cursor-pointer items-start gap-[7px]">
          <div className="relative h-[35px] w-[35px] rounded-full bg-[#FBFBFB]">
            <Image
              src="/team/instagram.png"
              alt="Linkedin"
              width={16}
              height={16}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[var(--Black,#0C0C0C)] stroke-[1.05px]"
            />
          </div>
        </div>
        <div className="flex cursor-pointer items-start gap-[7px]">
          <div className="relative h-[35px] w-[35px] rounded-full bg-[#FBFBFB]">
            <Image
              src="/team/linkedin.png"
              alt="Linkedin"
              width={14}
              height={14}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[var(--Black,#0C0C0C)] stroke-[1.05px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
