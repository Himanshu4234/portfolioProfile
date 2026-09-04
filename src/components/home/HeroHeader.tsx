"use client";

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
} from "@once-ui-system/core";
import { person, about, home } from "@/resources";
import Link from "next/link";

export const HeroHeader = () => {
  return (
    <Column fillWidth horizontal="center" gap="l" paddingTop="24">
      {/* Profile Photo & Availability Status Badge */}
      <RevealFx speed="fast">
        <Row gap="16" vertical="center" s={{ direction: "column" }}>
          <Avatar
            src={person.avatar}
            size="xl"
            style={{
              border: "2px solid rgba(6, 182, 212, 0.6)",
              boxShadow: "0 0 24px rgba(6, 182, 212, 0.35)",
            }}
          />
          <Row gap="8" vertical="center" className="subtle-badge">
            <span className="pulse-dot" />
            <span>AVAILABLE FOR SENIOR FRONTEND ROLES</span>
          </Row>
        </Row>
      </RevealFx>

      {/* Main Heading H1 */}
      <RevealFx speed="fast" delay={0.1} fillWidth horizontal="center">
        <Heading
          as="h1"
          wrap="balance"
          variant="display-strong-l"
          align="center"
          className="gradient-text"
        >
          {home.headline}
        </Heading>
      </RevealFx>

      {/* Subtitle Role */}
      <RevealFx speed="fast" delay={0.2} fillWidth horizontal="center">
        <Text
          wrap="balance"
          onBackground="brand-medium"
          variant="heading-default-l"
          align="center"
          weight="strong"
        >
          Senior Frontend Engineer & React Specialist
        </Text>
      </RevealFx>

      {/* Detailed Hero Bio */}
      <RevealFx speed="fast" delay={0.3} maxWidth="s" horizontal="center">
        <Text
          wrap="balance"
          onBackground="neutral-weak"
          variant="body-default-l"
          align="center"
        >
          3+ years of experience engineering high-performance web applications,
          scalable React & Next.js architectures, and enterprise design systems
          serving over 1M+ monthly users.
        </Text>
      </RevealFx>

      {/* Action Buttons */}
      <RevealFx speed="fast" delay={0.4} horizontal="center">
        <Row gap="16" vertical="center" wrap s={{ direction: "column", horizontal: "center" }}>
          {/* Explore Projects Button */}
          <Button
            href="/work"
            variant="primary"
            size="m"
            weight="default"
            arrowIcon
            className="btn-glow"
          >
            Explore Featured Work
          </Button>

          {/* Download Resume Button */}
          {home.featured.display && (
            <Button
              id="download-resume"
              data-border="rounded"
              href={home.featured.href}
              variant="secondary"
              size="m"
              weight="default"
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                Download Resume
              </Row>
            </Button>
          )}

          {/* Contact Button */}
          <Button
            href={`mailto:${person.email}`}
            variant="tertiary"
            size="m"
            weight="default"
          >
            Get In Touch
          </Button>
        </Row>
      </RevealFx>
    </Column>
  );
};
