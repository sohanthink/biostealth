"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PrimaryButton from "../common/PrimaryButton";

const ArchitectureTeaser = () => {
  const sectionRef = useRef(null);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed) {
          // Analytics event: architecture_teaser_view
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "architecture_teaser_view", {
              event_category: "engagement",
              event_label: "Architecture Teaser Section Viewed",
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
    // Analytics event: architecture_cta_click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "architecture_cta_click", {
        event_category: "engagement",
        event_label: "Explore the Architecture CTA Clicked",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 black-bg text-white"
      aria-labelledby="architecture-teaser-heading"
    >
      {/* Content */}
      <div className="w-full container px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Kicker */}
            <div className="text-sm font-medium text-[var(--accent-primary)] uppercase tracking-wider">
              The Architecture
            </div>

            {/* H2 Heading */}
            <h2
              id="architecture-teaser-heading"
              className="text-section-heading text-foreground leading-tight"
            >
              Surface-level sensing, system-level design
            </h2>

            {/* Body Text */}
            <p className="text-body-large text-foreground-secondary leading-relaxed max-w-2xl">
              Touchable Cardiovascular Surfaces (TCS) builds cardiovascular
              intelligence into the surface layer of everyday products. On
              touch, photonic sensors acquire morphology-faithful PPG and stream
              data only when the signal passes quality thresholds. The result is
              a quiet interface that disappears until needed, then delivers
              reliable physiological signals.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <PrimaryButton
                text="Explore the Architecture"
                link="/architecture"
                onClick={handleCTAClick}
                aria-label="Explore the Architecture - Learn about our sensing technology"
              />
            </div>
          </div>

          {/* Right Column - Diagram */}
          <div className="relative">
            {/* Diagram Container */}
            <div className="relative w-full h-[400px] lg:h-[500px] bg-[var(--background-secondary)] border border-[var(--foreground-muted)]/20 rounded-lg p-8">
              {/* Diagram Blocks */}
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Surface Grid */}
                <div className="bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 bg-[var(--accent-primary)]/20 rounded mb-3 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[var(--accent-primary)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-foreground text-center">
                    Surface Grid
                  </div>
                </div>

                {/* Photonic Capture */}
                <div className="bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 bg-[var(--accent-primary)]/20 rounded mb-3 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[var(--accent-primary)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-foreground text-center">
                    Photonic Capture
                  </div>
                </div>

                {/* DSP */}
                <div className="bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 bg-[var(--accent-primary)]/20 rounded mb-3 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[var(--accent-primary)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-foreground text-center">
                    DSP
                  </div>
                </div>

                {/* Quality Gate */}
                <div className="bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 bg-[var(--accent-primary)]/20 rounded mb-3 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[var(--accent-primary)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-foreground text-center">
                    Quality Gate
                  </div>
                </div>
              </div>

              {/* Host Interface - Bottom Center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32">
                <div className="bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded-lg p-3 flex flex-col items-center justify-center">
                  <div className="w-6 h-6 bg-[var(--accent-primary)]/20 rounded mb-2 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-[var(--accent-primary)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-foreground text-center">
                    Host Interface
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Surface Grid to Photonic Capture */}
                <svg className="absolute inset-0 w-full h-full">
                  <line
                    x1="25%"
                    y1="50%"
                    x2="75%"
                    y2="50%"
                    stroke="var(--accent-primary)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                </svg>

                {/* Photonic Capture to DSP */}
                <svg className="absolute inset-0 w-full h-full">
                  <line
                    x1="75%"
                    y1="50%"
                    x2="25%"
                    y2="75%"
                    stroke="var(--accent-primary)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                </svg>

                {/* DSP to Quality Gate */}
                <svg className="absolute inset-0 w-full h-full">
                  <line
                    x1="25%"
                    y1="75%"
                    x2="75%"
                    y2="75%"
                    stroke="var(--accent-primary)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                </svg>

                {/* Quality Gate to Host Interface */}
                <svg className="absolute inset-0 w-full h-full">
                  <line
                    x1="75%"
                    y1="75%"
                    x2="50%"
                    y2="85%"
                    stroke="var(--accent-primary)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureTeaser;
