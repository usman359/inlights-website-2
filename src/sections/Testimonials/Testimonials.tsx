"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import TestimonialsBackground from "./TestimonialsBackground";
import TestimonialsBackgroundNew from "./TestimonialsBackgroundNew";

interface TestimonialProps {
  newBackground?: boolean;
}

export default function Testimonials({
  newBackground = false,
}: TestimonialProps) {
  const testimonials = [
    {
      text: "InLights Solutions has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
      name: "Cameron Williamson",
      role: "CEO",
      image: "/testimonials/ellipse.png",
    },
    {
      text: "Our productivity increased significantly after implementing InLights Solutions. The automation features are a game-changer for our workflow efficiency.",
      name: "Leslie Alexander",
      role: "CTO",
      image: "/testimonials/ellipse.png",
    },
    {
      text: "The best investment we made this year! InLights Solutions optimized our operations beyond expectations. Highly recommended!",
      name: "Michael Johnson",
      role: "Founder",
      image: "/testimonials/ellipse.png",
    },
    {
      text: "Our productivity increased significantly after implementing InLights Solutions. The automation features are a game-changer for our workflow efficiency.",
      name: "Leslie Alexander",
      role: "CTO",
      image: "/testimonials/ellipse.png",
    },
    {
      text: "The best investment we made this year! InLights Solutions optimized our operations beyond expectations. Highly recommended!",
      name: "Michael Johnson",
      role: "Founder",
      image: "/testimonials/ellipse.png",
    },
  ];

  // State for animation control
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Two separate refs for mobile and desktop sliders
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const desktopSliderRef = useRef<HTMLDivElement>(null);

  // When reaching the cloned slide, reset the slider to the real first slide.
  const handleTransitionEnd = () => {
    if (currentIndex === testimonials.length) {
      if (mobileSliderRef.current) {
        mobileSliderRef.current.style.transition = "none";
        mobileSliderRef.current.style.transform = `translateX(0%)`;
      }
      if (desktopSliderRef.current) {
        desktopSliderRef.current.style.transition = "none";
        desktopSliderRef.current.style.transform = `translateX(0%)`;
      }
      setCurrentIndex(0);
      if (mobileSliderRef.current) {
        void mobileSliderRef.current.offsetWidth;
        mobileSliderRef.current.style.transition = "transform 0.5s ease-in-out";
      }
      if (desktopSliderRef.current) {
        void desktopSliderRef.current.offsetWidth;
        desktopSliderRef.current.style.transition =
          "transform 0.5s ease-in-out";
      }
    }
  };

  // Move to the next testimonial
  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Move to the previous testimonial (only if one exists)
  const previousTestimonial = () => {
    if (isTransitioning || currentIndex === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative overflow-hidden lg:px-[70px] lg:py-[160px]">
      {/* Background SVG (placed behind content) */}
      <div className="absolute inset-0 left-0 top-0 z-10 hidden lg:block">
        {!newBackground ? (
          <TestimonialsBackground />
        ) : (
          <TestimonialsBackgroundNew />
        )}
      </div>

      <div className="flex flex-col items-center self-stretch bg-bg px-[16px] py-[32px] lg:gap-[64px] lg:bg-transparent">
        <div className="hidden flex-col items-center gap-[8px] lg:flex">
          <h1 className="w-[864px] text-center text-size-2 font-normal">
            Don&apos;t take our word, see what customers say about us
          </h1>
        </div>

        {/* Mobile Slider (375 pixels) */}
        <div className="relative flex w-[375px] px-[16px] lg:hidden">
          <div className="relative flex flex-col gap-[24px] overflow-hidden">
            <div
              ref={mobileSliderRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex min-w-full flex-col items-center justify-center gap-[24px]"
                >
                  <div className="flex flex-col items-center justify-center gap-[24px]">
                    <h1 className="text-center text-size-7 leading-[20px] opacity-80">
                      {testimonial.text}
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[16px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="rounded-[32px]"
                    />
                    <div className="flex flex-col items-center justify-center gap-[4px]">
                      <h1 className="text-size-6 font-normal leading-[20px]">
                        {testimonial.name}
                      </h1>
                      <span className="text-size-7 font-normal leading-[20px]">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Cloned First Testimonial for Seamless Loop */}
              <div className="flex min-w-full flex-col items-center justify-center gap-[24px]">
                <div className="flex flex-col items-center justify-center gap-[24px]">
                  <h1 className="text-center text-size-7 opacity-80">
                    {testimonials[0].text}
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-[16px]">
                  <Image
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    width={32}
                    height={32}
                    className="rounded-[32px]"
                  />
                  <div className="flex flex-col items-center justify-center gap-[4px]">
                    <h1 className="text-size-6 font-normal">
                      {testimonials[0].name}
                    </h1>
                    <span className="text-size-7 font-normal">
                      {testimonials[0].role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="flex items-start justify-center gap-[16px]">
              <button
                onClick={previousTestimonial}
                className={`flex items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity ${
                  currentIndex === 0
                    ? "pointer-events-none cursor-not-allowed opacity-50"
                    : "hover:opacity-80"
                }`}
              >
                <ArrowLeft width={24} height={24} stroke="currentColor" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity hover:opacity-80"
              >
                <ArrowRight width={24} height={24} stroke="currentColor" />
              </button>
            </div>

            {/* Mobile Pagination Dots */}
            <div className="flex justify-center">
              <div className="flex flex-row items-center gap-[6px]">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[6px] rounded-[97px] transition-all duration-300 ${
                      i === currentIndex % testimonials.length
                        ? "w-[18px] bg-white"
                        : "w-[6px] bg-[#929CAB]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Slider (1024 pixels and above) */}
        <div className="relative z-50 hidden flex-col items-center justify-center gap-[40px] rounded-[32px] border-[1px] border-borderCustom bg-bg p-[48px] shadow-shadowCustom lg:flex lg:w-[900px] xl:w-[1200px] 2xl:w-[1300px]">
          <div className="flex items-center self-stretch">
            {/* Left Arrow */}
            <button
              onClick={previousTestimonial}
              className={`flex items-center gap-[10px] rounded-[50px] bg-bg p-[10px] transition-opacity ${
                currentIndex === 0
                  ? "pointer-events-none cursor-not-allowed opacity-50"
                  : "hover:opacity-80"
              }`}
            >
              <ArrowLeft width={24} height={24} stroke="currentColor" />
            </button>

            {/* Testimonial Slider */}
            <div className="relative overflow-hidden">
              <div
                ref={desktopSliderRef}
                onTransitionEnd={handleTransitionEnd}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex min-w-full flex-col items-center justify-center gap-[32px]"
                  >
                    <p className="self-stretch text-center text-[23.2px] font-light opacity-80">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-[16px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={42}
                        height={42}
                        className="rounded-[42px]"
                      />
                      <div className="flex flex-col items-center gap-[4px]">
                        <div className="text-size-5 font-medium">
                          {testimonial.name}
                        </div>
                        <div className="text-size-7 font-normal">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Cloned First Testimonial for Seamless Loop */}
                <div className="flex min-w-full flex-col items-center justify-center gap-[32px]">
                  <p className="self-stretch text-center text-[24px] font-normal opacity-80">
                    {testimonials[0].text}
                  </p>
                  <div className="flex flex-col items-center justify-center gap-[16px]">
                    <Image
                      src={testimonials[0].image}
                      alt={testimonials[0].name}
                      width={42}
                      height={42}
                      className="rounded-[42px]"
                    />
                    <div className="flex flex-col items-center gap-[4px]">
                      <div className="text-size-5 font-medium">
                        {testimonials[0].name}
                      </div>
                      <div className="text-size-7 font-normal">
                        {testimonials[0].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="mt-8 flex items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity hover:opacity-80"
            >
              <ArrowRight width={24} height={24} stroke="currentColor" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex -rotate-[90deg] flex-col items-start gap-[6px]">
            <div className="flex rotate-[90deg] flex-row items-center gap-[6px]">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-[6px] rounded-[97px] transition-all duration-300 ${
                    i === currentIndex % testimonials.length
                      ? "w-[18px] bg-white"
                      : "w-[6px] bg-[#929CAB]"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
