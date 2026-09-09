import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Badge,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import Link from "next/link";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.projects.title,
      display: about.projects.display,
      items: about.projects.projects.map((project) => project.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Column fillWidth horizontal="center" align="center" marginBottom="40">
        {about.avatar.display && (
          <Column
            fillWidth
            horizontal="center"
            align="center"
            gap="l"
            marginBottom="32"
          >
            <Avatar
              src={person.avatar}
              size="xl"
              style={{
                border: "2px solid rgba(6, 182, 212, 0.6)",
                boxShadow: "0 0 28px rgba(6, 182, 212, 0.4)",
              }}
            />

            <Row gap="24" vertical="center" horizontal="center" align="center" wrap marginTop="12" marginBottom="4">
              <Row gap="8" vertical="center" className="subtle-badge" style={{ padding: "6px 14px" }}>
                <Icon onBackground="accent-weak" name="mobile" />
                <Text variant="body-default-s" weight="strong">{person.mobileNumber}</Text>
              </Row>
              <Row gap="8" vertical="center" className="subtle-badge" style={{ padding: "6px 14px" }}>
                <Icon onBackground="accent-weak" name="globe" />
                <Text variant="body-default-s" weight="strong">{person.state}</Text>
              </Row>
            </Row>

            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="12" horizontal="center" vertical="center" marginTop="4" marginBottom="12">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l" style={{ padding: "6px 16px" }}>
                    {language}
                  </Tag>
                ))}
              </Row>
            )}

            {about.resume.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginTop="12"
                marginBottom="20"
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
                  <Link href={about.resume.link} download style={{ textDecoration: "none" }}>
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

            <Heading
              className={`${styles.textAlign} ${styles.myNameStyle}`}
              variant="display-strong-l"
              align="center"
              marginTop="12"
              marginBottom="4"
            >
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="brand-medium"
              align="center"
              weight="strong"
              marginBottom="16"
            >
              {person.role}
            </Text>

            {social.length > 0 && (
              <Row
                paddingTop="12"
                paddingBottom="16"
                gap="16"
                wrap
                horizontal="center"
                vertical="center"
                fitWidth
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="m"
                            weight="default"
                            variant="secondary"
                            rel="me"
                            className="btn-glow"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                            rel="me"
                            className="btn-glow"
                          />
                        </Row>
                      </React.Fragment>
                    )
                )}
              </Row>
            )}
          </Column>
        )}

        {about.intro.display && (
          <Column
            fillWidth
            gap="m"
            marginBottom="40"
            marginTop="16"
            horizontal="center"
            align="center"
          >
            <Text
              align="center"
              variant="body-default-l"
              onBackground="neutral-weak"
              style={{ textAlign: "center", maxWidth: "42rem", lineHeight: "1.7" }}
            >
              {about.intro.description}
            </Text>
          </Column>
        )}
      </Column>

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Row
                      fillWidth
                      horizontal="between"
                      vertical="end"
                      gap="4"
                      marginBottom="4"
                      s={{ direction: "column", horizontal: "start" }}
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row
                        fillWidth
                        paddingTop="m"
                        gap="12"
                        wrap
                      >
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            fillWidth
                            border="neutral-medium"
                            radius="m"
                            style={{ overflow: "hidden" }}
                          >
                            <Media
                              enlarge
                              radius="m"
                              aspectRatio="16 / 9"
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column
                    key={`${institution.name}-${index}`}
                    fillWidth
                    gap="4"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.projects.display && (
            <>
              <Heading
                as="h2"
                id={about.projects.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.projects.title}
              </Heading>
              <Column fillWidth style={{ gap: "2.5rem" }}>
                {about.projects.projects.map((project, index) => (
                  <Column key={`${project}-${index}`} fillWidth gap="4">
                    <Row fillWidth horizontal="between">
                      <Link href={project.link} target="_blank">
                        <Text id={project.title} variant="heading-strong-l">
                          {project.title}
                        </Text>
                      </Link>
                      <Button
                        href={project.github}
                        prefixIcon="github"
                        size="s"
                        weight="default"
                        variant="secondary"
                      />
                    </Row>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {project.description}
                    </Text>
                    {project.tags && project.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {project.tags.map((tag, tagIndex) => (
                          <Tag
                            key={`${project.title}-${tagIndex}`}
                            size="l"
                            prefixIcon={tag.icon}
                          >
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {project.images && project.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {project.images.map((image, index) => (
                          <Row
                            key={index}
                            fillWidth
                            border="neutral-medium"
                            radius="m"
                            style={{ overflow: "hidden" }}
                          >
                            <Media
                              enlarge
                              radius="m"
                              aspectRatio="16 / 9"
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
      </Column>
  );
}
