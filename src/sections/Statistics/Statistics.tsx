"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Statistics() {
  return (
    <section
      className="overflow-x-hidden bg-cover bg-center bg-no-repeat lg:min-h-screen"
      style={{ backgroundImage: "url(/statistics/bg.png)" }}
    >
      {/* <section
      className="overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/statistics/bg.png)" }}
    > */}
      {/* Centering Container */}
      <div className="flex flex-col items-center justify-center lg:min-h-screen">
        {/* <div className="flex flex-col items-center justify-center"> */}
        {/* Heading */}
        {/* <h1 className="text-size-3 font-medium text-white lg:text-size-2 lg:font-normal">
          Our Statistics
        </h1> */}
        {/* Content Container */}
        <div className="flex w-full items-start gap-[10px] self-stretch py-[10.229px] lg:py-[70px]">
          <div className="flex w-full flex-col items-center gap-[20px] lg:h-[541px] lg:flex-row lg:justify-between">
            {/* Mobile View (less than lg) - Single Large Block with Gradient and Shadow */}
            <div className="mr-[30px] flex w-full flex-shrink-0 flex-col items-center justify-center gap-[2.604px] px-[12.5px] py-[12.5px] lg:hidden">
              <div
                className="flex h-[127px] w-[100vw] flex-shrink-0 flex-col items-center justify-center gap-[2.604px] rounded-br-[39.063px] rounded-tr-[39.063px] p-[48px] shadow-[0px_0px_50px_0px_rgba(26,54,163,0.90)]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4935FF 0%, #020F12 55%)",
                }}
              >
                <div className="flex w-[128.385px] flex-col items-center gap-[2.604px]">
                  <h1 className="flex w-[24px] flex-col justify-center bg-gradient-to-b from-[#9B81F0] to-[#738DC2] bg-clip-text text-center text-[12.522px] font-bold text-transparent">
                    CO₂
                  </h1>
                  <div className="text-[31.25px] font-semibold text-white">
                    32.5MT
                  </div>
                  <div className="text-center text-[12px] font-normal text-white opacity-70">
                    Emissions Reduced
                  </div>
                </div>
              </div>
            </div>

            {/* Large Block (lg and above) - Same as your original */}
            <div className="hidden flex-shrink-0 flex-col items-end justify-center gap-[2.604px] py-[12.5px] pl-[12.5px] pr-[40px] lg:flex lg:w-[432px] lg:gap-[10px] lg:p-[0px] xl:w-[532px] 2xl:w-[572px]">
              <div
                className="flex h-[127px] w-[100vw] flex-shrink-0 flex-col items-center justify-center gap-[2.604px] rounded-br-[39.063px] rounded-tr-[39.063px] border-[1px] border-solid border-[rgba(45,160,184,0.15)] bg-[#020F12] p-[48px] shadow-[0px_0px_50px_0px_rgba(26,54,163,0.90)] lg:h-[450px] lg:w-full lg:gap-[10px] lg:rounded-br-[150px] lg:rounded-tr-[150px] 2xl:h-[490px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right,#283da5 0%, #020F12 100%)",
                  backgroundClip: "padding-box",
                }}
              >
                <div className="flex w-[128.385px] flex-col items-center gap-[2.604px] lg:w-[493px] lg:gap-[10px]">
                  <h1 className="flex w-[24px] flex-col justify-center bg-gradient-to-b from-[#9B81F0] to-[#738DC2] bg-clip-text text-center text-[12.522px] font-bold text-transparent lg:w-[69px] lg:text-[36px]">
                    CO₂
                  </h1>
                  <div className="text-[31.25px] font-semibold lg:text-[90px] xl:text-[100px] 2xl:text-[120px]">
                    32.5MT
                  </div>
                  <div className="text-center text-[12px] font-normal opacity-70 lg:text-[26px]">
                    Emissions Reduced
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Stats (less than lg) - Two columns of two boxes each */}
            <div className="flex items-center gap-[15px] px-[16px] sm:gap-[25px] md:gap-[35px] lg:hidden">
              {/* First box */}
              <div className="flex flex-col items-start gap-[20px]">
                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                  <div className="relative h-[22px] w-[22px] flex-shrink-0 opacity-70">
                    <Image
                      src={"/statistics/query_stats.png"}
                      alt={"Statistics 1"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center text-[15px] font-semibold">
                    03+
                  </div>
                  <div className="text-center text-size-7 font-normal leading-[5.208px]">
                    Years of Growth
                  </div>
                </div>

                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                  <div className="relative h-[22px] w-[22px] flex-shrink-0 opacity-70">
                    <Image
                      src={"/statistics/home_work.png"}
                      alt={"Statistics 1"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center text-[15px] font-semibold">
                    03
                  </div>
                  <div className="text-center text-size-7 font-normal leading-[5.208px]">
                    Global Offices
                  </div>
                </div>
              </div>

              {/* Second box */}
              <div className="flex flex-col items-start gap-[20px]">
                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                  <div className="relative h-[22px] w-[22px] flex-shrink-0 opacity-70">
                    <Image
                      src={"/statistics/emoji_objects.png"}
                      alt={"Statistics 1"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center text-[15px] font-semibold">6</div>
                  <div className="text-center text-size-7 font-normal leading-[5.208px]">
                    Products Cultivated
                  </div>
                </div>

                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                  <div className="relative h-[22px] w-[22px] flex-shrink-0 opacity-70">
                    <Image
                      src={"/statistics/emoji_objects.png"}
                      alt={"Statistics 2"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center text-[15px] font-semibold">
                    100,000+ hours
                  </div>
                  <div className="text-center text-size-7 font-normal leading-[5.208px]">
                    of traffic optimized
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Stats (lg and above) - Three columns of single boxes */}
            <div className="hidden flex-col items-center gap-[15px] lg:flex lg:gap-[85px]">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]"
              >
                <div className="relative h-[14px] w-[14px] flex-shrink-0 opacity-70 lg:h-[36px] lg:w-[36px]">
                  <Image
                    src={"/statistics/query_stats.png"}
                    alt={"Statistics 1"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center text-[30px] font-semibold 2xl:text-size-2">
                  03+
                </div>
                <div className="text-center text-size-7 font-normal lg:text-size-6">
                  Years of Growth
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]"
              >
                <div className="relative h-[14px] w-[14px] flex-shrink-0 opacity-70 lg:h-[36px] lg:w-[36px]">
                  <Image
                    src={"/statistics/home_work.png"}
                    alt={"Statistics 1"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center text-[30px] font-semibold 2xl:text-size-2">
                  03
                </div>
                <div className="text-center text-size-7 font-normal lg:text-size-6">
                  Global Offices
                </div>
              </motion.div>
            </div>

            {/* Second set of two circles for desktop (lg and above) */}
            <div className="mr-[70px] hidden flex-col items-center gap-[15px] lg:flex lg:gap-[85px] xl:mr-[140px]">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]"
              >
                <div className="relative h-[14px] w-[14px] flex-shrink-0 opacity-70 lg:h-[36px] lg:w-[36px]">
                  <Image
                    src={"/statistics/emoji_objects.png"}
                    alt={"Statistics 1"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center text-[30px] font-semibold 2xl:text-size-2">
                  6
                </div>
                <div className="text-center text-size-7 font-normal lg:text-size-6">
                  Products Cultivated
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]"
              >
                <div className="relative h-[14px] w-[14px] flex-shrink-0 opacity-70 lg:h-[36px] lg:w-[36px]">
                  <Image
                    src={"/statistics/emoji_objects.png"}
                    alt={"Statistics 1"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center text-[30px] font-semibold 2xl:text-[30px]">
                  100,000+
                </div>
                <div className="text-center text-size-7 font-normal lg:text-size-6">
                  of traffic optimized
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
