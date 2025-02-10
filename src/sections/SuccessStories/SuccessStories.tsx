"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import StoriesCard from "./StoriesCard";

export default function SuccessStories() {
  const stories = [
    {
      image: "/successStories/coverPhoto_1.png",
      category: "GeoHealth",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback.",
    },
    {
      image: "/successStories/coverPhoto_2.png",
      category: "Manufacturing",
      title: "Project 2",
      description:
        "Manufacturers are achieving remarkable gains in productivity with our preventive maintenance system.",
    },
    {
      image: "/successStories/coverPhoto_3.png",
      category: "Health Care",
      title: "Project 3",
      description:
        "Healthcare providers are witnessing notable enhancements in service quality with our platform.",
    },
    {
      image: "/successStories/coverPhoto_1.png",
      category: "GeoHealth",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback.",
    },
    {
      image: "/successStories/coverPhoto_2.png",
      category: "Manufacturing",
      title: "Project 2",
      description:
        "Manufacturers are achieving remarkable gains in productivity with our preventive maintenance system.",
    },
    {
      image: "/successStories/coverPhoto_3.png",
      category: "Health Care",
      title: "Project 3",
      description:
        "Healthcare providers are witnessing notable enhancements in service quality with our platform.",
    },
    {
      image: "/successStories/coverPhoto_1.png",
      category: "GeoHealth",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback.",
    },
    {
      image: "/successStories/coverPhoto_2.png",
      category: "Manufacturing",
      title: "Project 2",
      description:
        "Manufacturers are achieving remarkable gains in productivity with our preventive maintenance system.",
    },
    {
      image: "/successStories/coverPhoto_3.png",
      category: "Health Care",
      title: "Project 3",
      description:
        "Healthcare providers are witnessing notable enhancements in service quality with our platform.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 3; // Number of items visible (and scrolled per click)

  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setMaxScroll(container.scrollWidth - container.clientWidth);
      const handleScrollEvent = () => {
        setScrollPos(container.scrollLeft);
      };
      container.addEventListener("scroll", handleScrollEvent);
      return () => container.removeEventListener("scroll", handleScrollEvent);
    }
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const cardWrapper = containerRef.current.firstElementChild as HTMLElement;
      if (cardWrapper) {
        const cardWidth = cardWrapper.offsetWidth;
        const gap = 24; // gap-[24px]
        const scrollDistancePerCard = cardWidth + gap;
        const scrollDistance = scrollDistancePerCard * itemsPerPage;
        containerRef.current.scrollBy({
          left: direction === "right" ? scrollDistance : -scrollDistance,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="bg-black px-[16px] py-[140px] text-white lg:px-[70px]">
      <div className="flex flex-col items-start gap-[24px] self-stretch lg:gap-[64px]">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-[48px] self-stretch lg:justify-between">
          <h1 className="text-size-3 font-normal lg:text-size-2">
            Our Success Stories
          </h1>

          {/* Navigation Buttons */}
          <div className="hidden gap-[10px] lg:flex">
            <button
              onClick={() => handleScroll("left")}
              disabled={scrollPos <= 0}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
            >
              <Image
                src="/successStories/left.png"
                alt="Arrow Left"
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={scrollPos >= maxScroll - 1}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
            >
              <Image
                src="/successStories/right.png"
                alt="Arrow Right"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* Success Stories Grid Section */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-[26px] py-[5px] md:grid-cols-2 md:gap-[24px] lg:flex lg:overflow-x-auto lg:scroll-smooth"
          style={{ scrollbarWidth: "none" }} // For Firefox
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 md:w-[48%] lg:w-[calc((100%-48px)/3)]"
            >
              <StoriesCard
                image={story.image}
                category={story.category}
                title={story.title}
                description={story.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar for WebKit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
