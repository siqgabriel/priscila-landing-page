'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import LeadFormModal from '../common/LeadFormModal';

function Header() {
  const [openForm, setOpenForm] = useState(false);
  const [bgImage, setBgImage] = useState('/assets/imgs/header/priscila8.png');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 440) {
        setBgImage('/assets/imgs/header/priscila8.png');
      } else if (width >= 440 && width < 768) {
        setBgImage('/assets/imgs/header/priscila8.png');
      } else {
        setBgImage('/assets/imgs/header/priscila8.png');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header-workshop', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '+=0.5');
    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, [bgImage]);

  return (
    <>
      <section
        className="header-workshop"
        style={{
          background: '#fff',
          paddingTop: '160px',
          paddingBottom: '100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Bloco decorativo — direita, mesma orientação da mentoria */}
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

              {/* Badge do workshop */}
              <div className="d-flex align-items-center mb-20" style={{ gap: '12px' }}>
                <span className="icon-img-50">
                  <img src="/assets/imgs/header/star.png" alt="" />
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#4254b0',
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  Workshop<br />Liderança Consciente
                </span>
              </div>

              <h1
                style={{
                  color: '#0f0f0f',
                  fontSize: '64px',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: '24px',
                }}
              >
                Lidere com mais
                <br />
                segurança e
                <br />
                <span style={{ fontWeight: 200, color: '#4254b0' }}>
                  menos desgaste emocional.
                </span>
              </h1>

              <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, maxWidth: '460px', margin: 0 }}>
                Descubra como exercer uma liderança que equilibra pessoas e resultados,{' '}
                <strong style={{ color: '#333' }}>
                  através da Comunicação Não Violenta — uma abordagem que já transformou centenas de líderes no mundo todo.
                </strong>
              </p>

              <div className="d-flex align-items-center mt-40" style={{ gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setOpenForm(true)}
                  className="butn butn-md butn-bord radius-30"
                >
                  Garanta sua vaga agora
                </button>
                <a
                  href="#workshop-estrutura"
                  style={{
                    color: '#4254b0',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    textDecoration: 'underline',
                  }}
                >
                  Ver estrutura <i className="ti-arrow-top-right" />
                </a>
              </div>

              {/* Tags */}
              <div className="d-flex mt-40" style={{ gap: '10px', flexWrap: 'wrap' }}>
                {['8 Encontros Online', 'CNV na Prática', 'Turmas Reduzidas'].map((tag, i) => (
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
                  src={bgImage}
                  alt="Workshop Liderança Consciente com Priscila Milanese"
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 30px 80px rgba(66,84,176,0.18)',
                    objectFit: 'cover',
                    maxHeight: '520px',
                  }}
                />
                {/* Card flutuante — próxima turma */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-28px',
                    left: '-28px',
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '20px 28px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    minWidth: '180px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#4254b0',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    Próxima turma
                  </span>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: '#0f0f0f', lineHeight: 1, display: 'block' }}>
                    8 encontros
                  </span>
                  <p style={{ fontSize: '13px', color: '#777', margin: '6px 0 0', lineHeight: 1.5 }}>
                    100% online e ao vivo<br />quintas, 08h às 10h
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