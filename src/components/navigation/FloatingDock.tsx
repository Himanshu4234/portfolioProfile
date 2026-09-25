"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHouse,
  FaUser,
  FaBriefcase,
  FaLayerGroup,
  FaMicrochip,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa6";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <FaHouse size={16} />, href: "/#home" },
  { id: "about", label: "About", icon: <FaUser size={16} />, href: "/#about" },
  { id: "projects", label: "Projects", icon: <FaBriefcase size={16} />, href: "/#projects" },
  { id: "github-activity", label: "Activity", icon: <FaGithub size={16} />, href: "/#github-activity" },
  { id: "skills", label: "Skills", icon: <FaLayerGroup size={16} />, href: "/#skills" },
  { id: "experience", label: "Experience", icon: <FaMicrochip size={16} />, href: "/#experience" },
  { id: "contact", label: "Contact", icon: <FaEnvelope size={16} />, href: "/#contact" },
];

export const FloatingDock: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isHomePage) return;

    const sections = ["home", "about", "projects", "github-activity", "skills", "experience", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <aside aria-label="Floating Navigation Dock" className="floating-nav-dock">
      {navItems.map((item) => {
        const isActive = isHomePage
          ? activeSection === item.id
          : (item.id === "about" && pathname === "/about") ||
            (item.id === "projects" && pathname.startsWith("/work"));

        if (item.isExternal) {
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-nav-item"
              aria-label={item.label}
            >
              {item.icon}
              <span className="floating-tooltip">{item.label}</span>
            </a>
          );
        }

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`floating-nav-item ${isActive ? "active" : ""}`}
            aria-label={item.label}
          >
            {item.icon}
            <span className="floating-tooltip">{item.label}</span>
          </Link>
        );
      })}

      {/* Divider */}
      <div
        style={{
          width: "20px",
          height: "1px",
          background: "var(--border-subtle)",
          margin: "4px 0",
        }}
      />

      {/* Direct Contact / Let's Talk CTA */}
      <a
        href="mailto:himanshuchauhan85.hc@gmail.com"
        className="floating-nav-item"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
          color: "#ffffff",
          boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
        }}
        aria-label="Let's Talk"
      >
        <FaPaperPlane size={13} />
        <span className="floating-tooltip">Let's Talk</span>
      </a>
    </aside>
  );
};
