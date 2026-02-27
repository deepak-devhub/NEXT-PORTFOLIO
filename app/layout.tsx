import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorTracker from "@/components/CursorTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deepakdevhub.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Deepak VK",
    default: "Deepak VK | Full Stack Developer India",
  },
  description:
    "Full Stack Developer in India specializing in React, Next.js, Node.js & NestJS. Building scalable web applications with modern tech stack. Hire me for your next project.",
  keywords: [
    "Deepak VK",
    "Full Stack Developer India",
    "Web Developer India",
    "Freelance Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Full Stack Engineer",
    "Software Developer Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  authors: [
    {
      name: "Deepak VK",
      url: siteUrl,
    },
  ],
  creator: "Deepak VK",
  publisher: "Deepak VK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Deepak VK - Full Stack Developer",
    title: "Deepak VK | Full Stack Developer India",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js & NestJS. Building scalable web applications.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Deepak VK - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak VK | Full Stack Developer India",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js & NestJS. Building scalable web applications.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@deepak_vk",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Deepak VK" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deepak VK",
              jobTitle: "Full Stack Developer",
              url: siteUrl,
              image: `${siteUrl}/og-image.jpg`,
              sameAs: [
                "https://github.com/deepak-devhub",
                "https://linkedin.com/in/deepak-vk",
                "https://twitter.com/deepak_vk",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "TypeScript",
                "JavaScript",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Express.js",
                "Tailwind CSS",
                "Web Development",
                "Full Stack Development",
                "REST APIs",
                "GraphQL",
              ],
              email: "deepakvk6334@gmail.com",
              telephone: "+91-XXXXXXXXXX",
              address: {
                        "@type": "PostalAddress",
                        addressLocality: "Kozhikode",
                        addressRegion: "Kerala",
                        addressCountry: "India"
                        },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorTracker />
        {children}
      </body>
    </html>
  );
}
