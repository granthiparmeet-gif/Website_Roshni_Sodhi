import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.roshnisodhi.com/', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.roshnisodhi.com/about', changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://www.roshnisodhi.com/services', changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://www.roshnisodhi.com/contact', changeFrequency: 'yearly', priority: 0.7 },
  ];
}

