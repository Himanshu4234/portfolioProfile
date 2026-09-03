import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const currentDate = new Date().toISOString().split("T")[0];
  const isBlogEnabled = !!routesConfig["/blog"];
  const isWorkEnabled = !!routesConfig["/work"];

  const blogs = isBlogEnabled
    ? getPosts(["src", "app", "blog", "posts"]).map((post) => ({
        url: `${baseURL}/blog/${post.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }))
    : [];

  const works = isWorkEnabled
    ? getPosts(["src", "app", "work", "projects"]).map((post) => ({
        url: `${baseURL}/work/${post.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }))
    : [];

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: currentDate,
    changeFrequency: "daily" as const,
    priority: route === "/" ? 1.0 : 0.9,
  }));

  return [...routes, ...works, ...blogs];
}
