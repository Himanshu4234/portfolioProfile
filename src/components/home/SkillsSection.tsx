"use client";

import React, { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import {
  FaLayerGroup,
  FaCode,
  FaServer,
  FaGaugeHigh,
  FaSliders,
  FaMobileScreenButton,
} from "react-icons/fa6";

interface TechItem {
  name: string;
  category: "core" | "frameworks" | "state" | "tools";
  icon: React.ReactNode;
  color: string;
}

const allTech: TechItem[] = [
  // Core Languages
  { name: "JavaScript (ES6+)", category: "core", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", category: "core", icon: <SiTypescript />, color: "#3178C6" },
  { name: "HTML5 Semantic", category: "core", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3 / SCSS", category: "core", icon: <SiCss3 />, color: "#1572B6" },

  // Frameworks & UI
  { name: "React.js", category: "frameworks", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js (App Router)", category: "frameworks", icon: <SiNextdotjs />, color: "#6366f1" },
  { name: "Tailwind CSS", category: "frameworks", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Vite", category: "frameworks", icon: <SiVite />, color: "#646CFF" },
  { name: "Responsive UI/UX", category: "frameworks", icon: <FaMobileScreenButton />, color: "#10b981" },

  // State & Data
  { name: "Redux Toolkit", category: "state", icon: <SiRedux />, color: "#764ABC" },
  { name: "Context API", category: "state", icon: <FaSliders />, color: "#818cf8" },
  { name: "TanStack Query", category: "state", icon: <SiReact />, color: "#FF4154" },
  { name: "RESTful APIs", category: "state", icon: <FaServer />, color: "#6366f1" },
  { name: "Supabase & Postgres", category: "state", icon: <SiSupabase />, color: "#3ECF8E" },

  // Tools & Performance
  { name: "Core Web Vitals", category: "tools", icon: <FaGaugeHigh />, color: "#E37400" },
  { name: "Lighthouse Optimization", category: "tools", icon: <FaGaugeHigh />, color: "#10b981" },
  { name: "Git & GitHub", category: "tools", icon: <SiGit />, color: "#F05032" },
  { name: "Vercel & Netlify", category: "tools", icon: <SiVercel />, color: "#818cf8" },
  { name: "Figma to Code", category: "tools", icon: <SiFigma />, color: "#F24E1E" },
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "core" | "frameworks" | "state" | "tools"
  >("all");

  const filteredTech =
    activeCategory === "all" ? allTech : allTech.filter((t) => t.category === activeCategory);

  return (
    <section
      id="skills"
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
        <div className="watermark-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="watermark-text" style={{ left: "50%", transform: "translateX(-50%)" }}>
            EXPERTISE
          </span>
          <div className="watermark-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="subtle-badge">SKILLS & SPECIALIZATION</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              Frontend & <span className="hero-gradient-name">Architecture Stack</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-tertiary)",
                maxWidth: "600px",
                margin: 0,
              }}
            >
              Modern frameworks, type-safe architectures, state management systems, and performance tooling I use to engineer high-speed web apps.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
          >
            <FaLayerGroup size={13} />
            <span>All Technologies ({allTech.length})</span>
          </button>
          <button
            onClick={() => setActiveCategory("core")}
            className={`filter-pill ${activeCategory === "core" ? "active" : ""}`}
          >
            <FaCode size={13} />
            <span>Core Languages</span>
          </button>
          <button
            onClick={() => setActiveCategory("frameworks")}
            className={`filter-pill ${activeCategory === "frameworks" ? "active" : ""}`}
          >
            <SiReact size={13} />
            <span>React & UI</span>
          </button>
          <button
            onClick={() => setActiveCategory("state")}
            className={`filter-pill ${activeCategory === "state" ? "active" : ""}`}
          >
            <FaServer size={13} />
            <span>State & Data</span>
          </button>
          <button
            onClick={() => setActiveCategory("tools")}
            className={`filter-pill ${activeCategory === "tools" ? "active" : ""}`}
          >
            <FaGaugeHigh size={13} />
            <span>Tools & Web Vitals</span>
          </button>
        </div>

        {/* Tech Chips Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="tech-chip"
              style={{
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "1.2rem", color: item.color, display: "flex", alignItems: "center" }}>
                {item.icon}
              </span>
              <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
