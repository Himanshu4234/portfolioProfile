"use client";

import React from "react";
import Link from "next/link";
import { CelestialCanvas } from "@/components/3d/CelestialCanvas";
import { FaArrowDown, FaGithub, FaLinkedin, FaFileArrowDown } from "react-icons/fa6";

const stats = [
  { value: "249+", label: "GitHub\nContributions" },
  { value: "3+", label: "Years\nExperience" },
  { value: "5+", label: "Production\nApps" },
  { value: "1M+", label: "Active Users\nServed" },
];

export const HeroHeader: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#070b14",
        background:
          "radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%), radial-gradient(circle at 15% 85%, rgba(168, 85, 247, 0.1) 0%, transparent 60%), #070b14",
      }}
    >
      {/* Centered Max-Width Container with Balanced 50/50 Split */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 24px 80px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "calc(100vh - 80px)",
        }}
        className="hero-split-container"
      >
        {/* Left Column: Typography, Bio, Actions, Stats */}
        <div
          style={{
            maxWidth: "620px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            zIndex: 3,
          }}
          className="hero-left-content"
        >
          {/* Status Pill: Available for Opportunities */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              color: "#34d399",
              fontSize: "0.82rem",
              fontWeight: 600,
              marginBottom: "24px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="pulse-dot" />
            <span>Available for Opportunities</span>
          </div>

          {/* Main Hero Name */}
          <h1
            style={{
              fontSize: "clamp(3.2rem, 6.8vw, 5.8rem)",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            Himanshu
            <br />
            <span
              style={{
                color: "#818cf8",
                background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Chauhan
            </span>
          </h1>

          {/* Subtitle Role */}
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#94a3b8",
              letterSpacing: "0.01em",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            Senior Frontend Engineer & React Specialist
          </p>

          {/* Bio Description */}
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: "#cbd5e1",
              maxWidth: "520px",
              margin: 0,
              marginBottom: "32px",
            }}
          >
            Frontend Developer with 3+ years of experience building high-performance, scalable web applications, React architectures, and enterprise design systems serving 1M+ active users.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <a
              href="#projects"
              style={{
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "12px 28px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 18px rgba(79, 70, 229, 0.4)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              className="hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/Himanshu-Singh-Chauhan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                color: "#cbd5e1",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "12px 28px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
            >
              <FaFileArrowDown size={14} style={{ marginRight: "6px" }} />
              <span>Resume</span>
            </a>
          </div>

          {/* 4 Stat Metric Boxes in a Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "14px 6px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: "#94a3b8",
                    marginTop: "4px",
                    lineHeight: 1.25,
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Celestial Polyhedron Canvas */}
        <div
          style={{
            flex: 1,
            height: "580px",
            maxWidth: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          className="hero-3d-wrapper"
        >
          <CelestialCanvas />
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About Section"
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#94a3b8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.2s ease",
          zIndex: 3,
        }}
      >
        <FaArrowDown size={14} />
      </a>

      <style jsx>{`
        @media (max-width: 992px) {
          :global(.hero-split-container) {
            flex-direction: column !important;
            justifyContent: center !important;
            padding-top: 100px !important;
            gap: 32px !important;
          }
          :global(.hero-3d-wrapper) {
            width: 100% !important;
            height: 380px !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
