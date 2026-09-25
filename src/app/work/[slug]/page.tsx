import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, Media } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaCalendar, FaLayerGroup } from "react-icons/fa6";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: `${post.metadata.title} — Case Study`,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const allPosts = getPosts(["src", "app", "work", "projects"]);
  let post = allPosts.find((p) => p.slug === slugPath);

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts.filter((p) => p.slug !== slugPath).slice(0, 2);

  return (
    <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", padding: "40px 24px 100px 24px" }}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <div style={{ marginBottom: "28px" }}>
        <Link
          href="/work"
          className="btn-secondary-glass"
          style={{ padding: "8px 16px", fontSize: "0.85rem", width: "fit-content" }}
        >
          <FaArrowLeft size={12} />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Header Container */}
      <div
        className="glass-card"
        style={{
          padding: "36px",
          marginBottom: "36px",
          background: "radial-gradient(circle at top right, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0.7) 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <span className="status-pill" style={{ fontSize: "0.75rem", padding: "4px 12px" }}>
            <FaLayerGroup size={11} />
            <span>Architecture & Case Study</span>
          </span>
          {post.metadata.publishedAt && (
            <span style={{ fontSize: "0.8rem", color: "var(--color-text-tertiary)", display: "flex", alignItems: "center", gap: "6px" }}>
              <FaCalendar size={11} />
              {formatDate(post.metadata.publishedAt)}
            </span>
          )}
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            lineHeight: 1.2,
            margin: "0 0 16px 0",
          }}
        >
          {post.metadata.title}
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
            margin: 0,
          }}
        >
          {post.metadata.summary}
        </p>
      </div>

      {/* Hero Cover Image if present */}
      {post.metadata.images && post.metadata.images.length > 0 && (
        <div
          style={{
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            marginBottom: "40px",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 12px 36px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Media priority aspectRatio="16 / 9" radius="m" alt={post.metadata.title} src={post.metadata.images[0]} />
        </div>
      )}

      {/* Article Content */}
      <article
        style={{
          width: "100%",
          lineHeight: 1.8,
          fontSize: "1rem",
          color: "var(--color-text-secondary)",
        }}
      >
        <CustomMDX source={post.content} />
      </article>

      {/* Related Projects */}
      {relatedPosts.length > 0 && (
        <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid var(--border-subtle)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "24px" }}>
            Related Case Studies
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {relatedPosts.map((related, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "14px" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", margin: "0 0 8px 0" }}>
                    {related.metadata.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-tertiary)", margin: 0, lineHeight: 1.5 }}>
                    {related.metadata.summary}
                  </p>
                </div>
                <Link
                  href={`/work/${related.slug}`}
                  className="btn-secondary-glass"
                  style={{ padding: "6px 14px", fontSize: "0.8rem", width: "fit-content" }}
                >
                  <span>Read Case Study</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <ScrollToHash />
    </div>
  );
}
