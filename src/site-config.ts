interface SiteConfig {
  name: string;
  description: string;
  // URL(s) of an existing sitemap to mirror at /sitemap.xml with hosts
  // rewritten to this site's domain. Empty to disable.
  sourceSitemapUrl: string | string[];
}

export const SITE_CONFIG: SiteConfig = {
  name: "GlowLock",
  description:
    "GlowLock shields you from compulsive scrolling, reveals the emotions driving your habits, and helps you build the pause that rewires your behavior. 96+ five-star reviews on iOS.",
  sourceSitemapUrl: "",
};
