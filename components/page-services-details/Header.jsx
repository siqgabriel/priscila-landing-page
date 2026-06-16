'use client';
import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

function Header() {
  const [openForm, setOpenForm] = useState(false);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header-consultoria', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '+=0.5');
    return () => tl.kill();
  }, []);

  return (
    <>
      <section
        className="header-consultoria"
        style={{
          background: '#fff',
          paddingTop: '160px',
          paddingBottom: '100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Bloco decorativo — ESQUERDA (invertido) */}
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
          <div className="row align-items-center" style={{ minHeight: '55vh' }}>

            {/* Esquerda — imagem com card flutuante (invertido) */}
            <div className="col-lg-6 d-flex justify-content-center md-mb80">
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                <img
                  src="/assets/imgs/header/priscila6.png"
                  alt="Priscila Milanese — Consultoria em A&D"
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 30px 80px rgba(66,84,176,0.18)',
                  }}
                />
                {/* Card stat flutuante — direita inferior (invertido)
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-28px',
                    right: '-28px',
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '20px 28px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    minWidth: '170px',
                  }}
                >
                  <span style={{ fontSize: '40px', fontWeight: 800, color: '#4b2f95', lineHeight: 1, display: 'block' }}>
                    13+
                  </span>
                  <p style={{ fontSize: '13px', color: '#777', margin: '6px 0 0', lineHeight: 1.5 }}>
                    anos liderando A&D<br />na Natura&Co
                  </p>
                </div> */}
              </div>
            </div>

            {/* Direita — texto (invertido) */}
            <div className="col-lg-6">
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
                Consultoria em Aprendizagem & Desenvolvimento
              </span>
              <h1
                style={{
                  color: '#0f0f0f',
                  fontSize: '72px',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: '24px',
                }}
              >
                Consultoria
                <br />
                <span style={{ fontWeight: 200, color: '#4254b0' }}>para organizações</span>
              </h1>
              <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, maxWidth: '460px', margin: 0 }}>
                Soluções customizadas de A&D para empresas que colocam pessoas no centro
                do seu crescimento — com estratégia, escuta qualificada e visão humana.
              </p>

              <div className="d-flex align-items-center mt-40" style={{ gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href='https://wa.me/5511981017106?text=Ol%C3%A1%20Priscila!%20Vim%20pelo%20site'
                  target='_blank'
                  className="butn butn-md butn-bord radius-30"
                >
                  Fale com a Priscila
                </a>
                <a
                  href="#solucoes"
                  style={{
                    color: '#4254b0',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    textDecoration: 'underline',
                  }}
                >
                  Ver soluções <i className="ti-arrow-top-right" />
                </a>
              </div>

              {/* Tags */}
              <div className="d-flex mt-40" style={{ gap: '10px', flexWrap: 'wrap' }}>
                {['Treinamento & Desenvolvimento', 'Cultura de Aprendizado', 'Soft Skills'].map((tag, i) => (
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
    </>
  );
}

export default Header;