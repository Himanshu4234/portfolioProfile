"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { person } from "@/resources";

export const Header: React.FC = () => {
  const pathname = usePathname() ?? "";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: "100%",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        background: isScrolled
          ? "rgba(3, 7, 18, 0.75)"
          : "transparent",
        borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Left Brand Logo */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          className="hero-gradient-name"
          style={{
            fontSize: "1.45rem",
            fontWeight: 900,
            letterSpacing: "-0.04em",
          }}
        >
          HC
        </span>
      </Link>

      {/* Center Nav Links on Desktop */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "4px 8px",
          borderRadius: "var(--radius-full)",
          background: "rgba(15, 23, 42, 0.6)",
          border: "1px solid var(--border-subtle)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="hide-on-mobile"
      >
        <Link
          href="/#home"
          style={{
            padding: "6px 14px",
            borderRadius: "var(--radius-full)",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: pathname === "/" ? "#ffffff" : "var(--color-text-tertiary)",
            background: pathname === "/" ? "rgba(99, 102, 241, 0.25)" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          style={{
            padding: "6px 14px",
            borderRadius: "var(--radius-full)",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: pathname === "/about" ? "#ffffff" : "var(--color-text-tertiary)",
            background: pathname === "/about" ? "rgba(99, 102, 241, 0.25)" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          About
        </Link>
        <Link
          href="/work"
          style={{
            padding: "6px 14px",
            borderRadius: "var(--radius-full)",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: pathname.startsWith("/work") ? "#ffffff" : "var(--color-text-tertiary)",
            background: pathname.startsWith("/work") ? "rgba(99, 102, 241, 0.25)" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          style={{
            padding: "6px 14px",
            borderRadius: "var(--radius-full)",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "var(--color-text-tertiary)",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          Contact
        </Link>
      </nav>

      {/* Right Action: Let's Connect CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <a
          href="mailto:himanshuchauhan85.hc@gmail.com"
          className="btn-primary-indigo"
          style={{ padding: "7px 16px", fontSize: "0.82rem" }}
        >
          <span>Let's Talk</span>
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          :global(.hide-on-mobile) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
