import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import Preloader from "@/components/Preloader";
import { site } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const SITE_URL = "https://portfolio-dasun.vercel.app";
const TITLE = "Dasun Tharuka — Associate Software Engineer";
const DESCRIPTION =
  "Full-stack software engineer building production web apps end-to-end — React and Next.js frontends, Node.js and Go microservices, and blockchain integrations. Based in Colombo, Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Dasun Tharuka",
  },
  description: DESCRIPTION,
  keywords: [
    "Dasun Tharuka",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Node.js",
    "Blockchain",
    "Colombo",
    "Sri Lanka",
  ],
  authors: [{ name: site.fullName, url: SITE_URL }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Dasun Tharuka — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e16",
  colorScheme: "dark",
};

// Structured data: who this page is about, for rich results.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: SITE_URL,
  sameAs: [site.github, site.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "SLIIT" },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Blockchain",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-snow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
