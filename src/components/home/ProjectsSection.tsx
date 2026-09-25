"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBookOpen,
  FaCircleCheck,
  FaLayerGroup,
  FaBuilding,
  FaBolt,
} from "react-icons/fa6";

interface ProjectItem {
  id: string;
  title: string;
  category: "commercial" | "tools";
  badge: string;
  isLive?: boolean;
  summary: string;
  features: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "kiskakitnahisab",
    title: "Kiska Kitna Hisab — Expense Splitter & UPI Settlement",
    category: "tools",
    badge: "FINTECH / PRODUCT",
    isLive: true,
    summary:
      "A full-stack Splitwise-inspired group expense tracker with greedy debt simplification, Supabase PostgreSQL backend, and 1-click UPI QR & deep link payment settlement (Google Pay, PhonePe, Paytm).",
    features: [
      "Greedy debt minimization algorithm for optimal payouts",
      "Dynamic UPI payment QR & intent deep links for instant settlement",
      "Row Level Security (RLS) PostgreSQL auth & data isolation",
      "Real-time group balances & itemized expense logs",
    ],
    tags: ["React", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://kiskakitnahisab.netlify.app/",
    githubUrl: "https://github.com/Himanshu4234",
    caseStudySlug: "automate-design-handovers-with-a-figma-to-code-pipeline",
  },
  {
    id: "shopperce",
    title: "Shopperce AI — Multi-Tenant E-Commerce Suite",
    category: "commercial",
    badge: "ENTERPRISE COMMERCE",
    isLive: true,
    summary:
      "Multi-tenant e-commerce platform enabling partners to deploy custom-branded storefronts dynamically. Features seller admin dashboards for catalog, order, and revenue analytics.",
    features: [
      "Dynamic multi-tenant theme injection and custom routing",
      "Comprehensive seller analytics & inventory management dashboard",
      "Optimized, conversion-focused checkout pipeline",
      "High-speed RESTful API integration and client-side caching",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://shopperce.ai/",
    githubUrl: "https://github.com/Himanshu4234",
    caseStudySlug: "automate-design-handovers-with-a-figma-to-code-pipeline",
  },
  {
    id: "livelaw",
    title: "LiveLaw — India's Premier Legal News Platform",
    category: "commercial",
    badge: "HIGH-TRAFFIC MEDIA",
    isLive: true,
    summary:
      "Engineered high-performance UI components and optimized Core Web Vitals (LCP/CLS) for India's leading legal journalism platform serving over 1M+ monthly readers.",
    features: [
      "High-speed article readers & live court hearing updates",
      "Sub-second page rendering & progressive image lazy loading",
      "Dynamic subscription & paywall UI components",
      "35%+ Lighthouse performance and Core Web Vitals boost",
    ],
    tags: ["React", "Next.js", "TypeScript", "Core Web Vitals", "SEO Architecture"],
    liveUrl: "https://www.livelaw.in/",
    caseStudySlug: "automate-design-handovers-with-a-figma-to-code-pipeline",
  },
  {
    id: "nextleap",
    title: "NextLeap IT Solutions — Corporate Platform",
    category: "commercial",
    badge: "CORPORATE SERVICES",
    isLive: true,
    summary:
      "SEO-optimized enterprise IT services website built with React and TypeScript. Improved TTFB by 30% with API-driven modular architectures and mobile-first design.",
    features: [
      "Modular corporate service components and design tokens",
      "Optimized SEO & structured Schema.org metadata",
      "Interactive contact & lead conversion funnels",
      "Fluid mobile-first responsive architecture",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "SEO Architecture"],
    liveUrl: "https://nextleapitsolutions.netlify.app/",
    caseStudySlug: "automate-design-handovers-with-a-figma-to-code-pipeline",
  },
];

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "commercial" | "tools">("all");

  const filteredProjects =
    filter === "all" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        padding: "80px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section Header */}
        <div className="watermark-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="watermark-text" style={{ left: "50%", transform: "translateX(-50%)" }}>
            PORTFOLIO
          </span>
          <div className="watermark-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="subtle-badge">FEATURED WORK</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              Commercial & <span className="hero-gradient-name">Featured Projects</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-tertiary)",
                maxWidth: "640px",
                margin: 0,
              }}
            >
              Real-world web applications engineered for commercial enterprises, high-traffic portals, and fintech tools.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          <button
            onClick={() => setFilter("all")}
            className={`filter-pill ${filter === "all" ? "active" : ""}`}
          >
            <FaLayerGroup size={13} />
            <span>All Projects ({allProjects.length})</span>
          </button>
          <button
            onClick={() => setFilter("commercial")}
            className={`filter-pill ${filter === "commercial" ? "active" : ""}`}
          >
            <FaBuilding size={13} />
            <span>Enterprise & Commercial</span>
          </button>
          <button
            onClick={() => setFilter("tools")}
            className={`filter-pill ${filter === "tools" ? "active" : ""}`}
          >
            <FaBolt size={13} />
            <span>FinTech & Tools</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
            marginBottom: "48px",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                {/* Header Badge & Live Status */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "var(--color-primary-light)",
                      background: "rgba(99, 102, 241, 0.12)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid rgba(99, 102, 241, 0.3)",
                    }}
                  >
                    {project.badge}
                  </span>

                  {project.isLive && (
                    <span className="live-badge">
                      <span className="pulse-dot" style={{ width: "6px", height: "6px" }} />
                      <span>LIVE</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "var(--color-text-primary)",
                    margin: "0 0 12px 0",
                  }}
                >
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.55,
                    color: "var(--color-text-secondary)",
                    margin: "0 0 18px 0",
                  }}
                >
                  {project.summary}
                </p>

                {/* Key Capabilities */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Key Capabilities:
                  </span>
                  {project.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.8rem",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      <FaCircleCheck size={12} style={{ color: "#10b981", marginTop: "3px", flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                  {project.tags.map((tag, tIdx) => (
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
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-indigo"
                    style={{ flex: 1, padding: "8px 14px", fontSize: "0.82rem" }}
                  >
                    <span>Visit Live</span>
                    <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-glass"
                    style={{ padding: "8px 14px", fontSize: "0.82rem" }}
                    title="GitHub Repository"
                  >
                    <FaGithub size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Work CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/work" className="btn-secondary-glass" style={{ padding: "12px 28px", fontSize: "0.95rem" }}>
            <FaBookOpen size={14} style={{ color: "var(--color-primary-light)" }} />
            <span>Explore All Projects & Architecture Docs</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
