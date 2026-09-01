import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.churchoftheharvest.church";

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/visit`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/prayer`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
