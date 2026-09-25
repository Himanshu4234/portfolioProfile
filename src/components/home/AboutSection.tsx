"use client";

import React from "react";
import Image from "next/image";
import {
  FaMapPin,
  FaGithub,
  FaLayerGroup,
  FaFileArrowDown,
  FaRocket,
  FaBriefcase,
  FaBolt,
  FaBullseye,
  FaAward,
  FaStar,
  FaArrowTrendUp,
  FaCode,
  FaGaugeHigh,
} from "react-icons/fa6";
import { person } from "@/resources";

const techChips = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Redux Toolkit",
  "TanStack Query",
  "Tailwind CSS",
  "HTML5 / SCSS",
  "Vite",
  "REST APIs",
  "Git & GitHub",
  "Core Web Vitals",
];

const workPrinciples = [
  {
    icon: <FaRocket size={18} />,
    title: "Production Architecture",
    desc: "Engineered scalable React & Next.js systems serving 1M+ active users.",
    color: "#6366f1",
  },
  {
    icon: <FaGaugeHigh size={18} />,
    title: "Core Web Vitals",
    desc: "Sub-second LCP, minimal CLS, and 35%+ Lighthouse performance boost.",
    color: "#10b981",
  },
  {
    icon: <FaLayerGroup size={18} />,
    title: "Modular Design Systems",
    desc: "Reusable, accessible component libraries reducing delivery time by 25%.",
    color: "#f59e0b",
  },
  {
    icon: <FaBullseye size={18} />,
    title: "Pixel-Perfect UI/UX",
    desc: "Translating Figma designs into responsive, polished, fluid user interfaces.",
    color: "#ec4899",
  },
];

const achievements = [
  {
    icon: <FaAward size={20} />,
    title: "Enterprise Frontend Architecture",
    subtitle: "Hocalwire Labs · Production Platforms",
    color: "#6366f1",
  },
  {
    icon: <FaStar size={20} />,
    title: "High-Traffic Engineering",
    subtitle: "LiveLaw & Shopperce · 1M+ Monthly Readers",
    color: "#f59e0b",
  },
  {
    icon: <FaArrowTrendUp size={20} />,
    title: "FinTech & UPI Settlement",
    subtitle: "Kiska Kitna Hisab · Expense Algorithm",
    color: "#06b6d4",
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        padding: "80px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div className="watermark-header" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="watermark-text" style={{ left: "50%", transform: "translateX(-50%)" }}>
            ABOUT
          </span>
          <div className="watermark-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="subtle-badge">GET TO KNOW ME</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              About <span className="hero-gradient-name">Me</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-tertiary)",
                maxWidth: "600px",
                margin: 0,
              }}
            >
              Senior Frontend Engineer & React Specialist dedicated to high-performance, accessible, and scalable web platforms.
            </p>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "start",
            marginBottom: "60px",
          }}
        >
          {/* Left Column: Profile Card */}
          <div
            className="glass-card"
            style={{
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "2px solid rgba(99, 102, 241, 0.5)",
                boxShadow: "0 0 24px rgba(99, 102, 241, 0.35)",
                position: "relative",
              }}
            >
              <Image
                src={person.avatar}
                alt={person.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>
                {person.name}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-primary-light)", margin: "4px 0 0 0", fontWeight: 600 }}>
                Senior Frontend Engineer & React Specialist
              </p>
            </div>

            <div className="status-pill">
              <span className="pulse-dot" />
              <span>Available for Frontend Roles</span>
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.82rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                <FaMapPin style={{ color: "#6366f1" }} />
                <span>Based in {person.state}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.82rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                <FaGithub style={{ color: "#6366f1" }} />
                <span>249+ GitHub contributions</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.82rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                <FaLayerGroup style={{ color: "#6366f1" }} />
                <span>React · Next.js · TypeScript · Redux</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center", marginTop: "10px" }}>
              {techChips.map((chip, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "var(--radius-xs)",
                    background: "rgba(99, 102, 241, 0.1)",
                    border: "1px solid rgba(99, 102, 241, 0.25)",
                    color: "var(--color-primary-light)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Story Narrative & Principles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.98rem", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
              <p style={{ margin: 0 }}>
                I’m a Senior Frontend Engineer with 3+ years of experience building <strong style={{ color: "#818cf8" }}>production-grade web applications</strong> for high-traffic media platforms, startups, and enterprise organizations. I specialize in scalable React, Next.js, and TypeScript architectures serving over 1M+ active monthly users.
              </p>
              <p style={{ margin: 0 }}>
                My key platforms include <strong style={{ color: "#34d399" }}>Kiska Kitna Hisab</strong> (full-stack group expense and instant UPI payment settlement app), <strong style={{ color: "#38bdf8" }}>Shopperce AI</strong> (multi-tenant customizable eCommerce architecture), <strong style={{ color: "#f59e0b" }}>LiveLaw</strong> (India's premier legal news platform), and <strong style={{ color: "#a855f7" }}>NextLeap IT Solutions</strong> (enterprise corporate services).
              </p>
              <p style={{ margin: 0 }}>
                I care deeply about <strong style={{ color: "#ec4899" }}>Core Web Vitals (LCP, INP, CLS), component modularity, and pixel-perfect design execution</strong>. Every project is engineered with strict type safety, responsive layout precision, and fast, frictionless rendering.
              </p>
            </div>

            <div>
              <a
                href="/Himanshu-Singh-Chauhan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-primary-indigo"
                style={{ width: "fit-content" }}
              >
                <FaFileArrowDown size={15} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* How I Work 4-Card Grid */}
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "16px" }}>
                How I Work
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                {workPrinciples.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: "16px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px",
                        borderRadius: "var(--radius-sm)",
                        background: `rgba(${item.color === "#6366f1" ? "99, 102, 241" : item.color === "#10b981" ? "16, 185, 129" : item.color === "#f59e0b" ? "245, 158, 11" : "236, 72, 153"}, 0.15)`,
                        color: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "3px" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--color-text-tertiary)", lineHeight: 1.4 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights & Achievements */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "20px" }}>
            Key Highlights & <span className="hero-gradient-name">Milestones</span>
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "var(--radius-sm)",
                    background: `rgba(99, 102, 241, 0.15)`,
                    color: ach.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {ach.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
                    {ach.title}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)", marginTop: "2px" }}>
                    {ach.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
