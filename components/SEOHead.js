"use client";

import Head from "next/head";

export default function SEOHead({ 
  title = "DevMarket - Premium Developer Projects & Code Marketplace",
  description = "Discover and purchase high-quality developer projects, source code, and digital solutions at dev-market.online",
  keywords = "developer projects, source code marketplace, web applications, mobile apps, programming projects",
  canonical = "https://dev-market.online",
  ogImage = "https://dev-market.online/og-image.jpg"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevMarket",
    "url": "https://dev-market.online",
    "logo": "https://dev-market.online/logo.png",
    "description": description,
    "founder": {
      "@type": "Person",
      "name": "Anwar Patel"
    },
    "sameAs": [
      "https://github.com/devmarket",
      "https://twitter.com/devmarket"
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}