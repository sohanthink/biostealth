"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function KeyStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Analytics tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
          // Analytics event: proof_stat_view
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "proof_stat_view", {
              event_category: "engagement",
              event_label: "Key Stats Section",
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

  const handleProofLinkClick = (statName) => {
    // Analytics event: proof_link_click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "proof_link_click", {
        event_category: "engagement",
        event_label: statName,
      });
    }
  };

  const stats = [
    {
      id: "patents",
      metric: "29-pons",
      unit: "patents granted and pending",
      caption: "GO ano Onsproaaire -40 and ELI hnyoresis",
      proofLink: "/patents",
    },
    {
      id: "pilots",
      metric: "11",
      unit: "pilots completed",
      caption: "Pitsd soretic orociater the wovetl dne ctores",
      proofLink: "/validation",
    },
    {
      id: "signals",
      metric: "20M",
      unit: "signals captured",
      caption: "Uocss nereriontdconnogiorgost ountors",
      proofLink: "/validation",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black"
      aria-labelledby="key-stats-heading"
    >
      {/* Content */}
      <div className="w-full container">
        <div className="space-y-16">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Stat Card */}
                  <div className="relative p-8">
                    {/* Metric */}
                    <div className="mb-4">
                      <span className="text-4xl lg:text-5xl font-bold text-white">
                        {stat.metric}
                      </span>
                      <span className="text-lg text-white ml-2">
                        {stat.unit}
                      </span>
                    </div>

                    {/* Caption */}
                    <p
                      id={`${stat.id}-caption`}
                      className="text-sm text-gray-400 mb-6 leading-relaxed"
                    >
                      {stat.caption}
                    </p>

                    {/* Proof Link */}
                    <Link
                      href={stat.proofLink}
                      className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                      onClick={() => handleProofLinkClick(stat.id)}
                      aria-describedby={`${stat.id}-caption`}
                    >
                      View Proof
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
