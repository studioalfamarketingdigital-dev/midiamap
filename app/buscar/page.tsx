import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buscar espaços publicitários por localização',
  description: 'Pesquise categorias de mídia e regiões no catálogo MídiaMap. A disponibilidade dos espaços é validada antes da publicação.',
  alternates: { canonical: '/buscar' },
  robots: { index: false, follow: true },
};

const labels: Record<string, string> = {
  outdoor: 'Outdoor', 'paineis-led': 'Painel LED / DOOH', 'midia-indoor': 'Mídia indoor',
  elevadores: 'Elevadores', aeroportos: 'Aeroportos', radio: 'Rádio', televisao: 'Televisão',
  'revistas-e-jornais': 'Revistas e jornais', transporte: 'Transporte',
  'eventos-e-ativacoes': 'Eventos e ativações', 'midia-digital': 'Mídia digital',
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ local?: string; formato?: string }> }) {
  const params = await searchParams;
  const local = (params.local || '').trim().slice(0, 120);
  const formato = params.formato || '';
  const validFormat = Object.prototype.hasOwnProperty.call(labels, formato);
  return (
    <main className="seoPage">
      <header className="seoHeader"><Link href="/" className="seoBrand">MÍDIA<span>MAP</span></Link><Link href="/" className="seoBack">Voltar ao marketplace</Link></header>
      <section className="seoContent">
        <p className="seoEyebrow">CONSULTA DO CATÁLOGO</p>
        <h1>Resultado da busca</h1>
        <p className="seoLead">{local ? <>Localização pesquisada: <strong>{local}</strong>. </> : 'Busca em todas as localidades. '}{validFormat ? <>Formato: <strong>{labels[formato]}</strong>.</> : 'Formato: todos.'}</p>
        <div className="seoCta">
          <h2>Estamos estruturando o inventário validado</h2>
          <p>Esta pesquisa foi recebida, mas ainda não há pontos cadastrados e validados que possamos apresentar para esses filtros. Preferimos não exibir endereços ilustrativos nem anunciar disponibilidade sem confirmação do responsável pelo espaço.</p>
          <p>Quando um ponto for publicado, o catálogo mostrará sua localização e características comerciais. Telefones, e-mails e contatos privados dos fornecedores não serão exibidos publicamente.</p>
          <Link href="/#exibidor" className="seoButton">Cadastrar um espaço publicitário</Link>
          <p><Link href="/#anunciante" className="seoBack">Sou anunciante e quero solicitar uma proposta</Link></p>
        </div>
        <Link href="/#inventario" className="seoBack">← Fazer outra busca</Link>
      </section>
      <footer className="seoFooter">© 2026 MídiaMap • Um produto S.Alfa MKT</footer>
    </main>
  );
}
