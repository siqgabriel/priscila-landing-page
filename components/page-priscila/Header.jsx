'use client';
import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import LeadFormModal from '../home-personal/LeadFormModal';

function Header() {
  const [openForm, setOpenForm] = useState(false);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header-priscila', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '+=0.5');
    return () => tl.kill();
  }, []);

  return (
    <>
      <section
        className="header-priscila"
        style={{
          background: '#fff',
          paddingTop: '160px',
          paddingBottom: '0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Bloco decorativo — esquerda, mesmo padrão da consultoria */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '45%',
            height: '100%',
            background: 'linear-gradient(200deg, #e8edfa 0%, #c5d0f5 100%)',
            borderRadius: '0 0 80px 0',
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-end" style={{ minHeight: '60vh' }}>

            {/* Esquerda — foto encostada na base */}
            <div
              className="col-lg-6 d-flex justify-content-center align-items-end md-mb80"
              style={{ paddingBottom: 0 }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                <img
                  src="/assets/imgs/header/priscila3.png"
                  alt="Priscila Milanese"
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: '24px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    maxHeight: '700px',
                  }}
                />
                {/* Card anos de experiência — canto inferior direito */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '32px',
                    right: '-32px',
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '18px 24px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    minWidth: '160px',
                  }}
                >
                  <span style={{ fontSize: '36px', fontWeight: 800, color: '#4254b0', lineHeight: 1, display: 'block' }}>
                    20+
                  </span>
                  <p style={{ fontSize: '12px', color: '#777', margin: '4px 0 0', lineHeight: 1.5 }}>
                    anos em RH<br />& Liderança
                  </p>
                </div>
                {/* Card CNV — canto superior esquerdo */}
                <div
                  style={{
                    position: 'absolute',
                    top: '32px',
                    left: '-32px',
                    background: '#4254b0',
                    color: '#fff',
                    borderRadius: '14px',
                    padding: '14px 20px',
                    boxShadow: '0 8px 30px rgba(66,84,176,0.35)',
                    textAlign: 'center',
                    minWidth: '120px',
                  }}
                >
                  <span style={{ fontSize: '22px', fontWeight: 800, display: 'block', lineHeight: 1 }}>IIT</span>
                  <span style={{ fontSize: '11px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.4, display: 'block', marginTop: '4px' }}>
                    Formação<br />Internacional CNV
                  </span>
                </div>
              </div>
            </div>

            {/* Direita — texto */}
            <div className="col-lg-6" style={{ paddingBottom: '80px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#4254b0',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                Psicóloga · Especialista em RH · Mentora de Líderes
              </span>

              <h1
                style={{
                  color: '#0f0f0f',
                  fontSize: '68px',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: '24px',
                }}
              >
                Olá, sou a
                <br />
                <span style={{ fontWeight: 200, color: '#4254b0' }}>Priscila Milanese</span>
              </h1>

              <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, maxWidth: '460px', margin: '0 0 20px' }}>
                Possuo uma curiosidade genuína pelas pessoas e fiz da Psicologia e do
                Desenvolvimento Humano o centro de toda a minha trajetória profissional.
              </p>

              <p style={{ color: '#777', fontSize: '15px', lineHeight: 1.8, maxWidth: '460px', margin: 0 }}>
                20 anos em RH, 13 na Natura, 16 meses em Nova York e uma imersão
                transformadora na Comunicação Não Violenta me trouxeram até aqui: apoiando
                líderes a crescerem com autenticidade e impactando positivamente os seus times.
              </p>

              <div className="d-flex align-items-center mt-40" style={{ gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setOpenForm(true)}
                  className="butn butn-md butn-bord radius-30"
                >
                  Fale comigo
                </button>
                <a
                  href="#trajetoria"
                  style={{
                    color: '#4254b0',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    textDecoration: 'underline',
                  }}
                >
                  Ver trajetória <i className="ti-arrow-top-right" />
                </a>
              </div>

              {/* Credenciais resumidas */}
              <div className="d-flex mt-40" style={{ gap: '10px', flexWrap: 'wrap' }}>
                {['Psicóloga UFSC', 'MBA FGV', 'Formação CNV · IIT 2024'].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '6px 18px',
                      borderRadius: '999px',
                      background: '#f0f3ff',
                      color: '#4254b0',
                      fontSize: '12px',
                      fontWeight: 500,
                      border: '1px solid #c5d0f5',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Header;