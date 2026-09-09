"use client";

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Badge,
  Line,
} from "@once-ui-system/core";
import { person, about, home } from "@/resources";
import Link from "next/link";

export const HeroHeader = () => {
  return (
    <Column fillWidth horizontal="center" align="center" gap="l" paddingTop="24">
      {/* Profile Photo & Availability Status Badge */}
      <RevealFx speed="fast" fillWidth horizontal="center">
        <Column fillWidth horizontal="center" align="center" gap="16">
          <Avatar
            src={person.avatar}
            size="xl"
            style={{
              border: "2px solid rgba(6, 182, 212, 0.6)",
              boxShadow: "0 0 24px rgba(6, 182, 212, 0.35)",
            }}
          />
          <Row gap="8" vertical="center" horizontal="center" align="center" className="subtle-badge">
            <span className="pulse-dot" />
            <span>AVAILABLE FOR SENIOR FRONTEND ROLES</span>
          </Row>
        </Column>
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
      <RevealFx speed="fast" delay={0.3} maxWidth="s" horizontal="center" fillWidth>
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
      <RevealFx speed="fast" delay={0.4} fillWidth horizontal="center">
        <Column fillWidth horizontal="center" align="center">
          <Row
            gap="16"
            vertical="center"
            horizontal="center"
            align="center"
            wrap
            fillWidth
            s={{ direction: "column", horizontal: "center" }}
          >
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

            {/* Download Resume Button (Highlighted Glass Badge) */}
            {home.featured.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                vertical="center"
                horizontal="center"
                className="btn-glow"
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                  boxShadow: "0 4px 20px rgba(6, 182, 212, 0.25)",
                  border: "1px solid rgba(6, 182, 212, 0.4)",
                  cursor: "pointer",
                }}
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="16"
                  paddingY="4"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  arrow={false}
                >
                  <Link href={home.featured.href} download style={{ textDecoration: "none" }}>
                    <Row gap="12" vertical="center" horizontal="center" paddingY="2">
                      <strong style={{ fontWeight: 700, fontSize: "0.95rem" }}>Download</strong>
                      <Line background="brand-alpha-strong" vert height="16" />
                      <Text marginRight="4" onBackground="brand-medium" weight="strong" style={{ fontSize: "0.95rem" }}>
                        My Resume (PDF)
                      </Text>
                    </Row>
                  </Link>
                </Badge>
              </Row>
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
        </Column>
      </RevealFx>
    </Column>
  );
};
