"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const InsightStrips = () => {
  const sectionRef = useRef(null);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed) {
          // Analytics event: insight_strips_view
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "insight_strips_view", {
              event_category: "engagement",
              event_label: "Insight Strips Section Viewed",
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

  const handlePaperClick = (paperSlug) => {
    // Analytics event: insight_strip_click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "insight_strip_click", {
        event_category: "engagement",
        event_label: `White Paper Clicked: ${paperSlug}`,
      });
    }
  };

  const whitePapers = [
    {
      id: "architectural-foundations",
      title: "Architectural Foundations of TCS",
      abstract:
        "A concise system view of surface-level physiological sensing - from surface grid and photonic capture to DSP and quality gating - with non-enabling figures and a shared visual grammar.",
      cta: "Read the white paper",
      link: "/white-papers/architectural-foundations",
      coverImage: "/white-papers/architectural-foundations-cover.webp", // Placeholder
      alt: "Architectural Foundations of TCS white paper cover",
    },
    {
      id: "why-tcs-is-deep-tech",
      title: "Why TCS Qualifies as Deep Tech",
      abstract:
        "What makes TCS deep tech is not a gadget but a system-level architecture - optics, signal processing, quality gating, and integration patterns that scale across embodiments.",
      cta: "Read the white paper",
      link: "/white-papers/why-tcs-is-deep-tech",
      coverImage: "/white-papers/why-tcs-deep-tech-cover.webp", // Placeholder
      alt: "Why TCS Qualifies as Deep Tech white paper cover",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 black-bg-cool text-white"
      aria-labelledby="insight-strips-heading"
    >
      {/* Content */}
      <div className="w-full container px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2
              id="insight-strips-heading"
              className="text-section-heading text-white leading-tight mb-4"
            >
              Insight Strips
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Surface depth at the moment of interest without leaving the page.
            </p>
          </div>

          {/* Two Card Strips */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {whitePapers.map((paper) => (
              <Link
                key={paper.id}
                href={paper.link}
                className="group block"
                onClick={() => handlePaperClick(paper.id)}
                aria-label={`Read white paper: ${paper.title}`}
              >
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                  {/* White Paper Cover */}
                  <div className="relative h-64 lg:h-80 bg-gradient-to-br from-primary/20 to-primary/5">
                    {/* Generic White Paper Cover Frame */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Abstract Grid Pattern Background */}
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(0, 176, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 176, 255, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>

                      {/* Touch Ripple Effect */}
                      <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-full border border-primary/30 animate-pulse">
                          <div className="w-full h-full rounded-full bg-primary/10 animate-ping" />
                        </div>
                      </div>

                      {/* System Motif for Deep Tech Paper */}
                      {paper.id === "why-tcs-is-deep-tech" && (
                        <div className="absolute right-1/4 top-1/3">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-primary/40 rounded" />
                            <div className="w-3 h-3 bg-primary/60 rounded" />
                            <div className="w-3 h-3 bg-primary/40 rounded" />
                          </div>
                          <div className="mt-2 flex items-center space-x-1">
                            <div className="w-2 h-2 bg-primary/50 rounded-full" />
                            <div className="w-8 h-0.5 bg-primary/30" />
                            <div className="w-2 h-2 bg-primary/50 rounded-full" />
                          </div>
                        </div>
                      )}

                      {/* Title Area - Top Left */}
                      <div className="absolute top-6 left-6 text-left">
                        <div className="text-primary text-xs font-medium uppercase tracking-wider mb-2">
                          White Paper
                        </div>
                        <div className="text-white text-sm font-semibold leading-tight">
                          {paper.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-4">
                      {paper.title}
                    </h3>

                    {/* Abstract */}
                    <p className="text-white/80 leading-relaxed mb-6 text-sm lg:text-base">
                      {paper.abstract}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">
                        {paper.cta}
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Access in-depth technical insights and research findings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightStrips;
