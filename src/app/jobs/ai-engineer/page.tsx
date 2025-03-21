"use client";

import Button from "@/components/Button";
import supabase from "@/lib/supabase";
import ContactBackground from "@/sections/Contact/ContactBackground";
import Image from "next/image";
import React, { useRef } from "react";
import toast from "react-hot-toast";

export default function AiEnginnerPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleLetsTalkClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const linkedinProfile = formData.get("linkedinProfile") as string;
    // For file input; additional logic is required to upload the file.
    const resume = formData.get("resume") as File;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !phone ||
      !address ||
      !address ||
      !linkedinProfile ||
      !resume
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      // Upload the resume to Supabase Storage
      const fileExt = resume.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, resume);

      // console.log(data);

      if (uploadError) {
        throw new Error("Error uploading resume: " + uploadError.message);
      }

      // Get the public URL of the uploaded file
      const {
        data: { publicUrl },
      } = supabase.storage.from("resumes").getPublicUrl(filePath);

      console.log(publicUrl);

      const { error } = await supabase.from("jobs").insert([
        {
          firstname,
          lastname,
          email,
          phone,
          address,
          linkedinProfile,
          resumeUrl: publicUrl,
        },
      ]);

      // console.log(data2);

      if (error) {
        throw new Error("Error inserting job application: " + error.message);
      }

      toast.success(
        "Thank you for applying! Your details have been submitted successfully.",
        {
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          iconTheme: {
            primary: "#4CAF50",
            secondary: "#fff",
          },
        },
      );
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Error submitting application: " + error.message);
      }
    }
  };

  return (
    <section className="relative flex flex-shrink-0 flex-col overflow-hidden bg-[#03030E] px-[16px] pb-[79px] pt-[99px] lg:px-[70px] lg:pb-[138px] lg:pt-[148px]">
      <div className="pointer-events-none absolute inset-0 left-0 top-0 z-10 hidden lg:flex">
        <ContactBackground />
      </div>
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[24px] lg:gap-[33px]">
        <div className="flex items-start justify-between self-stretch">
          <h1 className="text-size-3 font-medium lg:text-size-2">
            AI Engineer
          </h1>
          {/* <Button variant="gradient" icon={false}>
            Apply
          </Button> */}
        </div>

        <div className="flex w-[152px] flex-shrink-0 flex-col items-start gap-[20px] lg:hidden">
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <span className="text-size-6 font-normal">Department</span>
              <span className="text-size-6 font-normal text-white/50">
                Engineering
              </span>
            </div>
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <span className="text-size-6 font-normal">Experience</span>
              <span className="text-size-6 font-normal text-white/50">
                2-4 Years
              </span>
            </div>
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <span className="text-size-6 font-normal">City</span>
              <span className="text-size-6 font-normal text-white/50">
                Lahore
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between self-stretch">
          <div className="flex flex-col items-start gap-[20px] lg:w-[538px] xl:w-[738px] 2xl:w-[838px]">
            <h1 className="self-stretch text-size-3 font-semibold">
              Description
            </h1>
            <div className="flex flex-col items-start gap-[20px] self-stretch">
              <p className="self-stretch text-size-6 font-normal text-white/80">
                Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
                La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
                gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
                thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista
                irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
                thora Ista La Vista irtim gasiliaseLorem Ipsum thora Ista La
                Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                Ista La Vista irtim gasiliase Lorem Ipsum thora Ista La Vista
                irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum
                thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista
                irtim gasiliase Lorem Ipsum thora Ista La Vista irtim gasiliase
                Ipsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La
                Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliase
                Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
                La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
                gasiliaseIpsum thora Ista La Vista irtim gasiliase Lorem Ipsum
                thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista
                irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
                thora Ista La Vista irtim gasiliase
              </p>
              <ul className="list-disc pl-5 text-size-6 font-normal text-white/80">
                <li>
                  Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora
                  Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
                  thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista
                  irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
                  thora Ista La Vista irtim gasiliaseLorem Ipsum thora Ista La
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-[307px] items-start gap-[40px]">
            <div className="hidden h-[590px] w-[1px] bg-white/50 lg:block"></div>
            <div className="hidden w-[152px] flex-shrink-0 flex-col items-start gap-[20px] lg:flex">
              <h1 className="self-stretch text-size-3 font-semibold text-white">
                Job Info
              </h1>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <span className="text-size-6 font-normal">Department</span>
                  <span className="text-size-6 font-normal text-white/50">
                    Engineering
                  </span>
                </div>
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <span className="text-size-6 font-normal">Experience</span>
                  <span className="text-size-6 font-normal text-white/50">
                    2-4 Years
                  </span>
                </div>
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <span className="text-size-6 font-normal">City</span>
                  <span className="text-size-6 font-normal text-white/50">
                    Lahore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto mt-[149px] flex w-full max-w-[1440px] items-center justify-center rounded-[20px] bg-bg p-[36px] shadow-shadowCustom">
        <form ref={formRef} className="flex w-full flex-col gap-[52px]">
          <h1 className="text-[22px] font-medium">
            Enter your details to Apply
          </h1>
          <div className="flex flex-col items-start gap-[63px] self-stretch lg:flex-row">
            <div className="flex w-full flex-col gap-[24px] lg:w-1/2">
              <label htmlFor="first-name" className="text-size-6 font-normal">
                First Name
              </label>
              <input
                id="first-name"
                name="firstname"
                type="text"
                required
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>

            <div className="flex w-full flex-col gap-[24px] lg:w-1/2">
              <label htmlFor="last-name" className="text-size-6 font-normal">
                Last Name
              </label>
              <input
                id="last-name"
                name="lastname"
                type="text"
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[63px] self-stretch lg:flex-row">
            <div className="flex w-full flex-col gap-[24px] lg:w-1/2">
              <label htmlFor="email" className="text-size-6 font-normal">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>

            <div className="flex w-full flex-col gap-[24px] lg:w-1/2">
              <label htmlFor="phone" className="text-size-6 font-normal">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                required
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-size-6 font-normal">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              className="resize-none border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              rows={3}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="linkedin-profile"
              className="text-size-6 font-normal"
            >
              Linkedin Profile
            </label>
            <textarea
              id="linkedin-profile"
              name="linkedinProfile"
              required
              className="resize-none border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              rows={3}
            />
          </div>

          <div className="flex flex-col items-start gap-[20px] self-stretch">
            <label htmlFor="resume" className="text-size-6 font-normal">
              Upload Resume
            </label>

            {/* Dashed upload area */}
            <label
              htmlFor="resume"
              className="flex flex-col items-center gap-[16px] self-stretch rounded-[8px] border-[1px] border-dashed border-[#283F9C] bg-[#080E27] px-[16px] py-[20px]"
            >
              <div className="relative h-[32px] w-[32px] cursor-pointer">
                <Image
                  src="/jobs/upload.png"
                  alt="Upload icon"
                  fill
                  className="relative"
                />
              </div>

              <div className="flex flex-col items-center gap-[8px]">
                <div className="flex items-center gap-2">
                  {/* “Click To Upload” (gradient text with colored underline) */}
                  <span
                    className="font-manrope cursor-pointer bg-gradient-to-b from-[#9F85F6] to-[#8FB2F7] bg-clip-text text-[12px] font-medium leading-[16px] text-transparent underline decoration-[#9F85F6] decoration-solid [text-decoration-skip-ink:none] [text-decoration-thickness:auto] [text-underline-offset:auto] [text-underline-position:from-font] lg:text-[16px]"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Click To Upload
                  </span>

                  {/* “or drag and Drop” (white/80, no underline) */}
                  <span className="font-manrope text-[12px] font-medium leading-[16px] text-white/80 lg:text-[16px]">
                    or drag and Drop
                  </span>
                </div>

                <p className="text-size-7 font-normal text-white/80">
                  Max. File size: 15MB
                </p>

                {/* Actual file input is hidden but clickable via the label */}
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  className="hidden"
                />
              </div>
            </label>
          </div>

          <div>
            <Button onClick={handleLetsTalkClick} variant="gradient">
              Apply
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
