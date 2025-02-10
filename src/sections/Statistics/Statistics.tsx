import Image from "next/image";

export default function Statistics() {
  return (
    <section
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/statistics/bg.png)" }}
    >
      <div className="flex items-start gap-[10px] self-stretch py-[70px] pr-[120px]">
        {/* Added w-full so the parent’s justify-between works correctly */}
        <div className="bg-lightgray flex h-[618px] w-full items-center justify-between lg:h-[551px]">
          {/* Child #1 (large block) – Added flex-none */}
          <div className="flex h-[127px] w-[418px] flex-shrink-0 flex-col items-end justify-center gap-[2.604px] py-[12.5px] pl-[12.5px] pr-[70px] lg:h-[490px] lg:w-[632px] lg:gap-[10px] lg:p-[48px]">
            <div className="flex h-[127px] w-[418px] flex-shrink-0 flex-col items-end justify-center gap-[2.604px] rounded-br-[39.063px] rounded-tr-[39.063px] bg-[linear-gradient(to_right,#4935FF,#020F12)] p-[48px] shadow-[0_4px_50px_20px_rgba(26,54,163,0.90)] lg:h-[490px] lg:w-[776px] lg:gap-[10px] lg:rounded-br-[150px] lg:rounded-tr-[150px]">
              {/* Added flex-none so the container stays exactly 493px */}
              <div className="flex w-[128.385px] flex-col items-center gap-[2.604px] lg:w-[493px] lg:gap-[10px]">
                <h1 className="flex w-[24px] flex-col justify-center bg-gradient-to-b from-[#9B81F0] to-[#738DC2] bg-clip-text text-center text-[12.522px] font-bold text-transparent lg:w-[69px] lg:text-[36px]">
                  CO₂
                </h1>
                <div className="text-[31.25px] font-semibold lg:text-[120px]">
                  32.5MT
                </div>
                <div className="text-center text-[12px] font-normal opacity-70 lg:text-[26px]">
                  Emissions Reduced
                </div>
              </div>
            </div>
          </div>

          {/* Child #2 (first set of two circles) – Added flex-none */}
          <div className="inline-flex flex-col items-center gap-[15px] lg:gap-[85px]">
            <div className="flex h-[240px] w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:w-[240px] lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px]">
              <Image
                src={"/statistics/query_stats.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="h-[14px] w-[14px] flex-shrink-0 opacity-70 lg:h-[36px] lg:w-[36px]"
              />
              <div className="text-center text-[15px] font-semibold lg:text-size-2">
                03+
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Years of Growth
              </div>
            </div>
            <div className="flex h-[240px] w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:w-[240px] lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px]">
              <Image
                src={"/statistics/home_work.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-[15px] font-semibold lg:text-size-2">
                03
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Global Office
              </div>
            </div>
          </div>

          {/* Child #3 (second set of two circles) – Added flex-none */}
          <div className="inline-flex flex-col items-center gap-[15px] lg:gap-[85px]">
            <div className="flex h-[240px] w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:w-[240px] lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px]">
              <Image
                src={"/statistics/emoji_objects.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-[15px] font-semibold lg:text-size-2">
                6
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Products Cultivated
              </div>
            </div>
            <div className="flex h-[240px] w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:w-[240px] lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px]">
              <Image
                src={"/statistics/emoji_objects.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-[15px] font-semibold lg:text-size-2">
                6
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Products Cultivated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
