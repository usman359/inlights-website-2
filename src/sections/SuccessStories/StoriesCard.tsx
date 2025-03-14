import Underline from "@/components/Underline";
import Image from "next/image";
import { useState, useEffect } from "react";

interface StoriesCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function StoriesCard({
  title,
  category,
  description,
  image,
}: StoriesCardProps) {
  // State to toggle category visibility on mobile
  const [showCategory, setShowCategory] = useState(false);
  // Determine if device is mobile (<1024px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="relative flex w-full flex-col items-start gap-[34px] rounded-[32px] border-[1px] border-borderCustom bg-bg shadow-shadowCustom transition-all duration-300"
      onClick={() => {
        if (isMobile) setShowCategory((prev) => !prev);
      }}
    >
      {/* Image with overlay */}
      <div
        className="relative flex h-[174px] flex-shrink-0 flex-col items-center justify-center gap-[10px] self-stretch overflow-hidden rounded-[18px] bg-cover bg-center lg:rounded-[20px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Fixed overlay */}
        <div className="absolute inset-0 bg-[rgba(18,19,22,0.46)] backdrop-blur-[1px]"></div>
        {isMobile ? (
          <span
            className={`relative z-10 text-size-4 font-normal leading-normal transition-all duration-500 ${
              showCategory
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            }`}
          >
            {category}
          </span>
        ) : (
          <span className="relative z-10 text-size-4 font-normal leading-normal">
            {category}
          </span>
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col items-start gap-[14px] self-stretch px-[24px] pb-[24px]">
        <h1 className="line-clamp-1 self-stretch text-size-4 font-bold lg:text-size-3">
          {title}
        </h1>
        <p className="line-clamp-2 overflow-hidden text-size-7 font-normal leading-[20px] text-white opacity-70 lg:text-size-6">
          {description}
        </p>
        <div className="group flex w-fit cursor-pointer items-center gap-[9px] self-stretch py-[8px]">
          <span className="relative text-size-7 font-normal">
            Read More
            <Underline />
          </span>
          <div className="relative flex h-[15px] w-[15px] items-center justify-center">
            <Image
              src="/successStories/up_arrow.png"
              fill
              alt="arrow right"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
