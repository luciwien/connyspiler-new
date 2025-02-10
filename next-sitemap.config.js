/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://queerfootballfans.at",
  generateRobotsTxt: true // (optional)
  // ...other options
};
