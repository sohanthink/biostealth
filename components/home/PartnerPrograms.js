"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import partner1 from "@/public/home/partners/1.png";
import partner3 from "@/public/home/partners/3.png";
import partner4 from "@/public/home/partners/4.png";
import partner5 from "@/public/home/partners/5.png";
import partner6 from "@/public/home/partners/6.png";
import partner8 from "@/public/home/partners/8.png";

export default function PartnerPrograms() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Analytics tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
          // Analytics event: partner_programs_view
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "partner_programs_view", {
              event_category: "engagement",
              event_label: "Partner Programs Section",
            });
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePartnerLinkClick = (partnerName) => {
    // Analytics event: partner_link_click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "partner_link_click", {
        event_category: "engagement",
        event_label: partnerName,
      });
    }
  };

  // Partner logos data - in production, this would come from CMS
  const partnerLogos = [
    {
      id: 1,
      src: partner1,
      alt: "Medical Device Innovation Lab - Leading cardiovascular research institution",
      link: "/partners/medical-device-lab",
      name: "Medical Device Lab",
    },
    {
      id: 2,
      src: partner3,
      alt: "Healthcare Solutions Inc. - Advanced medical technology partner",
      link: "/partners/healthcare-solutions",
      name: "Healthcare Solutions",
    },
    {
      id: 3,
      src: partner4,
      alt: "Biotech Innovations - Cutting-edge physiological sensing research",
      link: "/partners/biotech-innovations",
      name: "Biotech Innovations",
    },
    {
      id: 4,
      src: partner5,
      alt: "Advanced Diagnostics - Precision medical device development",
      link: "/partners/advanced-diagnostics",
      name: "Advanced Diagnostics",
    },
    {
      id: 5,
      src: partner6,
      alt: "Precision Health Systems - Quality-gated signal processing specialist",
      link: "/partners/precision-health",
      name: "Precision Health",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black"
      aria-labelledby="partner-programs-heading"
    >
      {/* Background Gradient and Grid */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #0d0e10 0%, #0l0e10 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 176, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 176, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2
              id="partner-programs-heading"
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Institutional Alignment
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Collaborating with leading institutions to advance medical device
              innovation and cardiovascular sensing technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8">
            {partnerLogos.map((partner, index) => (
              <div
                key={partner.id}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Link
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-all duration-300 group-hover:scale-105"
                    onClick={() => handlePartnerLinkClick(partner.name)}
                    aria-label={`Learn more about ${partner.alt}`}
                  >
                    <div className="relative">
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        className="h-[120px] w-auto object-contain"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Powered By Text */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Powered by leading institutions in medical device innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
