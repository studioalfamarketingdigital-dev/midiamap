import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://midiamap.studioalfamkt.online';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MídiaMap | Marketplace de mídia e espaços publicitários no Brasil',
    template: '%s | MídiaMap',
  },
  description:
    'Encontre e negocie espaços publicitários no Brasil: outdoor, painel de LED, rádio, TV, revista, jornal, mídia indoor, elevadores, transporte e mídia digital. Compare formatos e solicite propostas.',
  applicationName: 'MídiaMap',
  keywords: [
    'marketplace de mídia', 'comprar mídia', 'vender espaço publicitário',
    'veiculação de publicidade', 'planejamento de mídia', 'mídia OOH', 'mídia DOOH',
    'outdoor para anunciar', 'painel de LED publicidade', 'publicidade em rádio',
    'anúncio em televisão', 'anúncio em revistas', 'anúncio em jornais',
    'mídia indoor', 'publicidade em elevadores', 'mídia em condomínios',
    'publicidade em ônibus', 'mídia programática',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'MídiaMap',
    title: 'MídiaMap | Toda mídia. Em um só mapa.',
    description:
      'Descubra formatos e espaços publicitários em todo o Brasil. Pesquise mídia exterior, rádio, TV, revistas, jornais, elevadores, indoor e digital.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MídiaMap | Marketplace de mídia no Brasil',
    description: 'Encontre espaços publicitários por formato e localização em todo o Brasil.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
