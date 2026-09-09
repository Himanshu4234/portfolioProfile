"use client";

import { Column, Heading, Row, Text, RevealFx } from "@once-ui-system/core";

const stats = [
  {
    value: "3+ Yrs",
    label: "Frontend Engineering",
    description: "Building scalable React & Next.js web applications",
  },
  {
    value: "3+ Apps",
    label: "Enterprise Platforms",
    description: "LiveLaw, Shopperce AI & NextLeap Corporate",
  },
  {
    value: "35%+",
    label: "Lighthouse Boost",
    description: "Core Web Vitals & bundle performance optimization",
  },
  {
    value: "1M+",
    label: "Monthly Readers",
    description: "Active reach across enterprise news & commerce tools",
  },
];

export const StatsBanner = () => {
  return (
    <RevealFx speed="fast" delay={0.5} fillWidth>
      <Row
        fillWidth
        gap="16"
        marginTop="24"
        marginBottom="16"
        horizontal="center"
        s={{ direction: "column" }}
      >
        {stats.map((stat, idx) => (
          <Column
            key={idx}
            flex={1}
            padding="20"
            gap="8"
            horizontal="center"
            align="center"
            className="glass-card"
          >
            <Heading variant="display-strong-s" align="center" className="gradient-text">
              {stat.value}
            </Heading>
            <Text variant="heading-default-xs" align="center" onBackground="neutral-strong" weight="strong">
              {stat.label}
            </Text>
            <Text variant="body-default-xs" align="center" onBackground="neutral-weak">
              {stat.description}
            </Text>
          </Column>
        ))}
      </Row>
    </RevealFx>
  );
};
