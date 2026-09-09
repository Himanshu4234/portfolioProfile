"use client";

import React, { useState } from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  Badge,
} from "@once-ui-system/core";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectItem {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    images?: string[];
    link?: string;
    publishedAt?: string;
    team?: { avatar: string }[];
  };
  content?: string;
}

interface ProjectFlipbookProps {
  projects: ProjectItem[];
}

export const ProjectFlipbook: React.FC<ProjectFlipbookProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipAnim, setFlipAnim] = useState<"flip-anim-next" | "flip-anim-prev" | "">("");
  const [viewMode, setViewMode] = useState<"flipbook" | "grid">("flipbook");

  // Touch Swipe Gesture State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 40;

  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];
  const { title, summary, images = [], link } = currentProject.metadata;
  const href = `/work/${currentProject.slug}`;

  // Extract main title and subtitle
  const [mainTitle, subtitle] = title.includes("—")
    ? title.split("—").map((s) => s.trim())
    : [title, "Enterprise Web Application"];

  const mainImage = images[0] || "/images/og/home.webp";

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setFlipAnim("flip-anim-next");
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setFlipAnim("");
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setFlipAnim("flip-anim-prev");
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setFlipAnim("");
      }, 300);
    }
  };

  // Touch Swipe Handlers for Mobile
  const onTouchStartHandler = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < projects.length - 1) {
      handleNext();
    } else if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

  return (
    <Column fillWidth gap="24" horizontal="center">
      {/* View Mode & Page Navigation Controls */}
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        paddingX="16"
        wrap
        gap="12"
      >
        {/* Left: View Mode Switcher */}
        <Row gap="8" vertical="center">
          <Button
            size="s"
            variant={viewMode === "flipbook" ? "primary" : "secondary"}
            onClick={() => setViewMode("flipbook")}
          >
            📖 Magazine Flipbook
          </Button>
          <Button
            size="s"
            variant={viewMode === "grid" ? "primary" : "secondary"}
            onClick={() => setViewMode("grid")}
          >
            ☰ Grid View
          </Button>
        </Row>

        {/* Right: Flipbook Page Counter & Mobile Swipe Hint */}
        {viewMode === "flipbook" && (
          <Row gap="12" vertical="center">
            <span className="subtle-badge">
              PAGE {currentIndex + 1} OF {projects.length}
            </span>
          </Row>
        )}
      </Row>

      {/* View 1: Flipbook View */}
      {viewMode === "flipbook" ? (
        <Column fillWidth gap="16" className="flipbook-container">
          <div
            className={`flipbook-book glass-card glass-card-accent ${flipAnim}`}
            onTouchStart={onTouchStartHandler}
            onTouchMove={onTouchMoveHandler}
            onTouchEnd={onTouchEndHandler}
            style={{
              padding: "24px",
              minHeight: "420px",
            }}
          >
            <Row
              fillWidth
              gap="16"
              vertical="stretch"
              s={{ direction: "column" }}
            >
              {/* Left Page (Media & Device Frame) */}
              <Column
                flex={6}
                fillWidth
                gap="12"
                className="flipbook-page-left"
              >
                <Row fillWidth horizontal="between" vertical="center">
                  <Text variant="label-default-xs" onBackground="brand-medium" weight="strong">
                    ISSUE 0{currentIndex + 1} // PORTFOLIO EDITORIAL
                  </Text>
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {link ? new URL(link).hostname : "portfolio.app"}
                  </Text>
                </Row>

                {/* Device Frame */}
                <div
                  className="flipbook-image-frame"
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/10",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid var(--neutral-alpha-medium)",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Image
                    src={mainImage}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    className="project-image-hover"
                  />
                </div>

                <Row gap="8" wrap marginTop="2">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Tailwind CSS</span>
                </Row>
              </Column>

              {/* Right Page (Editorial Details & Spec) */}
              <Column
                flex={6}
                fillWidth
                gap="16"
                vertical="between"
                className="flipbook-page-right"
              >
                <Column gap="8">
                  <Row vertical="center" gap="8" wrap>
                    <span className="subtle-badge">CASE STUDY #{currentIndex + 1}</span>
                    {subtitle && (
                      <span className="skill-tag">
                        {subtitle}
                      </span>
                    )}
                  </Row>

                  <Heading as="h2" variant="display-strong-s" wrap="balance">
                    {mainTitle}
                  </Heading>

                  <Text
                    variant="body-default-m"
                    onBackground="neutral-weak"
                    wrap="balance"
                    className="flipbook-summary-mobile"
                    style={{ lineHeight: "1.55" }}
                  >
                    {summary}
                  </Text>
                </Column>

                {/* Action Buttons & Flip Page Indicator */}
                <Column gap="12">
                  <Row gap="12" wrap vertical="center">
                    {link && (
                      <Button
                        href={link}
                        variant="primary"
                        size="m"
                        suffixIcon="arrowUpRightFromSquare"
                        className="btn-glow"
                      >
                        Live Preview
                      </Button>
                    )}
                    <Button
                      href={href}
                      variant="secondary"
                      size="m"
                      suffixIcon="chevronRight"
                    >
                      Read Full Story
                    </Button>
                  </Row>

                  <Row hide s={{ hide: false }} horizontal="center" marginTop="4">
                    <span className="subtle-badge" style={{ fontSize: "0.75rem", padding: "2px 10px" }}>
                      👈 Swipe Left / Right to Flip 👉
                    </span>
                  </Row>
                </Column>
              </Column>
            </Row>
          </div>

          {/* Flip Controls Bar */}
          <Row fillWidth horizontal="between" vertical="center" paddingX="8">
            <Button
              size="m"
              variant="secondary"
              prefixIcon="chevronLeft"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              Previous Page
            </Button>

            {/* Page Dots */}
            <Row gap="8" vertical="center">
              {projects.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setFlipAnim(dotIdx > currentIndex ? "flip-anim-next" : "flip-anim-prev");
                    setTimeout(() => {
                      setCurrentIndex(dotIdx);
                      setFlipAnim("");
                    }, 300);
                  }}
                  style={{
                    width: currentIndex === dotIdx ? "24px" : "10px",
                    height: "10px",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor:
                      currentIndex === dotIdx
                        ? "#06b6d4"
                        : "var(--neutral-alpha-medium)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  aria-label={`Go to page ${dotIdx + 1}`}
                />
              ))}
            </Row>

            <Button
              size="m"
              variant="secondary"
              suffixIcon="chevronRight"
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
            >
              Next Page
            </Button>
          </Row>
        </Column>
      ) : (
        /* View 2: Classic Grid View */
        <Column fillWidth gap="xl">
          {projects.map((post, idx) => (
            <ProjectCard
              key={post.slug}
              index={idx}
              href={`/work/${post.slug}`}
              images={post.metadata.images || []}
              title={post.metadata.title}
              description={post.metadata.summary}
              link={post.metadata.link || ""}
            />
          ))}
        </Column>
      )}
    </Column>
  );
};
