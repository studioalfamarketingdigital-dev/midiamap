import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buscar localizações de mídia no Brasil',
  description: 'Consulte localizações de referência para prospecção de espaços publicitários no catálogo MídiaMap.',
  alternates: { canonical: '/buscar' },
  robots: { index: false, follow: true },
};

const labels: Record<string, string> = {
  outdoor: 'Outdoor', 'paineis-led': 'Painel LED / DOOH', 'midia-indoor': 'Mídia indoor',
  elevadores: 'Elevadores', aeroportos: 'Aeroportos', radio: 'Rádio', televisao: 'Televisão',
  'revistas-e-jornais': 'Revistas e jornais', transporte: 'Transporte',
  'eventos-e-ativacoes': 'Eventos e ativações', 'midia-digital': 'Mídia digital',
};

// Localizações de aeroportos públicos classificados pelo DECEA em 2026.
// São referências geográficas para prospecção; não representam inventário publicitário contratado ou disponível.
const airportLocations = [
  { name: 'Aeroporto Internacional de Belém / Val-de-Cans', city: 'Belém', state: 'PA', code: 'SBBE' },
  { name: 'Aeroporto Internacional de Confins / Tancredo Neves', city: 'Belo Horizonte', state: 'MG', code: 'SBCF' },
  { name: 'Aeroporto Internacional de Brasília / Presidente Juscelino Kubitschek', city: 'Brasília', state: 'DF', code: 'SBBR' },
  { name: 'Aeroporto Internacional de Campo Grande', city: 'Campo Grande', state: 'MS', code: 'SBCG' },
  { name: 'Aeroporto Internacional de Viracopos', city: 'Campinas', state: 'SP', code: 'SBKP' },
  { name: 'Aeroporto Internacional Afonso Pena', city: 'Curitiba / São José dos Pinhais', state: 'PR', code: 'SBCT' },
  { name: 'Aeroporto Internacional de Foz do Iguaçu / Cataratas', city: 'Foz do Iguaçu', state: 'PR', code: 'SBFI' },
  { name: 'Aeroporto Internacional Hercílio Luz', city: 'Florianópolis', state: 'SC', code: 'SBFL' },
  { name: 'Aeroporto Internacional de Guarulhos', city: 'Guarulhos', state: 'SP', code: 'SBGR' },
  { name: 'Aeroporto Governador José Richa', city: 'Londrina', state: 'PR', code: 'SBLO' },
  { name: 'Aeroporto Internacional Eduardo Gomes', city: 'Manaus', state: 'AM', code: 'SBEG' },
  { name: 'Aeroporto Governador Aluízio Alves', city: 'São Gonçalo do Amarante / Natal', state: 'RN', code: 'SBSG' },
  { name: 'Aeroporto Internacional Salgado Filho', city: 'Porto Alegre', state: 'RS', code: 'SBPA' },
  { name: 'Aeroporto Internacional do Galeão', city: 'Rio de Janeiro', state: 'RJ', code: 'SBGL' },
  { name: 'Aeroporto de Santa Maria', city: 'Santa Maria', state: 'RS', code: 'SBSM' },
  { name: 'Aeroporto Professor Urbano Ernesto Stumpf', city: 'São José dos Campos', state: 'SP', code: 'SBSJ' },
  { name: 'Aeroporto de Congonhas', city: 'São Paulo', state: 'SP', code: 'SBSP' },
];

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ local?: string; formato?: string }> }) {
  const params = await searchParams;
  const local = (params.local || '').trim().slice(0, 120);
  const formato = params.formato || '';
  const validFormat = Object.prototype.hasOwnProperty.call(labels, formato);
  const showAirports = !formato || formato === 'aeroportos' || formato === 'transporte';
  const query = local.toLocaleLowerCase('pt-BR');
  const filteredAirports = showAirports
    ? airportLocations.filter((item) => !query || [item.name, item.city, item.state, item.code].some((value) => value.toLocaleLowerCase('pt-BR').includes(query)))
    : [];

  return (
    <main className="seoPage">
      <header className="seoHeader"><Link href="/" className="seoBrand">MÍDIA<span>MAP</span></Link><Link href="/" className="seoBack">Voltar ao marketplace</Link></header>
      <section className="seoContent">
        <p className="seoEyebrow">CATÁLOGO GEOGRÁFICO • BRASIL</p>
        <h1>Localizações de mídia</h1>
        <p className="seoLead">{local ? <>Localização pesquisada: <strong>{local}</strong>. </> : 'Consulte localidades de referência no Brasil. '}{validFormat ? <>Formato: <strong>{labels[formato]}</strong>.</> : 'Formato: todos.'}</p>
        {showAirports && filteredAirports.length > 0 && (
          <section className="seoCta">
            <h2>Aeroportos e áreas de mídia aeroportuária</h2>
            <p>Localizações oficiais de aeroportos públicos classificados pelo DECEA. Estes registros ajudam a identificar praças para prospecção de mídia em terminais, embarque, desembarque, estacionamento e áreas comerciais.</p>
            <p><strong>Importante:</strong> o aeroporto é uma localização de referência, não a confirmação de que há painel, tela ou espaço publicitário disponível. Cada formato depende de levantamento e autorização do operador responsável.</p>
            <div className="airportList">
              {filteredAirports.map((item) => (
                <article className="card" key={item.code}>
                  <div className="operatorTop"><span className="tag">AEROPORTO • {item.code}</span><span className="operatorDot">✈</span></div>
                  <h3>{item.name}</h3>
                  <p>{item.city} — {item.state}</p>
                  <p className="lead">Referência geográfica para prospecção. Inventário publicitário a confirmar.</p>
                </article>
              ))}
            </div>
            <p className="seoBack">Fonte: DECEA — Portaria nº 2.060/ATAN7, de 18/02/2026, classificação vigente a partir de 01/03/2026.</p>
          </section>
        )}
        {showAirports && filteredAirports.length === 0 && (
          <div className="seoCta"><h2>Nenhum aeroporto encontrado</h2><p>Não encontramos aeroporto nesta localidade entre os pontos de referência cadastrados. Tente pesquisar por cidade, UF ou código OACI.</p></div>
        )}
        {!showAirports && (
          <div className="seoCta">
            <h2>Esta categoria ainda está em cadastramento</h2>
            <p>Não há pontos de mídia desta categoria cadastrados e validados para exibição nesta busca. Estamos estruturando o catálogo por cidade, endereço ou referência geográfica.</p>
            <p>Não exibimos endereços ilustrativos nem anunciamos disponibilidade sem confirmação do responsável pelo espaço.</p>
          </div>
        )}
        <p>O catálogo público exibe localização e características do espaço, sem telefone, e-mail ou contato privado dos fornecedores. A disponibilidade e a autorização de comercialização precisam ser confirmadas antes de qualquer contratação.</p>
        <Link href="/#exibidor" className="seoButton">Cadastrar um espaço publicitário</Link>
        <p><Link href="/#anunciante" className="seoBack">Sou anunciante e quero solicitar uma proposta</Link></p>
        <Link href="/#inventario" className="seoBack">← Fazer outra busca</Link>
      </section>
      <footer className="seoFooter">© 2026 MídiaMap • Um produto S.Alfa MKT</footer>
    </main>
  );
}
