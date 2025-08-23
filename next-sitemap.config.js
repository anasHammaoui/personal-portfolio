/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.anashammaoui.me',
  generateRobotsTxt: true, // optional
  sitemapSize: 5000,
  exclude: [
    '/_app', 
    '/_document',
    '/_error',
    '/api/*'
  ],
  transform: async (config, path) => {
    // Optional: ensure no extra tags are injected
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
