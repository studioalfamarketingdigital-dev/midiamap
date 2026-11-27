import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const siteUrl = 'https://midiamap.studioalfamkt.online';
const categories = [
  {
    "slug": "outdoor",
    "name": "Outdoor e mídia exterior",
    "title": "Anunciar em outdoor no Brasil",
    "desc": "Encontre espaços de mídia exterior para divulgar sua marca em ruas, avenidas, rodovias e pontos estratégicos. Compare formatos, cidades e operadores e solicite propostas para sua campanha.",
    "formats": [
      "Outdoor tradicional",
      "Frontlight e backlight",
      "Empena publicitária",
      "Painel rodoviário",
      "Mobiliário urbano",
      "Relógios e abrigos de ônibus"
    ]
  },
  {
    "slug": "paineis-led",
    "name": "Painéis de LED e DOOH",
    "title": "Anunciar em painéis de LED e DOOH",
    "desc": "Conheça formatos de mídia digital out of home, como painéis de LED em vias, fachadas, centros comerciais e locais de grande circulação. Consulte operadores e solicite informações de disponibilidade.",
    "formats": [
      "Painéis de LED de rua",
      "Fachadas digitais",
      "Relógios digitais",
      "Redes DOOH",
      "Telas digitais em centros comerciais"
    ]
  },
  {
    "slug": "radio",
    "name": "Rádio",
    "title": "Anunciar em rádios no Brasil",
    "desc": "Pesquise oportunidades de publicidade em rádios comerciais, educativas, comunitárias e web rádios. Planeje inserções, patrocínios e ações com programas locais e regionais.",
    "formats": [
      "Spots comerciais",
      "Testemunhais",
      "Patrocínio de programas",
      "Ações promocionais",
      "Rádio web e streaming"
    ]
  },
  {
    "slug": "televisao",
    "name": "Televisão",
    "title": "Anunciar na televisão",
    "desc": "Explore possibilidades de veiculação em emissoras nacionais, regionais e locais, afiliadas, canais por assinatura e plataformas de vídeo. Solicite propostas diretamente aos representantes autorizados.",
    "formats": [
      "Comerciais de TV",
      "Merchandising",
      "Patrocínio de programas",
      "Ações especiais",
      "Emissoras regionais e afiliadas"
    ]
  },
  {
    "slug": "revistas-e-jornais",
    "name": "Revistas e jornais",
    "title": "Anunciar em revistas e jornais",
    "desc": "Encontre formatos de publicidade em publicações impressas e digitais, veículos locais, regionais e especializados. Consulte opções de página, meia página, publieditorial e encartes.",
    "formats": [
      "Página inteira e meia página",
      "Anúncios modulares",
      "Publieditorial",
      "Encartes",
      "Jornais digitais",
      "Revistas segmentadas"
    ]
  },
  {
    "slug": "midia-indoor",
    "name": "Mídia indoor",
    "title": "Publicidade indoor em estabelecimentos",
    "desc": "Descubra oportunidades de comunicação em ambientes internos com circulação de pessoas, como shoppings, supermercados, academias, clínicas, hospitais, universidades e condomínios.",
    "formats": [
      "Telas digitais internas",
      "Painéis e cartazes",
      "Displays e totens",
      "Mídia em pontos de venda",
      "Recepções e salas de espera"
    ]
  },
  {
    "slug": "elevadores",
    "name": "Publicidade em elevadores",
    "title": "Anunciar em elevadores e condomínios",
    "desc": "Conheça formatos de publicidade em elevadores residenciais e comerciais, incluindo telas digitais, adesivação e comunicação em halls e áreas comuns. A cobertura e a disponibilidade devem ser confirmadas com cada operador.",
    "formats": [
      "Telas em elevadores",
      "Adesivação interna",
      "Mídia em halls",
      "Painéis em portarias",
      "Condomínios residenciais e corporativos"
    ]
  },
  {
    "slug": "transporte",
    "name": "Mídia em transporte",
    "title": "Publicidade em ônibus, metrô e transporte",
    "desc": "Pesquise formatos publicitários em ônibus, metrôs, trens, táxis, aeroportos, rodoviárias e terminais. Compare possibilidades de cobertura e solicite propostas aos operadores.",
    "formats": [
      "Busdoor",
      "Envelopamento de ônibus",
      "Mídia em metrôs e trens",
      "Táxis e mobilidade",
      "Aeroportos e rodoviárias"
    ]
  },
  {
    "slug": "aeroportos",
    "name": "Mídia em aeroportos",
    "title": "Anunciar em aeroportos no Brasil",
    "desc": "Descubra oportunidades de publicidade em aeroportos brasileiros, incluindo terminais de passageiros, áreas de embarque e desembarque, esteiras de bagagem, estacionamentos, salas VIP e áreas comerciais. A contratação depende do operador autorizado e das regras de cada aeroporto.",
    "formats": [
      "Painéis digitais e redes DOOH",
      "Backlights e painéis estáticos",
      "Mídia em portões de embarque",
      "Esteiras de restituição de bagagem",
      "Envelopamento e comunicação em carrinhos",
      "Salas VIP e lounges",
      "Mídia em estacionamentos e acessos",
      "Stands, sampling e ativações",
      "Naming rights e patrocínios"
    ]
  },
  {
    "slug": "eventos-e-ativacoes",
    "name": "Eventos e ativações",
    "title": "Publicidade em eventos e ativações de marca",
    "desc": "Encontre oportunidades de patrocínio, exposição de marca e ativação em feiras, festivais, shows, eventos esportivos, congressos e experiências presenciais.",
    "formats": [
      "Cotas de patrocínio",
      "Stands e espaços de exposição",
      "Sampling",
      "Naming rights",
      "Ativações de marca"
    ]
  },
  {
    "slug": "midia-digital",
    "name": "Mídia digital",
    "title": "Publicidade digital, portais e mídia programática",
    "desc": "Explore possibilidades de publicidade em portais, sites, aplicativos, podcasts, redes de conteúdo e inventário digital. Avalie formatos e solicite informações comerciais aos veículos.",
    "formats": [
      "Banners e publieditoriais",
      "Portais de notícias",
      "Aplicativos",
      "Podcasts",
      "Mídia programática",
      "Retail media"
    ]
  }
] as const;

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = categories.find((category) => category.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.desc,
    alternates: { canonical: `/midias/${item.slug}` },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: `${siteUrl}/midias/${item.slug}`,
      siteName: 'MídiaMap',
      title: `${item.title} | MídiaMap`,
      description: item.desc,
    },
    robots: { index: true, follow: true },
  };
}

export default async function MediaCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = categories.find((category) => category.slug === slug);
  if (!item) notFound();

  const pageUrl = `${siteUrl}/midias/${item.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: item.title,
    description: item.desc,
    url: pageUrl,
    isPartOf: { '@type': 'WebSite', name: 'MídiaMap', url: siteUrl },
    about: { '@type': 'Thing', name: item.name },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: item.formats.map((format, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: format,
      })),
    },
  };

  return (
    <main className="seoPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="seoHeader">
        <Link href="/" className="seoBrand">MÍDIA<span>MAP</span></Link>
        <Link href="/" className="seoBack">Voltar ao marketplace</Link>
      </header>
      <article className="seoContent">
        <nav className="seoBreadcrumb" aria-label="Breadcrumb">
          <Link href="/">Início</Link><span>/</span><span>{item.name}</span>
        </nav>
        <p className="seoEyebrow">CATEGORIAS DE MÍDIA • BRASIL</p>
        <h1>{item.title}</h1>
        <p className="seoLead">{item.desc}</p>
        <h2>Formatos de {item.name.toLowerCase()}</h2>
        <p>A disponibilidade, a cobertura geográfica, os formatos e as condições comerciais variam conforme o veículo e o operador. Consulte as informações de cada fornecedor antes de contratar.</p>
        <ul className="seoFormats">{item.formats.map((format) => <li key={format}>{format}</li>)}</ul>
        <h2>Como contratar</h2>
        <ol className="seoSteps">
          <li>Defina o objetivo da campanha e o público que deseja alcançar.</li>
          <li>Escolha a região, o período e o formato de mídia.</li>
          <li>Solicite informações comerciais, disponibilidade e comprovação do inventário.</li>
          <li>Compare propostas e alinhe a veiculação diretamente com o fornecedor autorizado.</li>
        </ol>
        <div className="seoCta">
          <h2>Encontre a mídia certa para sua campanha</h2>
          <p>A MídiaMap conecta anunciantes, agências e fornecedores de espaços publicitários.</p>
          <Link href="/#inventario" className="seoButton">Explorar marketplace</Link>
        </div>
        <h2>Outras categorias de mídia</h2>
        <ul className="seoRelated">{categories.filter((category) => category.slug !== item.slug).map((category) => <li key={category.slug}><Link href={`/midias/${category.slug}`}>{category.name}</Link></li>)}</ul>
      </article>
      <footer className="seoFooter">© 2026 MídiaMap • Um produto S.Alfa MKT</footer>
    </main>
  );
}
