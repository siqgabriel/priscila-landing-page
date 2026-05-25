'use client';
import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

const cards = [
  {
    numero: '01',
    tag: 'Para quem é',
    titulo: 'Para',
    tituloLight: 'líderes que:',
    conteudo: null,
    bullets: [
      'Sentem o peso da responsabilidade e da pressão por resultados;',
      'Percebem que estão reagindo mais do que escolhendo como liderar;',
      'Querem se comunicar melhor, gerar engajamento e reduzir conflitos;',
      'Desejam liderar pessoas sem abrir mão de sua autenticidade.',
    ],
    rodape: null,
    img: '/assets/imgs/works/1.png',
  },
  {
    numero: '02',
    tag: 'O problema',
    titulo: 'O desafio real',
    tituloLight: 'da liderança hoje',
    conteudo: 'A maioria dos líderes foi preparada para entregar resultados, mas não para lidar com:',
    bullets: [
      'Emoções sob pressão;',
      'Conflitos interpessoais;',
      'Conversas difíceis;',
      'Insegurança, cobrança e solidão do papel.',
    ],
    rodape: 'O resultado? Mais controle, mais desgaste, menos confiança e equipes pouco engajadas. Você também se sente assim?',
    rodapeBold: ['O resultado?', 'Você também se sente assim?'],
    img: '/assets/imgs/works/2.png',
  },
  {
    numero: '03',
    tag: 'A proposta',
    titulo: 'A proposta do',
    tituloLight: 'Workshop Liderança Consciente',
    conteudo: 'Este workshop convida o líder a pausar, olhar para si e ampliar sua consciência, para então liderar com mais clareza, empatia e intencionalidade.',
    conteudoBold: 'Ao longo dos encontros, o participante desenvolverá uma liderança que:',
    bullets: [
      'Substitui o controle pela confiança;',
      'Comunica com clareza e responsabilidade;',
      'Constrói relações sólidas;',
      'Gera engajamento genuíno;',
      'Sai do operacional e assume de fato o papel de líder.',
    ],
    rodape: null,
    img: '/assets/imgs/works/3.png',
  },
  {
    numero: '04',
    tag: 'O que você desenvolve',
    titulo: 'O que você irá',
    tituloLight: 'desenvolver na prática',
    conteudo: null,
    bullets: [
      'Mais clareza emocional e tomada de decisão consciente;',
      'Comunicação mais objetiva, humana e assertiva;',
      'Capacidade de lidar com pressão sem reagir impulsivamente;',
      'Relações de confiança com o time, pares e superiores;',
      'Feedbacks que desenvolvem, em vez de desgastar;',
      'Uma liderança mais alinhada com seus valores e propósito.',
    ],
    rodape: null,
    img: '/assets/imgs/works/4.png',
  },
  {
    numero: '05',
    tag: 'Metodologia',
    titulo: 'Diferencial da',
    tituloLight: 'metodologia',
    conteudo: null,
    bullets: null,
    rodapeBlocks: [
      { bold: true, text: 'Aprendizado aplicado à sua realidade como líder.' },
      { bold: false, text: 'Os encontros unem teoria e prática de forma vivencial.' },
      { bold: false, text: 'Cada participante trabalha a partir de situações reais do seu dia a dia, trazendo desafios concretos de liderança para reflexão, diálogo e prática guiada.' },
      { bold: true, text: 'O foco não é apenas entender conceitos, mas incorporar novas formas de pensar, sentir e agir como líder.' },
    ],
    img: '/assets/imgs/works/5.png',
  },
];

function Portfolio() {
  const [openForm, setOpenForm] = useState(false);
  const [ativo, setAtivo] = useState(0);

  const card = cards[ativo];

  return (
    <>
      <section style={{ background: '#fff', padding: '120px 0' }}>
        <div className="container">

          {/* Cabeçalho */}
          <div style={{ marginBottom: '60px' }}>
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
              Workshop Liderança Consciente
            </span>
            <h2 style={{ color: '#0f0f0f', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
              Para quem{' '}
              <span style={{ fontWeight: 200 }}>é este workshop?</span>
            </h2>
          </div>

          {/* Navegação por abas */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '48px',
              flexWrap: 'wrap',
            }}
          >
            {cards.map((c, i) => (
              <button
                key={i}
                onClick={() => setAtivo(i)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: `1px solid ${ativo === i ? '#4254b0' : '#e0e6f8'}`,
                  background: ativo === i ? '#4254b0' : '#fff',
                  color: ativo === i ? '#fff' : '#666',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: ativo === i ? 'rgba(255,255,255,0.2)' : '#f0f3ff',
                    color: ativo === i ? '#fff' : '#4254b0',
                    fontSize: '11px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {c.numero}
                </span>
                {c.tag}
              </button>
            ))}
          </div>

          {/* Card ativo */}
          <div
            style={{
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #a2b7e3 0%, #a2b7e3 100%)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(66,84,176,0.15)',
            }}
          >
            <div className="row" style={{ margin: 0 }}>

              {/* Texto */}
              <div className="col-lg-5" style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                {/* Número */}
                <span
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255,255,255,0.7)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {card.numero} — {card.tag}
                </span>

                <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '20px', lineHeight: 1.2 }}>
                  <span style={{ fontWeight: 200 }}>{card.titulo}</span>
                  {' '}{card.tituloLight}
                </h3>

                {card.conteudo && (
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                    {card.conteudo}
                  </p>
                )}

                {card.conteudoBold && (
                  <p style={{ color: '#fff', fontSize: '14px', fontWeight: 600, lineHeight: 1.7, marginBottom: '16px' }}>
                    {card.conteudoBold}
                  </p>
                )}

                {card.bullets && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                    {card.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13px',
                          color: 'rgba(255,255,255,0.9)',
                          marginBottom: '10px',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.2)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {card.rodapeBlocks && (
                  <div style={{ marginBottom: '24px' }}>
                    {card.rodapeBlocks.map((bloco, j) => (
                      <p
                        key={j}
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.7,
                          color: bloco.bold ? '#fff' : 'rgba(255,255,255,0.85)',
                          fontWeight: bloco.bold ? 600 : 400,
                          marginBottom: '12px',
                        }}
                      >
                        {bloco.text}
                      </p>
                    ))}
                  </div>
                )}

                {card.rodape && (
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
                    {card.rodapeBold
                      ? card.rodape.split(new RegExp(`(${card.rodapeBold.join('|')})`)).map((part, j) =>
                        card.rodapeBold.includes(part)
                          ? <strong key={j} style={{ color: '#fff' }}>{part}</strong>
                          : part
                      )
                      : card.rodape
                    }
                  </p>
                )}

                <button
                  onClick={() => setOpenForm(true)}
                  className="butn butn-pt radius-30"
                  style={{
                    background: '#fff',
                    color: '#4254b0',
                    border: '1px solid #fff',
                    fontWeight: 600,
                    alignSelf: 'flex-start',
                    padding: '12px 28px',
                  }}
                >
                  Inscreva-se no Workshop
                </button>
              </div>

              {/* Imagem */}
              <div className="col-lg-7" style={{ padding: 0 }}>
                <div style={{ height: '100%', minHeight: '400px', overflow: 'hidden' }}>
                  <img
                    src={card.img}
                    alt={card.tag}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'opacity 0.4s ease',
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Dots de navegação */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setAtivo(i)}
                style={{
                  width: ativo === i ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '999px',
                  background: ativo === i ? '#4254b0' : '#c5d0f5',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

        </div>
      </section>

      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Portfolio;