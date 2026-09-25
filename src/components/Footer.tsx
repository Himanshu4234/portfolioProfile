"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from "react-icons/fa6";
import { person } from "@/resources";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid var(--border-subtle)",
        background: "rgba(3, 7, 18, 0.8)",
        padding: "32px 24px 48px 24px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Left: Brand & Copyright */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span className="hero-gradient-name" style={{ fontSize: "1.1rem", fontWeight: 800 }}>
              HC
            </span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
              {person.name}
            </span>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--color-text-tertiary)", margin: 0 }}>
            © {currentYear} · Crafted with Next.js, React & TypeScript
          </p>
        </div>

        {/* Center: Social Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://github.com/Himanshu4234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              color: "var(--color-text-tertiary)",
              transition: "all 0.2s ease",
            }}
          >
            <FaGithub size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              color: "var(--color-text-tertiary)",
              transition: "all 0.2s ease",
            }}
          >
            <FaLinkedin size={15} />
          </a>

          <a
            href="https://www.instagram.com/himanshu_chauhan0107"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              color: "var(--color-text-tertiary)",
              transition: "all 0.2s ease",
            }}
          >
            <FaInstagram size={15} />
          </a>

          <a
            href={`mailto:${person.email}`}
            aria-label="Email Himanshu"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              color: "var(--color-text-tertiary)",
              transition: "all 0.2s ease",
            }}
          >
            <FaEnvelope size={14} />
          </a>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            borderRadius: "var(--radius-full)",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid var(--border-subtle)",
            color: "var(--color-text-tertiary)",
            fontSize: "0.78rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <span>Back to Top</span>
          <FaArrowUp size={11} />
        </button>
      </div>
    </footer>
  );
};
