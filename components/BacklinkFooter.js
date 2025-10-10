"use client";

export default function BacklinkFooter() {
  const backlinks = [
    { name: "GitHub", url: "https://github.com/devmarket-online", rel: "noopener" },
    { name: "LinkedIn", url: "https://linkedin.com/company/devmarket", rel: "noopener" },
    { name: "Twitter", url: "https://twitter.com/devmarket_online", rel: "noopener" },
    { name: "Dev.to", url: "https://dev.to/devmarket", rel: "noopener" },
    { name: "Medium", url: "https://medium.com/@devmarket", rel: "noopener" },
    { name: "Stack Overflow", url: "https://stackoverflow.com/users/devmarket", rel: "noopener" },
    { name: "Reddit", url: "https://reddit.com/r/devmarket", rel: "noopener" },
    { name: "Product Hunt", url: "https://producthunt.com/@devmarket", rel: "noopener" }
  ];

  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold mb-4">Connect With DevMarket</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {backlinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel={`${link.rel} external`}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-gray-500">
          <p>© 2024 DevMarket. Premium developer projects marketplace at dev-market.online</p>
        </div>
      </div>
    </div>
  );
}