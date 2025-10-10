export async function GET() {
  const robots = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Disallow: /admin/
Disallow: /api/

Sitemap: https://dev-market.online/sitemap.xml

# Crawl-delay for all bots
Crawl-delay: 1`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}