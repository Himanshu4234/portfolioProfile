import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Himanshu Singh Chauhan | Portfolio",
    short_name: "Himanshu",
    description: "Official portfolio of Himanshu Singh Chauhan, Senior Frontend Engineer specializing in React.js, Next.js, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#090d16",
    theme_color: "#06b6d4",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
