import type { Metadata, Viewport } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// We ship the Font Awesome stylesheet ourselves, so stop it injecting a second
// copy at runtime (which makes the icons flash oversized on first paint).
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Creafex Lab — Useful software, built with care",
  description:
    "Creafex Lab is Vladimir Haltakov's independent product company, building Simple Photo Gallery, Simple Post, Simple Muscle, and more.",
  authors: [{ name: "Vladimir Haltakov", url: "https://haltakov.com" }],
  metadataBase: new URL("https://creafexlab.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Creafex Lab",
    description:
      "An independent product company by Vladimir Haltakov, building focused software where design and AI meet.",
    type: "website",
    siteName: "Creafex Lab",
    images: ["/social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creafex Lab",
    description:
      "An independent product company by Vladimir Haltakov, building focused software where design and AI meet.",
    creator: "@haltakov",
    images: ["/social.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#f8faff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
