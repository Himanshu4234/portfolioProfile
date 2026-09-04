"use client";

import React, { useState } from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  Badge,
  Flex,
} from "@once-ui-system/core";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content?: string;
  description: string;
  avatars?: { src: string }[];
  link?: string;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
  link,
  index = 0,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isEven = index % 2 === 0;

  // Extract clean display title and role badge
  const [mainTitle, subtitle] = title.includes("—")
    ? title.split("—").map((s) => s.trim())
    : [title, "Enterprise Web Application"];

  const mainImage = images[activeImageIndex] || "/images/og/home.webp";

  return (
    <div
      className="glass-card glass-card-accent"
      style={{
        width: "100%",
        borderRadius: "24px",
        padding: "24px",
        marginBottom: "32px",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Row
        fillWidth
        gap="32"
        vertical="center"
        s={{ direction: "column" }}
        className={isEven ? "project-card-row" : "project-card-reverse"}
      >
        {/* Left Side: Book Cover / Interactive Device Frame */}
        <Column
          flex={6}
          fillWidth
          gap="12"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "16px",
            background: "var(--neutral-alpha-medium)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* Browser Header Bar */}
          <Row
            fillWidth
            paddingX="16"
            paddingY="8"
            vertical="center"
            horizontal="between"
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              borderBottom: "1px solid var(--neutral-alpha-weak)",
            }}
          >
            <Row gap="8" vertical="center">
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ff5f56",
                }}
              />
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                }}
              />
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#27c93f",
                }}
              />
            </Row>
            <Text variant="label-default-xs" onBackground="neutral-weak">
              {link ? new URL(link).hostname : "portfolio.app"}
            </Text>
          </Row>

          {/* Main Image Preview */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/10",
              overflow: "hidden",
              borderRadius: "0 0 16px 16px",
            }}
          >
            <Image
              src={mainImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                transition: "transform 0.5s ease",
              }}
              className="project-image-hover"
            />
          </div>

          {/* Carousel thumbnails if multiple images exist */}
          {images.length > 1 && (
            <Row gap="8" padding="8" horizontal="center" fillWidth>
              {images.map((img, imgIdx) => (
                <button
                  key={imgIdx}
                  onClick={() => setActiveImageIndex(imgIdx)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor:
                      activeImageIndex === imgIdx
                        ? "#06b6d4"
                        : "var(--neutral-alpha-medium)",
                    transition: "all 0.2s ease",
                  }}
                  aria-label={`View slide ${imgIdx + 1}`}
                />
              ))}
            </Row>
          )}
        </Column>

        {/* Right Side: Book Details & Project Content */}
        <Column flex={6} fillWidth gap="16" vertical="center">
          <Row vertical="center" gap="8" wrap>
            <span className="subtle-badge">PROJECT {index + 1}</span>
            {subtitle && (
              <span className="skill-tag">
                {subtitle}
              </span>
            )}
          </Row>

          <Heading as="h3" variant="display-strong-s" wrap="balance">
            {mainTitle}
          </Heading>

          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            wrap="balance"
            style={{ lineHeight: "1.6" }}
          >
            {description}
          </Text>

          {/* Action Links & CTAs */}
          <Row gap="12" wrap marginTop="8" vertical="center">
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
              Read Case Study
            </Button>
          </Row>
        </Column>
      </Row>
    </div>
  );
};
