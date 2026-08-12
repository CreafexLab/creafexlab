import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Creafex Lab",
    short_name: "Creafex",
    description:
      "Independent software products built with design, engineering, and AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8faff",
    theme_color: "#f8faff",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
