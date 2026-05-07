'use client';
import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import LeadFormModal from '../home-personal/LeadFormModal';

function Header() {
  const [openForm, setOpenForm] = useState(false);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header-mentoria', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '+=0.5');
    return () => tl.kill();
  }, []);

  return (
    <>
      <section
        className="header-mentoria"
        style={{
          background: '#fff',
          paddingTop: '160px',
          paddingBottom: '100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Bloco decorativo roxo — direita */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '45%',
            height: '100%',
            background: 'linear-gradient(160deg, #e8edfa 0%, #c5d0f5 100%)',
            borderRadius: '0 0 0 80px',
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center" style={{ minHeight: '55vh' }}>

            {/* Esquerda — texto */}
            <div className="col-lg-6 md-mb80">
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
                Lorem ipsum dolor sit
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
                Mentoria
                <br />
                <span style={{ fontWeight: 200, color: '#4254b0' }}>Lorem Ipsum</span>
              </h1>
              <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, maxWidth: '460px', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna. Ut enim ad minim veniam quis nostrud.
              </p>

              <div className="d-flex align-items-center mt-40" style={{ gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setOpenForm(true)}
                  className="butn butn-md butn-bord radius-30"
                >
                  Lorem ipsum dolor
                </button>
                <a
                  href="#processo"
                  style={{
                    color: '#4254b0',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    textDecoration: 'underline',
                  }}
                >
                  Lorem ipsum <i className="ti-arrow-top-right" />
                </a>
              </div>

              {/* Tags */}
              <div className="d-flex mt-40" style={{ gap: '10px', flexWrap: 'wrap' }}>
                {['Lorem ipsum', 'Dolor sit amet', 'Consectetur'].map((tag, i) => (
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

            {/* Direita — imagem com card flutuante */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                <img
                  src="/assets/imgs/intro/i1.jpg"
                  alt=""
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 30px 80px rgba(66,84,176,0.18)',
                  }}
                />
                {/* Card stat flutuante */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-28px',
                    left: '-28px',
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '20px 28px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    minWidth: '170px',
                  }}
                >
                  <span style={{ fontSize: '40px', fontWeight: 800, color: '#4254b0', lineHeight: 1, display: 'block' }}>
                    00+
                  </span>
                  <p style={{ fontSize: '13px', color: '#777', margin: '6px 0 0', lineHeight: 1.5 }}>
                    Lorem ipsum<br />dolor sit amet
                  </p>
                </div>
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