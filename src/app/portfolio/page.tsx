import Image from "next/image";
import Button from "../../components/Button";

export default function PortfolioPage() {
  const projects = [
    {
      title: "YouTube Video Analyst Bot",
      description:
        "An AI-powered tool that transforms YouTube video content into insights by automatically extracting, summarizing, and generating multi-format scripts with advanced natural language processing technologies.",
      image: "/portfolio/youtube_video_analyst_bot.png",
      type: "AI",
    },
    {
      title: "Smart Gate Security System at NUST Gate 2",
      description:
        "Advanced security system that integrates vehicle identification, personnel verification, and time tracking to create a comprehensive gate security solution.",
      image: "/portfolio/smart_gate_security_system.png",
      type: "AI",
    },
    {
      title: "RetroFam",
      description:
        "A high-performance e-commerce platform for vintage and retro-inspired products, featuring advanced frontend, seamless integrations, and robust backend systems.",
      image: "/portfolio/retrofarm.png",
      type: "Video",
    },
    {
      title: "Apocryphal Writings",
      description:
        "A comprehensive MERN stack platform revolutionizing Bible study with immersive tools, personalized annotations, and robust content management.",
      image: "/portfolio/apocryphal_writings.png",
      type: "AI",
    },
    {
      title: "GeoHealth",
      description:
        "An AI-powered exercise monitoring platform using YOLOv8 for real-time pose detection, form correction, and personalized fitness analytics, deployed on Vercel.",
      image: "/portfolio/geohealth.png",
      type: "AI",
    },
    {
      title: "BrandSocial.ai",
      description:
        "An AI-powered social media management platform integrating intelligent automation, content generation, and analytics for streamlined campaign management.",
      image: "/portfolio/brandsocialai.png",
      type: "AI",
    },
    {
      title: "Zian.ai",
      description:
        "An advanced content generation platform leveraging AI, React, and TypeScript to automate high-quality article creation with seamless multi-platform integration.",
      image: "/portfolio/zianai.png",
      type: "AI",
    },
    {
      title: "SmartTraffic",
      description:
        "An AI-powered system using YOLOv8 and machine learning to optimize traffic signal timings in real-time, reducing congestion and enhancing urban mobility.",
      image: "/portfolio/smarttraffic.png",
      type: "AI",
    },
  ];

  return (
    <section className="flex flex-col gap-[44px] bg-black px-[16px] py-[80px] text-white sm:px-[40px] lg:px-[70px] lg:py-[140px]">
      {/* Services Header */}
      <div className="flex flex-col items-start gap-[64px]">
        <h1 className="text-3xl font-normal lg:text-size-2">Our Portfolio</h1>
      </div>

      {/* Projects Grid Container: 2 cards per row */}
      <div className="grid grid-cols-1 gap-[32px] self-stretch xl:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-[24px] rounded-[32px] border-borderCustom bg-bg p-[20px] shadow-shadowCustom sm:grid-cols-2 xl:h-[239px] 2xl:h-[229px]"
          >
            {/* Image Container */}
            <div
              className="flex h-[200px] flex-col items-start gap-[10px] rounded-[18px]"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={285}
                height={200}
                className="h-full w-full rounded-[20px] object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col items-start justify-between">
              <div className="flex flex-col items-start gap-[14px] self-stretch">
                <div className="flex items-center gap-[6px] self-stretch">
                  <h1 className="text-xl font-semibold sm:text-size-3">
                    {project.title}
                  </h1>
                  <div className="flex h-[24px] w-[24px] items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-[24px] w-[24px] flex-shrink-0"
                    >
                      <path
                        d="M17 7L7 17"
                        stroke="white"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 7H17V16"
                        stroke="white"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="self-stretch font-normal opacity-70 xl:text-[12px] 2xl:text-size-6">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between self-stretch">
                <div className="flex items-center justify-end gap-[20px]">
                  <Image
                    src="/portfolio/nodejs.png"
                    alt="Nodejs"
                    width={32}
                    height={32}
                    className="xl:h-[27px] xl:w-[27px] 2xl:h-[32px] 2xl:w-[32px]"
                  />
                  <Image
                    src="/portfolio/mongodb.png"
                    alt="MongoDB"
                    width={32}
                    height={32}
                    className="xl:h-[27px] xl:w-[27px] 2xl:h-[32px] 2xl:w-[32px]"
                  />
                  <Image
                    src="/portfolio/react.png"
                    alt="React"
                    width={32}
                    height={32}
                    className="xl:h-[27px] xl:w-[27px] 2xl:h-[32px] 2xl:w-[32px]"
                  />
                </div>
                <span className="w-[29px] text-base font-normal opacity-90 sm:text-size-6">
                  {project.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Talent Section */}
      <div className="flex items-center justify-center px-[16px] py-[80px] sm:px-[40px] lg:px-[70px] lg:py-[160px]">
        <div
          className="relative h-[160px] w-full overflow-hidden rounded-[32px] bg-cover bg-no-repeat sm:h-[209px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]"
          style={{
            backgroundImage: "url('/portfolio/portfolio_call_to_action.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-[16px] text-center sm:gap-[24px]">
            {/* Text */}
            <p
              className="text-2xl font-bold text-[#FBFBFB] sm:text-[45px]"
              style={{ fontFamily: "Roboto Serif" }}
            >
              Enough talk, let&apos;s get to work
            </p>
            {/* Button */}
            <Button variant="gradient">Let&apos;s Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
