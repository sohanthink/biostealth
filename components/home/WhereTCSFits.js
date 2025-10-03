"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WhereTCSFits = () => {
  const sectionRef = useRef(null);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed) {
          // Analytics event: where_tcs_fits_view
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "where_tcs_fits_view", {
              event_category: "engagement",
              event_label: "Where TCS Fits Section Viewed",
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

  const handleCardClick = (cardTitle) => {
    // Analytics event: where_tcs_fits_card_click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "where_tcs_fits_card_click", {
        event_category: "engagement",
        event_label: `Where TCS Fits Card Clicked: ${cardTitle}`,
      });
    }
  };

  const cards = [
    {
      id: "notebook-trackpad",
      title: "Notebook trackpad",
      body: "Surface-level sensing integrated beneath the touch plane.",
      link: "/architecture",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      ),
    },
    {
      id: "notebook-palmrest",
      title: "Notebook palmrest",
      body: "Passive interface that activates on presence and dwell.",
      link: "/architecture",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "industrial-handhelds",
      title: "Industrial handhelds",
      body: "Grip-zone sensing for operators in motion-prone environments.",
      link: "/licensing",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "automotive-interfaces",
      title: "Automotive interfaces",
      body: "Quiet physiological awareness at the human-vehicle interface.",
      link: "/licensing",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 black-bg-warm text-white"
      aria-labelledby="where-tcs-fits-heading"
    >
      {/* Content */}
      <div className="w-full container px-4 sm:px-6 lg:px-12">
        <div className="space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Kicker */}
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Where TCS fits
            </div>

            {/* Optional heading if needed */}
            <h2
              id="where-tcs-fits-heading"
              className="text-section-heading text-white leading-tight"
            >
              Applications Across Industries
            </h2>
          </div>

          {/* 4-Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card) => (
              <Link
                key={card.id}
                href={card.link}
                className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/50 hover:bg-black/60 transition-all duration-300 hover:scale-105"
                onClick={() => handleCardClick(card.title)}
                aria-label={`Learn more about ${card.title}`}
              >
                {/* Card Content */}
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Body */}
                  <p className="text-white/80 leading-relaxed">{card.body}</p>

                  {/* Arrow indicator */}
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <svg
                      className="w-4 h-4"
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
              </Link>
            ))}
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-white/60 text-sm">
              Discover how TCS technology integrates seamlessly across different
              environments and use cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereTCSFits;
