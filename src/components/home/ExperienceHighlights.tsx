"use client";

import { Column, Heading, Row, Text, RevealFx, Button } from "@once-ui-system/core";
import Link from "next/link";

const highlights = [
  {
    role: "Software Engineer (Frontend)",
    company: "Hocalwire Labs Pvt Ltd",
    period: "Jan 2023 – Present",
    tag: "Full-Time",
    bullets: [
      "Directed frontend architecture for 3 enterprise applications, accelerating delivery cycles by 25%.",
      "Optimized bundle size, asset loading, and image compression—boosting Lighthouse performance by 35%.",
      "Mentored junior engineers and instituted TypeScript best practices and modular React component patterns.",
    ],
  },
  {
    role: "Legal Journalism Platform Architect",
    company: "LiveLaw — India's Premier Legal News",
    period: "Featured Project",
    tag: "High Traffic",
    bullets: [
      "Built article-heavy news interfaces rendering real-time court news and subscription legal content.",
      "Optimized Core Web Vitals (LCP/CLS) to support 1M+ monthly readers seamlessly.",
    ],
  },
  {
    role: "Multi-Tenant Platform Developer",
    company: "Shopperce AI — E-Commerce Suite",
    period: "Featured Project",
    tag: "SaaS Platform",
    bullets: [
      "Engineered a multi-tenant React + Vite storefront architecture allowing partners to load custom brand themes dynamically.",
      "Built seller admin dashboards for catalog, order, and revenue analytics management.",
    ],
  },
];

export const ExperienceHighlights = () => {
  return (
    <Column fillWidth gap="24" marginTop="32">
      <RevealFx speed="fast">
        <Column gap="8" className="watermark-header">
          <span className="watermark-text">CHAPTERS</span>
          <Column gap="8" className="watermark-content">
            <Row vertical="center" gap="12">
              <span className="subtle-badge">CAREER IMPACT</span>
            </Row>
            <Heading as="h2" variant="display-strong-s" wrap="balance">
              Featured Experience & Impact
            </Heading>
          </Column>
        </Column>
      </RevealFx>

      <Column fillWidth gap="16">
        {highlights.map((item, idx) => (
          <Column
            key={idx}
            fillWidth
            padding="24"
            gap="16"
            className="glass-card glass-card-accent"
          >
            <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
              <Column gap="4">
                <Heading variant="heading-default-m" wrap="balance">
                  {item.role}
                </Heading>
                <Text variant="body-default-s" onBackground="brand-medium" weight="strong">
                  {item.company}
                </Text>
              </Column>
              <Row gap="12" vertical="center">
                <span className="subtle-badge">{item.tag}</span>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {item.period}
                </Text>
              </Row>
            </Row>

            <Column gap="8">
              {item.bullets.map((bullet, bIdx) => (
                <Row key={bIdx} gap="12" vertical="start">
                  <Text onBackground="brand-medium">•</Text>
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    {bullet}
                  </Text>
                </Row>
              ))}
            </Column>
          </Column>
        ))}
      </Column>

      <RevealFx speed="fast" horizontal="center">
        <Button href="/about" variant="secondary" size="m" arrowIcon>
          View Full Background & Education
        </Button>
      </RevealFx>
    </Column>
  );
};
