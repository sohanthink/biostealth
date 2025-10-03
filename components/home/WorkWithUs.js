"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WorkWithUs = () => {
  const sectionRef = useRef(null);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed) {
          // Analytics event: work_with_us_view
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "work_with_us_view", {
              event_category: "engagement",
              event_label: "Work With Us Section Viewed",
            });
          }
          setHasViewed(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasViewed]);

  const handleCTAClick = () => {
    // Analytics event: licensing_cta_click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "licensing_cta_click", {
        event_category: "engagement",
        event_label: "Start Licensing Conversation CTA Clicked",
      });
    }
  };

  const steps = [
    {
      id: "nda",
      label: "NDA",
      description: "Non-disclosure agreement",
    },
    {
      id: "evaluation",
      label: "Evaluation",
      description: "Evaluation kit",
    },
    {
      id: "pilot",
      label: "Pilot",
      description: "Pilot program",
    },
    {
      id: "license",
      label: "License",
      description: "Full license agreement",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 black-bg-dark text-white"
      aria-labelledby="work-with-us-heading"
    >
      {/* Content */}
      <div className="w-full container px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12">
          {/* Header */}
          <div className="space-y-6">
            {/* Kicker */}
            <div className="text-sm font-medium text-primary uppercase tracking-wider">
              Work with us
            </div>

            {/* H2 Heading */}
            <h2
              id="work-with-us-heading"
              className="text-section-heading text-white leading-tight"
            >
              From evaluation to license
            </h2>

            {/* Body Text */}
            <p className="text-body-large text-white/80 leading-relaxed max-w-3xl mx-auto">
              We partner with OEMs through a structured path - NDA, evaluation
              kit, pilot, license. Our team supports mechanical, electrical, and
              firmware integration at a system level.
            </p>
          </div>

          {/* Stepper Graphic */}
          <div className="py-8">
            <div
              className="relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0"
              aria-label="Four-step licensing process: NDA, Evaluation, Pilot, License"
            >
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center space-y-4 relative w-42"
                >
                  {/* Step Circle */}
                  <div className="relative z-10">
                    {/* Circle */}
                    <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-black/40 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Active highlight */}
                    <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-primary bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Step Label */}
                  <div className="text-center">
                    <div className="text-sm font-semibold text-white">
                      {step.label}
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Link
              href="/licensing"
              className="btn-primary text-lg px-8 py-4"
              onClick={handleCTAClick}
              aria-label="Start Licensing Conversation - Begin the OEM partnership process"
            >
              Start Licensing Conversation
            </Link>
          </div>

          {/* Additional context */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm max-w-2xl mx-auto">
              Our structured approach ensures smooth integration and successful
              partnerships with leading OEMs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
