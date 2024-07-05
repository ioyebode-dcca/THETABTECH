import { MetadataRoute } from "next";

// TODO: add your own robots.txt when domain is confirmed

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://acme.com/sitemap.xml",
  };
}
