import Image from "next/image";

export default function Statistics() {
  return (
    <section
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/statistics/bg.png)" }}
    >
      <div className="flex items-start gap-[10px] self-stretch py-[70px] pr-[120px]">
        {/* Added w-full so the parent’s justify-between works correctly */}
        <div className="bg-lightgray flex h-[551px] w-full items-center justify-between">
          {/* Child #1 (large block) – Added flex-none */}
          <div className="flex h-[490px] w-[632px] flex-none flex-shrink-0 flex-col items-end justify-center gap-[10px] p-[48px]">
            <div className="flex h-[490px] w-[776px] flex-none flex-shrink-0 flex-col items-end justify-center gap-[10px] rounded-br-[150px] rounded-tr-[150px] bg-[linear-gradient(to_right,#4935FF,#020F12)] p-[48px] shadow-[0_4px_50px_20px_rgba(26,54,163,0.90)]">
              {/* Added flex-none so the container stays exactly 493px */}
              <div className="flex w-[493px] flex-none flex-col items-center gap-[10px]">
                <div className="flex w-[69px] flex-col justify-center bg-gradient-to-b from-[#9B81F0] to-[#738DC2] bg-clip-text text-center text-[36px] font-bold text-transparent">
                  CO₂
                </div>
                <div className="text-[120px] font-semibold">32.5MT</div>
                <div className="text-center text-[26px] font-normal opacity-70">
                  Emissions Reduced
                </div>
              </div>
            </div>
          </div>

          {/* Child #2 (first set of two circles) – Added flex-none */}
          <div className="inline-flex flex-none flex-col items-start gap-[85px]">
            <div className="flex h-[240px] w-[240px] flex-col items-center justify-center gap-[10px] rounded-[200px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[32px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)]">
              <Image
                src={"/statistics/query_stats.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">03+</div>
              <div className="text-center text-size-6 font-normal">
                Years of Growth
              </div>
            </div>
            <div className="flex h-[240px] w-[240px] flex-col items-center justify-center gap-[10px] rounded-[200px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[32px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)]">
              <Image
                src={"/statistics/home_work.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">03</div>
              <div className="text-center text-size-6 font-normal">
                Global Office
              </div>
            </div>
          </div>

          {/* Child #3 (second set of two circles) – Added flex-none */}
          <div className="inline-flex flex-none flex-col items-start gap-[85px]">
            <div className="flex h-[240px] w-[240px] flex-col items-center justify-center gap-[10px] rounded-[200px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[32px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)]">
              <Image
                src={"/statistics/emoji_objects.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">6</div>
              <div className="text-center text-size-6 font-normal">
                Products Cultivated
              </div>
            </div>
            <div className="flex h-[240px] w-[240px] flex-col items-center justify-center gap-[10px] rounded-[200px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[32px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)]">
              <Image
                src={"/statistics/emoji_objects.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">6</div>
              <div className="text-center text-size-6 font-normal">
                Products Cultivated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
