import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import {
  FaMapPin,
  FaPhone,
  FaFileArrowDown,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaCircleCheck,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
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
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
        {/* Hero Profile Card */}
        <div
          className="glass-card"
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "24px",
            marginBottom: "48px",
            background: "radial-gradient(circle at top, rgba(99, 102, 241, 0.12) 0%, rgba(15, 23, 42, 0.7) 60%)",
          }}
        >
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "28px",
              overflow: "hidden",
              border: "2px solid rgba(99, 102, 241, 0.5)",
              boxShadow: "0 0 32px rgba(99, 102, 241, 0.4)",
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
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "var(--color-text-primary)",
                margin: "0 0 8px 0",
              }}
            >
              {person.name}
            </h1>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "var(--color-primary-light)",
                margin: 0,
              }}
            >
              Senior Frontend Engineer & React Specialist
            </h2>
          </div>

          {/* Status & Location Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <div className="status-pill">
              <span className="pulse-dot" />
              <span>Available for Senior Frontend Roles</span>
            </div>
            <div
              className="subtle-badge"
              style={{
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaMapPin size={12} style={{ color: "#6366f1" }} />
              <span>{person.state}</span>
            </div>
            <div
              className="subtle-badge"
              style={{
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaPhone size={11} style={{ color: "#10b981" }} />
              <span>{person.mobileNumber}</span>
            </div>
          </div>

          {/* Intro Bio */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              maxWidth: "760px",
              margin: "8px 0 0 0",
            }}
          >
            Senior Frontend Engineer with 3+ years of experience building scalable, high-performance web applications. Proficient in React, Next.js, TypeScript, JavaScript (ES6+), Redux, Context API, and TanStack Query. Skilled in creating responsive UIs, improving Core Web Vitals, SEO architecture, and delivering clean, maintainable code.
          </p>

          {/* Action Buttons & Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={about.resume.link}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-primary-indigo"
            >
              <FaFileArrowDown size={14} />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href="https://github.com/Himanshu4234"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass"
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass"
            >
              <FaLinkedin size={14} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${person.email}`}
              className="btn-secondary-glass"
            >
              <FaEnvelope size={14} />
              <span>Email Me</span>
            </a>
          </div>
        </div>

        {/* Work Experience Section */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div
              style={{
                padding: "8px",
                borderRadius: "var(--radius-xs)",
                background: "rgba(99, 102, 241, 0.15)",
                color: "#6366f1",
              }}
            >
              <FaBriefcase size={18} />
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-text-primary)", margin: 0 }}>
              Work Experience
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {about.work.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  borderLeft: "4px solid #6366f1",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>
                      {exp.company}
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-primary-light)", margin: "4px 0 0 0", fontWeight: 600 }}>
                      {exp.role}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--color-text-tertiary)",
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {exp.timeframe}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {exp.achievements.map((achievement, aIdx) => (
                    <div key={aIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      <FaCircleCheck size={14} style={{ color: "#10b981", marginTop: "4px", flexShrink: 0 }} />
                      <div>{achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Foundations */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div
              style={{
                padding: "8px",
                borderRadius: "var(--radius-xs)",
                background: "rgba(168, 85, 247, 0.15)",
                color: "#a855f7",
              }}
            >
              <FaGraduationCap size={18} />
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-text-primary)", margin: 0 }}>
              Education
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {about.studies.institutions.map((inst, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "24px",
                  borderLeft: "4px solid #a855f7",
                }}
              >
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text-primary)", margin: "0 0 6px 0" }}>
                  {inst.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", margin: 0 }}>
                  {inst.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Overview in Detail */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  padding: "8px",
                  borderRadius: "var(--radius-xs)",
                  background: "rgba(6, 182, 212, 0.15)",
                  color: "#06b6d4",
                }}
              >
                <FaRocket size={18} />
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-text-primary)", margin: 0 }}>
                Highlighted Projects
              </h2>
            </div>

            <Link href="/work" className="btn-secondary-glass" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
              <span>View All Projects</span>
              <FaArrowUpRightFromSquare size={12} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {about.projects.projects.map((proj, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>
                      {proj.title}
                    </h3>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--color-text-tertiary)", padding: "4px" }}
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                  </div>

                  <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--color-text-secondary)", margin: "0 0 16px 0" }}>
                    {proj.description}
                  </p>

                  {proj.tags && proj.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {proj.tags.map((tag, tIdx) => (
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
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-indigo"
                    style={{ padding: "8px 14px", fontSize: "0.82rem", width: "fit-content" }}
                  >
                    <span>Visit Application</span>
                    <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
