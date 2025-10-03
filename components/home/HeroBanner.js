import React from "react";
import Image from "next/image";
import banner from "@/public/home/surface-banner.png";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";

const HeroBanner = () => {
  return (
    <section className="relative h-screen">
      <Image
        src={banner}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover brightness-[.9] backdrop-contrast-125 backdrop-brightness-110"
      />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#000]/100 to-[#000]/10"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full container space-y-4 md:space-y-7 p-5 md:p-0 md:pt-28">
        <h1 className="me-[700px]">Touchable cardiovascular Surfaces.</h1>
        <p className="text-white me-[700px]">
          A surface-level physiological sensing architecture that activates on
          touch and streams only quality-gated signals.
        </p>
        <div className="flex space-x-4">
          <PrimaryButton
            text="Start Learning"
            link="https://study.embeddedexpert.io/"
            cn="inline"
            varient="webinar"
          />
          <SecondaryButton
            text="Start Learning"
            link="https://study.embeddedexpert.io/"
            cn="inline"
            varient="webinar"
          />
        </div>
        <p className="text-white">
          TCS activating only at the point of contact.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
