"use client";

import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaSchool,
  FaCircleCheck,
} from "react-icons/fa6";

interface TimelineEntry {
  title: string;
  company: string;
  period: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  iconBg: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const timelineData: TimelineEntry[] = [
  {
    title: "Software Engineer (Frontend)",
    company: "Hocalwire Labs Pvt Ltd",
    period: "Jan 2023 – Present",
    badge: "FULL-TIME",
    badgeColor: "#10b981",
    icon: <FaBriefcase size={16} />,
    iconBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    description:
      "Directing frontend architecture for enterprise digital media and news platforms. Leading Core Web Vitals optimization and modular React + Next.js design systems.",
    achievements: [
      "Directed frontend architecture for 3 enterprise applications, reducing delivery cycles by 25% with reusable component systems.",
      "Developed responsive, pixel-perfect interfaces using Tailwind CSS and high-fidelity Figma designs.",
      "Optimized bundle size, asset loading, and image compression—boosting Lighthouse performance by 35%.",
      "Mentored junior engineers and instituted TypeScript best practices and modular React component patterns.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Lighthouse", "Core Web Vitals"],
  },
  {
    title: "Bachelor in Computer Science",
    company: "DAV Centenary College",
    period: "Higher Education",
    badge: "GRADUATED",
    badgeColor: "#6366f1",
    icon: <FaGraduationCap size={16} />,
    iconBg: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    description:
      "Graduated with a Bachelor's degree in Computer Science, building core software engineering foundations in web technologies, data structures, algorithms, and database systems.",
    achievements: [
      "Specialized in Software Engineering, Object-Oriented Programming, and Web Development.",
      "Built interactive projects using JavaScript, React, and database backends.",
      "Comprehensive coursework in Database Management Systems (DBMS), Operating Systems, and Networking.",
    ],
    tech: ["Computer Science", "Data Structures", "Algorithms", "DBMS", "Web Technologies"],
  },
  {
    title: "Higher Secondary & Secondary Education (HSC & SSC)",
    company: "AD Senior Secondary School",
    period: "Schooling Foundations",
    badge: "COMPLETED",
    badgeColor: "#a855f7",
    icon: <FaSchool size={16} />,
    iconBg: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
    description:
      "Completed Higher Secondary Certificate (HSC) and Secondary School Certificate (SSC) with strong academic performance in Mathematics and Science.",
    achievements: [
      "Strong analytical and mathematical foundations.",
      "Active participation in technical problem-solving and computer science extracurriculars.",
    ],
    tech: ["Mathematics", "Computer Science", "Physics", "Analytical Problem Solving"],
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "4+", label: "Production Platforms" },
  { value: "1M+", label: "Monthly Users Served" },
  { value: "15+", label: "Frontend Technologies" },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      style={{
        width: "100%",
        padding: "80px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section Header */}
        <div className="watermark-header" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="watermark-text" style={{ left: "50%", transform: "translateX(-50%)" }}>
            JOURNEY
          </span>
          <div className="watermark-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="subtle-badge">CAREER & EDUCATION</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              Professional <span className="hero-gradient-name">Journey & Foundations</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-tertiary)",
                maxWidth: "600px",
                margin: 0,
              }}
            >
              Commercial enterprise software engineering at Hocalwire Labs and academic computer science foundations.
            </p>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "60px" }}>
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                borderLeft: `4px solid ${item.badgeColor}`,
              }}
            >
              {/* Header Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "var(--radius-sm)",
                      background: item.iconBg,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-primary-light)", margin: "2px 0 0 0", fontWeight: 600 }}>
                      {item.company}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: item.badgeColor,
                      background: `rgba(99, 102, 241, 0.1)`,
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      border: `1px solid ${item.badgeColor}40`,
                    }}
                  >
                    {item.badge}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--color-text-tertiary)", fontWeight: 500 }}>
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--color-text-secondary)", margin: 0 }}>
                {item.description}
              </p>

              {/* Bullet Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                    <FaCircleCheck size={13} style={{ color: item.badgeColor, marginTop: "3px", flexShrink: 0 }} />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "8px" }}>
                {item.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "3px 9px",
                      borderRadius: "var(--radius-xs)",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--color-text-tertiary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Bottom Metric Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "20px", textAlign: "center" }}>
              <div className="hero-gradient-name" style={{ fontSize: "1.8rem", fontWeight: 800 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--color-text-tertiary)", marginTop: "4px", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
