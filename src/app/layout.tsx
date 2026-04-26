import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Template",
  description: "Production-ready authentication template",
  openGraph: {
    title: "Auth Template",
    description: "Production-ready authentication template",
    url: "https://auth-template.com",
    siteName: "Auth Template",
    images: [
      {
        url: "https://auth-template.com/og.png",
        width: 1200,
        height: 630,
        alt: "Auth Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auth Template",
    description: "Production-ready authentication template",
    images: ["https://auth-template.com/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Auth Template",
    url: "https://auth-template.com",
    description: "Production-ready authentication template",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
