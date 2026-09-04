"use client";

import { Column, Heading, Row, Text, RevealFx } from "@once-ui-system/core";

const skillCategories = [
  {
    category: "01 / Core Frontend",
    title: "Frameworks & Core Language",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS"],
  },
  {
    category: "02 / State & APIs",
    title: "State Management & Data",
    skills: ["Redux Toolkit", "TanStack Query", "Context API", "RESTful APIs", "Axios", "JSON APIs"],
  },
  {
    category: "03 / UI Systems",
    title: "Styling & Component Design",
    skills: ["Tailwind CSS", "CSS Modules", "Once UI System", "Material UI", "Figma Handoff", "Responsive Design"],
  },
  {
    category: "04 / Performance & Tools",
    title: "Optimization & Workflows",
    skills: ["Core Web Vitals", "Lighthouse Audits", "Code Splitting", "Git & GitHub", "Sentry Tracking", "Vite & Webpack"],
  },
];

export const SkillsMatrix = () => {
  return (
    <Column fillWidth gap="24" marginTop="32">
      <RevealFx speed="fast">
        <Column gap="8" className="watermark-header">
          <span className="watermark-text">EXPERTISE</span>
          <Column gap="8" className="watermark-content">
            <Row vertical="center" gap="12">
              <span className="subtle-badge">TECHNICAL MATRIX</span>
            </Row>
            <Heading as="h2" variant="display-strong-s" wrap="balance">
              Architecture & Skillset
            </Heading>
          </Column>
        </Column>
      </RevealFx>

      <Row fillWidth gap="16" wrap s={{ direction: "column" }}>
        {skillCategories.map((item, idx) => (
          <Column
            key={idx}
            flex={1}
            padding="24"
            gap="16"
            className="glass-card"
          >
            <Text variant="label-default-s" onBackground="brand-medium" weight="strong">
              {item.category}
            </Text>
            <Heading variant="heading-default-s" wrap="balance">
              {item.title}
            </Heading>
            <Row gap="8" wrap>
              {item.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </Row>
          </Column>
        ))}
      </Row>
    </Column>
  );
};
