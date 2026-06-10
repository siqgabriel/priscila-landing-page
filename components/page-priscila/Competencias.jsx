'use client';
import React, { useState } from 'react';

const formacao = [
  { titulo: 'Psicóloga', subtitulo: 'UFSC — Universidade Federal de Santa Catarina' },
  { titulo: 'Pós-graduação em Orientação Profissional', subtitulo: 'UDESC' },
  { titulo: 'MBA em Gestão de Recursos Humanos', subtitulo: 'FGV' },
  { titulo: 'Pós-graduação em Dinâmica dos Grupos', subtitulo: 'SBDG' },
];

const cnv = [
  { titulo: 'International Intensive Training (IIT)', subtitulo: 'CNVC · Novo México, EUA · 2024' },
  { titulo: 'Peer Learning & Mentoring Group', subtitulo: 'Karen Starz · 2025/2026' },
  { titulo: 'Compassion Course Online', subtitulo: 'New York Center of NVC · 2025/2026' },
  { titulo: 'Integrante do Klub Konekti', subtitulo: 'Desde 2024' },
];

const experiencia = [
  {
    empresa: 'Mineração Rio Deserto',
    periodo: '2003 – 2008',
    descricao: 'Recrutamento e Seleção, Comunicação Interna, Treinamentos e Saúde Ocupacional para apoiar trabalhadores em atividade de alto risco.',
  },
  {
    empresa: 'Natura&Co',
    periodo: '2009 – 2023',
    descricao: 'Educação Corporativa, desenvolvimento de talentos e de liderança, com foco na construção de uma cultura de aprendizagem.',
  },
  {
    empresa: 'Aramis',
    periodo: '2023 – 2024',
    descricao: 'Governança de RH, Aprendizagem, Desenvolvimento e Desempenho, com foco na construção de um RH estratégico.',
  },
  {
    empresa: 'Vivência Internacional',
    periodo: 'Nova York, EUA',
    descricao: 'Imersão na CNV e desenvolvimento pessoal inerente a um processo de migração. Período que redefiniu minha forma de trabalhar e de me relacionar.',
  },
];

const abas = ['Formação Acadêmica', 'CNV & Formações', 'Experiência'];

function Competencias() {
  const [aba, setAba] = useState(0);

  return (
    <section style={{ background: 'linear-gradient(135deg, #f3f0fb 0%, #eaf0fd 100%)', padding: '120px 0' }}>
      <div className="container">

        {/* Cabeçalho */}
        <div className="row align-items-end mb-60">
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
              Formação e experiência
            </span>
            <h2 style={{ color: '#0f0f0f', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
              O que me habilita a{' '}
              <span style={{ fontWeight: 200, color: '#4b2f95' }}>caminhar ao seu lado.</span>
            </h2>
          </div>
        </div>

        {/* Abas */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {abas.map((a, i) => (
            <button
              key={i}
              onClick={() => setAba(i)}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                border: `1px solid ${aba === i ? '#4254b0' : '#d6e0f7'}`,
                background: aba === i ? '#4254b0' : '#fff',
                color: aba === i ? '#fff' : '#555',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Conteúdo — Formação Acadêmica */}
        {aba === 0 && (
          <div className="row">
            {formacao.map((f, i) => (
              <div className="col-lg-6" key={i} style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '28px 32px',
                    border: '1px solid #e8edfa',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#e8edfa',
                      color: '#4254b0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </div>
                  <div>
                    <h6 style={{ color: '#0f0f0f', fontWeight: 700, marginBottom: '6px' }}>{f.titulo}</h6>
                    <span style={{ fontSize: '13px', color: '#4254b0', fontWeight: 500 }}>{f.subtitulo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conteúdo — CNV & Formações */}
        {aba === 1 && (
          <div className="row">
            {cnv.map((c, i) => (
              <div className="col-lg-6" key={i} style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '28px 32px',
                    border: '1px solid #e8edfa',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#4b2f9515',
                      color: '#4b2f95',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    ◈
                  </div>
                  <div>
                    <h6 style={{ color: '#0f0f0f', fontWeight: 700, marginBottom: '6px' }}>{c.titulo}</h6>
                    <span style={{ fontSize: '13px', color: '#4b2f95', fontWeight: 500 }}>{c.subtitulo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conteúdo — Experiência */}
        {aba === 2 && (
          <div className="row">
            {experiencia.map((e, i) => (
              <div className="col-lg-6" key={i} style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '28px 32px',
                    border: '1px solid #e8edfa',
                    height: '100%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <h6 style={{ color: '#0f0f0f', fontWeight: 700, margin: 0 }}>{e.empresa}</h6>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#4254b0',
                        background: '#f0f3ff',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        border: '1px solid #c5d0f5',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {e.periodo}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#666', margin: 0 }}>{e.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Competencias;