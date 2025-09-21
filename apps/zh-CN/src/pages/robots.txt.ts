import type { APIRoute } from "astro";

const getRobotsTxt = async (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = async ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  const sitemapContent = await getRobotsTxt(sitemapURL);
  return new Response(sitemapContent);
};

// 标记为静态生成
export const prerender = true;
