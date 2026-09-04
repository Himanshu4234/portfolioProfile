"use client";

import { Column, Heading, Row, Text, Button, RevealFx } from "@once-ui-system/core";
import { person, social } from "@/resources";

export const QuickContact = () => {
  return (
    <RevealFx speed="fast" fillWidth marginTop="32">
      <Column
        fillWidth
        padding="32"
        gap="20"
        horizontal="center"
        className="glass-card glass-card-accent"
      >
        <Column gap="8" horizontal="center">
          <span className="subtle-badge">LET'S CONNECT</span>
          <Heading
            as="h2"
            variant="display-strong-s"
            wrap="balance"
            align="center"
            className="gradient-text"
          >
            Ready to build high-performance web experiences?
          </Heading>
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            align="center"
          >
            Open for Senior Frontend Engineer & Full-Stack Development opportunities. Feel free to reach out directly via email or social networks.
          </Text>
        </Column>

        <Row gap="16" wrap vertical="center" horizontal="center">
          <Button
            href={`mailto:${person.email}`}
            variant="primary"
            size="m"
            className="btn-glow"
          >
            Send Email
          </Button>
          <Button
            href="https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/"
            variant="secondary"
            size="m"
          >
            LinkedIn Profile
          </Button>
          <Button
            href="https://github.com/Himanshu4234"
            variant="tertiary"
            size="m"
          >
            GitHub Projects
          </Button>
        </Row>
      </Column>
    </RevealFx>
  );
};
