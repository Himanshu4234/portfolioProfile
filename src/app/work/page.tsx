import { Column, Heading, Meta, Schema, Text, Row, RevealFx } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Header */}
      <RevealFx speed="fast" fillWidth horizontal="center">
        <Column gap="12" horizontal="center" align="center" marginBottom="16">
          <Row vertical="center" gap="8" className="subtle-badge">
            <span className="pulse-dot" />
            <span>ENGINEERING SHOWCASE</span>
          </Row>
          <Heading
            as="h1"
            variant="display-strong-m"
            align="center"
            className="gradient-text"
          >
            Featured Projects & Case Studies
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
          >
            Explore enterprise applications, SaaS platforms, and digital tools architected with React, TypeScript, Next.js, and modern cloud technologies.
          </Text>
        </Column>
      </RevealFx>

      {/* Book-Style Projects Grid */}
      <Projects />
    </Column>
  );
}
