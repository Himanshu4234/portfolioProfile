import React from "react";
import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBookOpen,
  FaCircleCheck,
} from "react-icons/fa6";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  const allProjects = [
    {
      title: "Shopperce AI — Multi-Tenant E-Commerce Platform",
      badge: "ENTERPRISE COMMERCE",
      isLive: true,
      description:
        "A customizable eCommerce platform enabling partners to deploy custom-branded storefronts dynamically. Built dynamic routing & theming using React + Vite with comprehensive seller admin dashboards for catalog, orders, and revenue analytics.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://shopperce.ai/",
      githubUrl: "https://github.com/Himanshu4234",
      features: [
        "Multi-tenant dynamic theme injection & custom routing",
        "Comprehensive seller admin dashboard",
        "Optimized, conversion-focused checkout & cart pipeline",
        "Client-side state caching & high-speed navigation",
      ],
    },
    {
      title: "LiveLaw — India's Premier Legal News Platform",
      badge: "HIGH-TRAFFIC MEDIA",
      isLive: true,
      description:
        "Engineered high-performance UI components and optimized Core Web Vitals (LCP/CLS) for India's leading legal journalism platform serving over 1M+ monthly readers. Implemented dynamic, scalable layouts for large volumes of daily news updates.",
      tags: ["React", "Next.js", "TypeScript", "Core Web Vitals", "SEO Architecture"],
      liveUrl: "https://www.livelaw.in/",
      features: [
        "High-volume court news rendering engine",
        "35%+ Lighthouse performance & Core Web Vitals boost",
        "Dynamic subscription & paywall UI components",
        "Semantic SEO structure for Google Discover & News",
      ],
    },
    {
      title: "NextLeap IT Solutions — Corporate Platform",
      badge: "CORPORATE SERVICES",
      isLive: true,
      description:
        "Built a scalable IT services corporate website using React + TypeScript. Implemented SEO strategies, improved TTFB by 30%, and created modular, API-driven pages with mobile-first design.",
      tags: ["React", "TypeScript", "Tailwind CSS", "SEO Architecture"],
      liveUrl: "https://nextleapitsolutions.netlify.app/",
      features: [
        "Modular corporate services architecture & tokens",
        "High-conversion interactive lead capture funnels",
        "Sub-second TTFB loading speeds",
        "Fluid mobile-first responsive UX",
      ],
    },
    {
      title: "Kiska Kitna Hisab — Expense Splitter & UPI Settle App",
      badge: "FINTECH / PRODUCT",
      isLive: true,
      description:
        "A full-stack Splitwise-inspired group expense tracker built with React, TypeScript, and Supabase backend (PostgreSQL database & Auth). Features itemised expense logging, Row Level Security (RLS), greedy debt simplification algorithms, and instant UPI payment QR & deep links (Google Pay, PhonePe, Paytm).",
      tags: ["React", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://kiskakitnahisab.netlify.app/",
      githubUrl: "https://github.com/Himanshu4234",
      features: [
        "Greedy debt minimization algorithm for optimal payouts",
        "Dynamic UPI payment QR code & intent deep links",
        "Row Level Security (RLS) PostgreSQL database",
        "Real-time group balance ledger & itemized logging",
      ],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 24px 80px 24px",
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="status-pill" style={{ marginBottom: "16px" }}>
            <span className="pulse-dot" />
            <span>ENGINEERING SHOWCASE</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              color: "var(--color-text-primary)",
              margin: "0 0 16px 0",
              lineHeight: 1.1,
            }}
          >
            Featured Projects & <span className="hero-gradient-name">Applications</span>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-text-tertiary)",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Explore enterprise applications, commercial platforms, and fintech products architected with React, Next.js, TypeScript, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {allProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                {/* Badge & Live status */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
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

                {/* Title */}
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    margin: "0 0 12px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--color-text-secondary)",
                    margin: "0 0 18px 0",
                  }}
                >
                  {project.description}
                </p>

                {/* Features List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Key Capabilities:
                  </span>
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                      <FaCircleCheck size={12} style={{ color: "#10b981", marginTop: "3px", flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "3px 9px",
                        borderRadius: "var(--radius-xs)",
                        background: "rgba(99, 102, 241, 0.1)",
                        border: "1px solid rgba(99, 102, 241, 0.25)",
                        color: "var(--color-primary-light)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid var(--border-subtle)" }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-indigo"
                    style={{ flex: 1, padding: "8px 14px", fontSize: "0.85rem" }}
                  >
                    <span>Visit Live Application</span>
                    <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-glass"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                    title="GitHub Repository"
                  >
                    <FaGithub size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
