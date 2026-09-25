"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa6";
import { person } from "@/resources";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        padding: "80px 24px 120px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        {/* Section Header */}
        <div className="watermark-header" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="watermark-text" style={{ left: "50%", transform: "translateX(-50%)" }}>
            CONTACT
          </span>
          <div className="watermark-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="status-pill">
              <span className="pulse-dot" />
              <span>Available for Senior Frontend Roles</span>
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              Get In <span className="hero-gradient-name">Touch</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-tertiary)",
                maxWidth: "600px",
                margin: 0,
              }}
            >
              I’m open to full-time Senior Frontend Engineer roles, React consulting, and technical collaborations. Let’s talk!
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          {/* Email Card with 1-Click Copy */}
          <div
            className="glass-card"
            style={{
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(99, 102, 241, 0.15)",
                  color: "#6366f1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaEnvelope size={18} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: "0.72rem", color: "var(--color-text-tertiary)", margin: "0 0 2px 0", textTransform: "uppercase", fontWeight: 700 }}>
                  Email
                </p>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--color-text-primary)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {person.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              style={{
                padding: "8px",
                borderRadius: "var(--radius-xs)",
                background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.05)",
                border: copied ? "1px solid rgba(16, 185, 129, 0.5)" : "1px solid var(--border-subtle)",
                color: copied ? "#10b981" : "var(--color-text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
            >
              {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(10, 102, 194, 0.15)",
                  color: "#0a66c2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaLinkedin size={18} />
              </div>
              <div>
                <p style={{ fontSize: "0.72rem", color: "var(--color-text-tertiary)", margin: "0 0 2px 0", textTransform: "uppercase", fontWeight: 700 }}>
                  LinkedIn
                </p>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>
                  Himanshu Singh Chauhan
                </p>
              </div>
            </div>
            <FaArrowRight size={14} style={{ color: "var(--color-text-tertiary)" }} />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Himanshu4234"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "var(--color-text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaGithub size={18} />
              </div>
              <div>
                <p style={{ fontSize: "0.72rem", color: "var(--color-text-tertiary)", margin: "0 0 2px 0", textTransform: "uppercase", fontWeight: 700 }}>
                  GitHub
                </p>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>
                  @Himanshu4234
                </p>
              </div>
            </div>
            <FaArrowRight size={14} style={{ color: "var(--color-text-tertiary)" }} />
          </a>
        </div>

        {/* Big Direct Send Email Action */}
        <div style={{ textAlign: "center" }}>
          <a
            href={`mailto:${person.email}`}
            className="btn-primary-indigo"
            style={{ padding: "14px 36px", fontSize: "1.05rem" }}
          >
            <FaPaperPlane size={15} />
            <span>Send An Email Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
