import {
  Heading,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import {
  HeroHeader,
  StatsBanner,
  SkillsMatrix,
  ExperienceHighlights,
  QuickContact,
} from "@/components/home";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      {/* Schema WebPage JSON-LD */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* 1. New Hero Section with Status Pill & H1 Name */}
      <HeroHeader />

      {/* 2. Key Metrics & Impact Banner */}
      <StatsBanner />

      {/* 3. Featured Projects Showcase */}
      <Column fillWidth gap="16" marginTop="24">
        <RevealFx speed="fast">
          <Column gap="8" className="watermark-header">
            <span className="watermark-text">PORTFOLIO</span>
            <Column gap="8" className="watermark-content">
              <Row vertical="center" gap="12">
                <span className="subtle-badge">FEATURED WORK</span>
              </Row>
              <Heading as="h2" variant="display-strong-s" wrap="balance">
                Enterprise Applications & Products
              </Heading>
            </Column>
          </Column>
        </RevealFx>
        <Projects />
      </Column>

      {/* 4. Technical Skills & Architecture Matrix */}
      <SkillsMatrix />

      {/* 6. Career Chapters & Experience Highlights */}
      <ExperienceHighlights />

      {/* Optional Blog Posts */}
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l" marginTop="32">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest Insights
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      {/* 7. Quick Contact CTA Block */}
      <QuickContact />

      {/* Mailchimp Newsletter (if enabled) */}
      <Mailchimp />
    </Column>
  );
}
