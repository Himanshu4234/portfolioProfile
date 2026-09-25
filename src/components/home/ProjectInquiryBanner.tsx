"use client";

import React, { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaLinkedin,
  FaFileArrowDown,
} from "react-icons/fa6";
import { person } from "@/resources";

export const ProjectInquiryBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="inquiry"
      style={{
        width: "100%",
        padding: "40px 24px 80px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="glass-card"
          style={{
            padding: "48px 36px",
            borderRadius: "var(--radius-lg)",
            background:
              "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.1) 40%, rgba(15, 23, 42, 0.85) 80%)",
            border: "1px solid rgba(99, 102, 241, 0.35)",
            boxShadow: "0 20px 48px -12px rgba(99, 102, 241, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="status-pill"
            style={{ marginBottom: "20px" }}
          >
            <span className="pulse-dot" />
            <span>Available for Full-Time Roles & Contracts</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#ffffff",
              margin: "0 0 16px 0",
              maxWidth: "800px",
            }}
          >
            Have a Project in Mind?{" "}
            <span className="hero-gradient-name">Let’s Build Something Exceptional</span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "var(--color-text-secondary)",
              maxWidth: "680px",
              margin: "0 0 36px 0",
            }}
          >
            Looking for a Senior Frontend Engineer to build high-performance React architectures, enterprise design systems, or sub-second UI experiences? Let’s connect and bring your vision to life.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <a
              href={`mailto:${person.email}`}
              className="btn-primary-indigo"
              style={{ padding: "12px 28px", fontSize: "0.95rem" }}
            >
              <FaPaperPlane size={14} />
              <span>Email Me Directly</span>
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass"
              style={{ padding: "12px 24px", fontSize: "0.95rem" }}
            >
              <FaLinkedin size={15} style={{ color: "#0a66c2" }} />
              <span>LinkedIn</span>
            </a>

            <a
              href="/Himanshu-Singh-Chauhan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-secondary-glass"
              style={{ padding: "12px 24px", fontSize: "0.95rem" }}
            >
              <FaFileArrowDown size={14} style={{ color: "var(--color-primary-light)" }} />
              <span>Resume (PDF)</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-secondary-glass"
              style={{ padding: "12px 20px", fontSize: "0.95rem", cursor: "pointer" }}
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <FaCheck size={14} style={{ color: "#10b981" }} />
                  <span style={{ color: "#10b981" }}>Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy size={14} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
