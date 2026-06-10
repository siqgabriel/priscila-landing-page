'use client';
import React, { useState } from 'react';

const marcos = [
  {
    ano: '1978',
    titulo: 'Onde tudo começou',
    texto: 'Nasci em Criciúma, Santa Catarina. Filha de uma psicóloga portuguesa e de um ex-padre descendente de italianos, cresci em um ambiente familiar que me proporcionou valores que mantenho até hoje.',
    cor: '#4254b0',
  },
  {
    ano: '2000s',
    titulo: 'Escolha profissional',
    texto: 'Escolhi Psicologia para entender como apoiar as pessoas nos seus processos de autoconhecimento. Mudei para Florianópolis para cursar a UFSC e direcionei minha formação para a área Organizacional, com o objetivo de levar mais qualidade de vida e desenvolvimento humano para as relações de trabalho.',
    cor: '#4b2f95',
  },
  {
    ano: '2009',
    titulo: 'São Paulo e Natura',
    texto: 'Mudei para São Paulo em função do meu casamento e vivi uma das experiências mais marcantes da minha trajetória profissional: 13 anos na Natura&Co. Uma cultura viva, intensa e desafiadora, que me proporcionou muito autoconhecimento e desenvolvimento. Trabalhei com seleção, aprendizagem, liderança, talentos e gestão de times.',
    cor: '#4254b0',
  },
  {
    ano: '2014+',
    titulo: 'Maternidade',
    texto: 'Tornei-me mãe da Isabela e depois do Gabriel. A maternidade me ensinou que não controlo tudo e que educar não é fazer do meu jeito. Precisei aprender a escutar mais, desenvolver empatia e ajustar minha forma de me comunicar. Entendi que meu papel principal é ajudar meus filhos a descobrir os seus próprios caminhos.',
    cor: '#4b2f95',
  },
  {
    ano: '2024',
    titulo: 'Nova York e a CNV',
    texto: 'Pausei a carreira para viver 16 meses em Nova York com a família. Todos saímos da zona de conforto. Nesse período, mergulhei na Comunicação Não Violenta pelo Center for Nonviolent Communication: participei do International Intensive Training (IIT) no Novo México, EUA e de um grupo de Mentoria. Uma experiência que transformou minha forma de compreender a CNV na prática.',
    cor: '#4254b0',
  },
  {
    ano: 'Hoje',
    titulo: 'Clareza e próximos passos',
    texto: 'De volta a São Paulo, com mais autonomia e mais conectada comigo mesma, meu propósito ficou claro: unir tudo o que vivi para apoiar líderes e organizações a crescerem equilibrando conexões genuínas entre as pessoas com a realidade do dia a dia do negócio.',
    cor: '#4b2f95',
  },
];

function Trajetoria() {
  const [expandido, setExpandido] = useState(null);

  return (
    <section id="trajetoria" style={{ background: '#fff', padding: '120px 0' }}>
      <div className="container">

        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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
            Uma trajetória construída com propósito
          </span>
          <h2 style={{ color: '#0f0f0f', fontWeight: 700, maxWidth: '560px', margin: '0 auto' }}>
            Minha história,{' '}
            <span style={{ fontWeight: 200, color: '#4b2f95' }}>passo a passo.</span>
          </h2>
        </div>

        {/* Linha do tempo */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>

          {/* Linha vertical central */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #4254b0, #a2b7e3)',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }}
          />

          {marcos.map((m, i) => {
            const isEsquerda = i % 2 === 0;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: isEsquerda ? 'flex-start' : 'flex-end',
                  marginBottom: '48px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div
                  onClick={() => setExpandido(expandido === i ? null : i)}
                  style={{
                    width: 'calc(50% - 32px)',
                    background: expandido === i ? m.cor : '#fff',
                    border: `1px solid ${expandido === i ? m.cor : '#e0e6f8'}`,
                    borderRadius: '18px',
                    padding: '24px 28px',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    boxShadow: expandido === i ? `0 12px 40px ${m.cor}30` : '0 2px 12px rgba(0,0,0,0.05)',
                    position: 'relative',
                  }}
                >
                  {/* Ponto na linha */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '28px',
                      [isEsquerda ? 'right' : 'left']: '-41px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: expandido === i ? m.cor : '#fff',
                      border: `3px solid ${m.cor}`,
                      transition: 'background 0.3s',
                    }}
                  />

                  {/* Ano */}
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: expandido === i ? 'rgba(255,255,255,0.7)' : m.cor,
                      display: 'block',
                      marginBottom: '6px',
                      transition: 'color 0.3s',
                    }}
                  >
                    {m.ano}
                  </span>

                  {/* Título */}
                  <h5
                    style={{
                      fontWeight: 700,
                      color: expandido === i ? '#fff' : '#0f0f0f',
                      marginBottom: expandido === i ? '12px' : 0,
                      transition: 'color 0.3s',
                    }}
                  >
                    {m.titulo}
                  </h5>

                  {/* Texto expandível */}
                  <div
                    style={{
                      maxHeight: expandido === i ? '300px' : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.9)',
                        margin: 0,
                      }}
                    >
                      {m.texto}
                    </p>
                  </div>

                  {/* Ícone de expandir */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '24px',
                      right: '20px',
                      fontSize: '18px',
                      color: expandido === i ? 'rgba(255,255,255,0.7)' : '#c5d0f5',
                      transition: 'transform 0.3s, color 0.3s',
                      transform: expandido === i ? 'rotate(45deg)' : 'rotate(0)',
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Trajetoria;