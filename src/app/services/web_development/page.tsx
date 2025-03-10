import CallToAction2 from "@/sections/CallToAction/CallToAction2";
import Image from "next/image";

export const metadata = {
  title: "Inlights | Services | Web Development",
  description: "Redefining Smart Cities using AI",
};

export default function WebDevelopmentPage() {
  return (
    <div className="relative self-stretch bg-[#050919]">
      {/* <div className="h-[687px] bg-[linear-gradient(0deg,rgba(9,17,33,0.32)_0%,rgba(9,17,33,0.32)_100%),url('/services/web_development/about_hero_sm.png')] bg-cover bg-center bg-no-repeat sm:bg-[linear-gradient(0deg,rgba(9,17,33,0.32)_0%,rgba(9,17,33,0.32)_100%),url('/services/web_development/about_hero_lg.png')] lg:h-[685px]"> */}
      <div className="h-[687px] bg-[linear-gradient(0deg,rgba(9,17,33,0.12)_0%,rgba(9,17,33,0.12)_100%),url('/services/this_is_engineering_sm.png')] bg-cover bg-center bg-no-repeat sm:bg-[linear-gradient(0deg,rgba(9,17,33,0.32)_0%,rgba(9,17,33,0.32)_100%),url('/about/about_hero.png')] lg:min-h-screen">
        {/* Hero Section */}
        {/* <div className="mx-auto flex h-[685px] w-full max-w-[1440px] flex-col gap-[16px] self-stretch pt-[100px] lg:h-[839.499px] lg:flex-row lg:justify-between lg:pr-[71.17px] lg:pt-[198px]"> */}
        <div className="mx-auto flex h-[685px] w-full max-w-[1440px] flex-col gap-[16px] self-stretch pt-[100px] lg:h-[839.499px] lg:flex-row lg:items-center lg:justify-between lg:pr-[71.17px] lg:pt-0">
          <div className="mx-auto flex w-[319px] flex-col items-center gap-[17.612px] lg:w-[452px] lg:items-start xl:w-[552px] 2xl:w-[652px]">
            <h1 className="text-size-3 font-semibold lg:text-size-2 lg:font-medium">
              Web Development
            </h1>
            <p className="text-start text-size-6 font-normal opacity-70 lg:text-start lg:text-size-4">
              Attracting and retaining customers in today&apos;s digital age
              requires a strong online presence. A website that is visually
              appealing, easy to navigate, and optimized for search engines is
              essential to building your brand and reaching your target
              audience. Our web development services can help you achieve all of
              these goals and more. Our web development services include
              everything from initial planning and design to development,
              testing, and deployment. We use the latest web technologies to
              create websites that are responsive, fast-loading, and optimized
              for search engines. We also offer ongoing maintenance and support
              to ensure that your website remains up-to-date and secure.
            </p>
          </div>

          <div
            className="relative mx-auto mt-auto h-[197.426px] w-[246.173px] flex-shrink-0 lg:mt-0 lg:h-[330px] lg:w-[373.827px] xl:w-[423.827px] 2xl:h-[380px] 2xl:w-[473.827px]"
            style={{
              backgroundImage: "url(/services/web_development/rectangle.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute left-[10px] top-[18px] z-10 h-[168.178px] w-[168.178px] flex-shrink-0 lg:left-[15px] lg:top-[30px] lg:h-[273.704px] lg:w-[263.704px] xl:h-[323.704px] xl:w-[293.704px] 2xl:left-[20px] 2xl:top-[35px] 2xl:w-[323.704px]">
              <Image
                src={"/services/laptop.png"}
                alt="Laptop"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -right-[10px] -top-[10px] h-[133.242px] w-[133.242px] flex-shrink-0 lg:-right-[15px] lg:-top-[15px] lg:h-[206.461px] lg:w-[196.461px] xl:w-[226.461px] 2xl:-right-[20px] 2xl:-top-[20px] 2xl:h-[256.461px] 2xl:w-[256.461px]">
              <Image
                src={"/services/tablet.png"}
                alt="Tablet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech section */}
      {/* <div className="flex h-[681px] w-full flex-col items-start justify-center gap-[10px] self-stretch py-[120px] lg:bg-[url('/statistics/bg.png')] lg:bg-cover lg:bg-no-repeat"> */}
      <div className="flex min-h-screen w-full flex-col items-start justify-center gap-[10px] self-stretch py-[120px] lg:bg-[url('/statistics/bg.png')] lg:bg-cover lg:bg-no-repeat">
        <div className="mx-auto flex w-[249px] flex-col items-center gap-[26px] lg:w-full lg:gap-[40px]">
          <h1 className="hidden text-[44px] font-normal lg:block">
            Our Tech Stack
          </h1>
          <h1 className="block text-[24px] font-medium lg:hidden">
            Stacks Used
          </h1>
          <div className="grid grid-cols-2 items-start gap-[16px] lg:grid-cols-4 lg:gap-[44px] 2xl:gap-[64px]">
            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <div className="relative h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]">
                <Image
                  src="/services/web_development/nodejs.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                NodeJS
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <div className="relative h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]">
                <Image
                  src="/services/web_development/express.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                Express
              </span>
            </div>
            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <div className="relative h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]">
                <Image
                  src="/services/web_development/react.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                React
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <div className="relative h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]">
                <Image
                  src="/services/web_development/mongodb.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                MongoDB
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/web_development/nodejs.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                NodeJS
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/web_development/express.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                Express
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/web_development/react.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                React
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/web_development/mongodb.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Talent Section 375 pixels with higher z-index */}
      <CallToAction2
        mobilePaddingTop="74px"
        mobilePaddingBottom="75px"
        desktopPaddingTop="160px"
        desktopPaddingBottom="160px"
        isBackground={true}
      />
    </div>
  );
}
