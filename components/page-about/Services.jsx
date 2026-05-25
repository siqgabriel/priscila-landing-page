'use client';
import React, { useState } from 'react';

const pilares = [
  {
    num: '01',
    titulo: 'Comunicação Não Violenta',
    descricao: 'Base de todo o meu trabalho. A CNV nos convida a nos comunicar a partir da consciência dos nossos sentimentos e necessidades — criando conexões mais reais e relações mais saudáveis.',
    link: '/quem-sou',
  },
  {
    num: '02',
    titulo: 'Autoconsciência',
    descricao: 'Liderar bem começa por se conhecer. Trabalho com líderes para que desenvolvam clareza sobre seus padrões emocionais, valores e formas de se relacionar — tornando suas escolhas mais intencionais.',
    link: '/quem-sou',
  },
  {
    num: '03',
    titulo: 'Relações de Confiança',
    descricao: 'Equipes de alto desempenho se constroem sobre vínculos reais. Apoio líderes a criarem ambientes onde pessoas se sentem vistas, ouvidas e seguras para contribuir com o melhor de si.',
    link: '/quem-sou',
  },
  {
    num: '04',
    titulo: 'Liderança com Propósito',
    descricao: 'Uma liderança sustentável é aquela alinhada a quem você realmente é. Ajudo líderes a reconectarem suas decisões e comportamentos ao que mais importa — para si e para os outros.',
    link: '/quem-sou',
  },
  {
    num: '05',
    titulo: 'Aprendizagem Contínua',
    descricao: 'Com 20 anos em A&D em empresas como Natura&Co e Aramis, acredito que o desenvolvimento humano é um processo vivo. Trago essa visão estratégica de aprendizagem para cada processo que conduzo.',
    link: '/quem-sou',
  },
  {
    num: '06',
    titulo: 'Presença e Escuta',
    descricao: 'A mudança começa quando alguém realmente nos ouve. Ofereço uma escuta qualificada, sem julgamento, que cria o espaço necessário para que cada líder encontre suas próprias respostas.',
    link: '/quem-sou',
  },
];

function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: '#f7f8ff', padding: '120px 0' }}>
      <div className="container">

        {/* Cabeçalho */}
        <div className="row align-items-end mb-80">
          <div className="col-lg-7">
            <span
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#4254b0',
                fontWeight: 600,
                display: 'block',
                marginBottom: '14px',
              }}
            >
              O que sustenta meu trabalho
            </span>
            <h2 style={{ color: '#0f0f0f', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
              Os pilares da{' '}
              <span style={{ fontWeight: 200 }}>liderança consciente.</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex justify-content-lg-end mt-30 mt-lg-0">
            <a
              href="/quem-sou"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#4254b0',
                textDecoration: 'underline',
              }}
            >
              Conheça minha trajetória <i className="ti-arrow-top-right" />
            </a>
          </div>
        </div>

        {/* Lista de pilares */}
        <div>
          {pilares.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                padding: '32px 0',
                borderTop: '1px solid #e0e6f8',
                borderBottom: i === pilares.length - 1 ? '1px solid #e0e6f8' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
            >
              {/* Número grande */}
              <span
                style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: hovered === i ? '#4254b0' : '#e0e6f8',
                  transition: 'color 0.3s ease',
                  minWidth: '70px',
                  flexShrink: 0,
                }}
              >
                {p.num}
              </span>

              {/* Título */}
              <h4
                style={{
                  fontWeight: 700,
                  color: hovered === i ? '#4254b0' : '#0f0f0f',
                  margin: 0,
                  minWidth: '260px',
                  flexShrink: 0,
                  fontSize: '20px',
                  transition: 'color 0.3s ease',
                }}
              >
                {p.titulo}
              </h4>

              {/* Descrição */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: '#666',
                  margin: 0,
                  flex: 1,
                  maxWidth: '500px',
                }}
              >
                {p.descricao}
              </p>

              {/* Seta */}
              <a
                href={p.link}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: `1px solid ${hovered === i ? '#4254b0' : '#e0e6f8'}`,
                  background: hovered === i ? '#4254b0' : 'transparent',
                  color: hovered === i ? '#fff' : '#4254b0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                <i className="ti-arrow-top-right" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;