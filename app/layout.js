import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastContainer from "../components/ToastContainer";
import DevToolsProtection from "../components/DevToolsProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevMarket - Premium Developer Projects & Code Marketplace | dev-market.online",
  description: "Discover and purchase high-quality developer projects, source code, and digital solutions. Browse our curated marketplace of web applications, mobile apps, and development tools at dev-market.online",
  keywords: "developer projects, source code marketplace, web applications, mobile apps, programming projects, code for sale, development tools, software marketplace, premium code, developer resources",
  authors: [{ name: "Anwar Patel", url: "https://dev-market.online" }],
  creator: "Anwar Patel",
  publisher: "DevMarket",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-market.online",
    siteName: "DevMarket",
    title: "DevMarket - Premium Developer Projects & Code Marketplace",
    description: "Discover and purchase high-quality developer projects, source code, and digital solutions at dev-market.online",
    images: [
      {
        url: "https://dev-market.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevMarket - Premium Developer Projects Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevMarket - Premium Developer Projects & Code Marketplace",
    description: "Discover and purchase high-quality developer projects, source code, and digital solutions",
    images: ["https://dev-market.online/twitter-image.jpg"],
    creator: "@devmarket",
  },
  alternates: {
    canonical: "https://dev-market.online",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://dev-market.online" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DevMarket",
              "url": "https://dev-market.online",
              "description": "Premium developer projects and code marketplace",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dev-market.online/projects?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DevToolsProtection />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
