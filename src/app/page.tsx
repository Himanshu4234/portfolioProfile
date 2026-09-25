import { Schema, Meta } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import {
  HeroHeader,
  AboutSection,
  ProjectsSection,
  GithubActivitySection,
  ProjectInquiryBanner,
  SkillsSection,
  ExperienceTimeline,
  ContactSection,
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
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Schema WebPage JSON-LD for Search Engines */}
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

      {/* 1. Hero Section with 3D Celestial Canvas & Availability Badge */}
      <HeroHeader />

      {/* 2. About Me Section & "How I Work" Matrix */}
      <AboutSection />

      {/* 3. Commercial & Featured Projects with Interactive Filters */}
      <ProjectsSection />

      {/* 4. GitHub Contributions & Commit Activity Heatmap */}
      <GithubActivitySection />

      {/* 5. "Have a Project in Mind?" CTA Banner */}
      <ProjectInquiryBanner />

      {/* 6. Skills & Frontend Architecture Stack */}
      <SkillsSection />

      {/* 7. Professional Journey & Education Timeline */}
      <ExperienceTimeline />

      {/* 8. Quick Contact Section with 1-Click Copy & Socials */}
      <ContactSection />
    </div>
  );
}
