import type { MetadataRoute } from 'next';

const BASE_URL = 'https://midiamap.studioalfamkt.online';

const mediaPages = [
  'outdoor',
  'paineis-led',
  'radio',
  'televisao',
  'revistas-e-jornais',
  'midia-indoor',
  'elevadores',
  'transporte',
  'aeroportos',
  'eventos-e-ativacoes',
  'midia-digital',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...mediaPages.map((slug) => ({
      url: `${BASE_URL}/midias/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
