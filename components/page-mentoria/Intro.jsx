'use client';
import React, { useState } from 'react';
import MentoriaFormModal from './MentoriaFormModal';

const beneficios = [
  'Exercer uma liderança mais íntegra, presente e alinhada a seus valores',
  'Desenvolver clareza emocional e responsabilidade pelos próprios sentimentos',
  'Conduzir conversas difíceis com mais segurança e humanidade',
  'Fortalecer relações de confiança e colaboração genuína com o time',
  'Ampliar seu impacto sem perder autenticidade ou bem-estar',
  'Integrar estratégia e qualidade das relações no dia a dia da liderança',
];

function Intro() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section style={{ background: '#fff', padding: '120px 0' }} id="sobre">
        <div className="container">
          <div className="row align-items-center">

            {/* Esquerda — imagem com badge */}
            <div className="col-lg-5 md-mb80">
              <div style={{ position: 'relative' }}>
                <img
                  src="/assets/imgs/header/mentoria.png"
                  alt="Mentoria com Priscila Milanese"
                  style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(66,84,176,0.12)' }}
                />
                {/* Badge flutuante
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '-24px',
                    background: '#4254b0',
                    color: '#fff',
                    borderRadius: '14px',
                    padding: '16px 22px',
                    boxShadow: '0 8px 30px rgba(66,84,176,0.35)',
                    textAlign: 'center',
                    minWidth: '130px',
                  }}
                >
                  <span style={{ fontSize: '32px', fontWeight: 800, display: 'block', lineHeight: 1 }}>IIT</span>
                  <span style={{ fontSize: '11px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.4, display: 'block', marginTop: '4px' }}>
                    Formação<br />Internacional CNV
                  </span>
                </div> */}
              </div>
            </div>

            {/* Direita — texto + lista */}
            <div className="col-lg-6 offset-lg-1">
              <span
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#4254b0',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                Para quem é esta mentoria
              </span>
              <h2 style={{ color: '#0f0f0f', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
                Para líderes que querem{' '}
                <span style={{ fontWeight: 200 }}>crescer sem se perder</span>{' '}
                no caminho.
              </h2>
              <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '32px' }}>
                A mentoria é um processo individual, profundo e aplicado à sua realidade.
                Unindo 20 anos de experiência corporativa à Comunicação Não Violenta,
                apoio líderes a desenvolverem o que mais importa — de dentro para fora.
              </p>

              {/* Lista de benefícios */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px' }}>
                {beneficios.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '12px 0',
                      borderBottom: '1px solid #f0f0f0',
                      color: '#333',
                      fontSize: '15px',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: '#e8edfa',
                        color: '#4254b0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13px',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpenForm(true)}
                className="butn butn-md butn-bord radius-30"
              >
                Quero iniciar minha mentoria
              </button>
            </div>

          </div>
        </div>
      </section>

      <MentoriaFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Intro;