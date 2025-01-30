import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-[810px] self-stretch overflow-hidden pb-[336px] pl-[120px] pr-[121px] pt-[161px] text-center text-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(9, 17, 33, 0.80) 0%, rgba(9, 17, 33, 0.80) 100%)",
      }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Top Overlay */}
      <div
        className="absolute inset-0 z-10 bg-opacity-80"
        style={{
          background: "rgba(9, 17, 33, 0.8)", // #091121 with 80% transparency
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 inline-flex flex-col items-center gap-[50px]">
        {/* Main Heading */}
        <div className="flex flex-col items-center gap-[18px]">
          {/* First heading */}
          <h1 className="w-[1199px] text-center text-size-1 font-medium">
            Redefining Smart Cities using
          </h1>
          {/* Second heading */}
          <h1
            className="bg-clip-text text-size-1 font-medium text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.31) 0%, rgba(255, 255, 255, 0.31) 100%), linear-gradient(216deg, #552DDA 5.71%, #507BD0 57.84%)",
            }}
          >
            Artificial Intelligence
          </h1>
        </div>
        {/* Let's talk button */}
        <button className="flex items-center justify-center gap-[11px] rounded-[10px] bg-gradient-to-b from-[#552DDA] to-[#1D3E80] px-[20px] py-[14px] text-center shadow-[0px_0px_35.7px_rgba(81,68,220,0.97)]">
          <button className="text-size-5 font-normal">Let&apos;s talk</button>
          <MoveUpRight width={16.576} height={16.576} />
        </button>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-[87px] left-1/2 z-20 inline-flex w-[523.724px] -translate-x-1/2 flex-col items-start justify-center gap-[64px]">
        <div className="flex w-[524px] flex-col items-center gap-[16px]">
          {/* Paragraph */}
          <p className="text-size-5 font-normal opacity-90">
            IN PARTNERSHIP WITH
          </p>
          {/* Image container */}
          <div className="flex items-center gap-[62px]">
            {/* Image 1 */}
            <Image
              src={"/hero/ntdp.png"}
              alt="Ntdp image"
              width={53}
              height={54}
            />
            {/* Image 2 */}
            <Image
              src={"/hero/sdaia.png"}
              alt="Sdaia image"
              width={108}
              height={24}
            />
            {/* Image 3 */}
            <Image
              src={"/hero/nstp.png"}
              alt="Nstp image"
              width={54}
              height={54}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
