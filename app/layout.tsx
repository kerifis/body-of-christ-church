import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Body of Christ Church Edmonton | Worship & Community",
  description:
    "Join Body of Christ Church in Edmonton for worship, community, and spiritual growth. Discover sermons, events, and ministries for all ages.",
  authors: [{ name: "Body of Christ Church" }],
  keywords: [
    "Body of Christ Church",
    "Body of Christ Church Edmonton",
    "Edmonton church",
    "Christian church Edmonton",
    "Worship Edmonton",
    "Church community",
    "Sermons",
    "Ministries",
  ],
  alternates: {
    canonical: "https://bocchurch.ca",
  },
  openGraph: {
    title: "Body of Christ Church Edmonton | Worship & Community",
    description:
      "Join Body of Christ Church in Edmonton for worship, community, and spiritual growth. Discover sermons, events, and ministries for all ages.",
    url: "https://bocchurch.ca",
    siteName: "Body of Christ Church Edmonton",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://bocchurch.ca/og.jpg",
        width: 1200,
        height: 630,
        alt: "Body of Christ Church Edmonton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body of Christ Church Edmonton | Worship & Community",
    description:
      "Join Body of Christ Church in Edmonton for worship, community, and spiritual growth. Discover sermons, events, and ministries for all ages.",
    images: ["https://bocchurch.ca/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Body of Christ Church Edmonton",
    url: "https://bocchurch.ca/",
    description:
      "Join Body of Christ Church in Edmonton for worship, community, and spiritual growth.",
    areaServed: "Edmonton, Alberta, Canada",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    image: "https://bocchurch.ca/og.jpg",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased flex flex-col justify-between">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
