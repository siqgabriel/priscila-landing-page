'use client';
import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

function Header() {
  const [openForm, setOpenForm] = useState(false);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header-contato', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '+=0.5');
    return () => tl.kill();
  }, []);

  return (
    <>
      <section
        className="header-contato"
        style={{
          background: '#fff',
          paddingTop: '160px',
          paddingBottom: '100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Bloco decorativo — direita, mesmo padrão da mentoria */}
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
                Vamos conversar?
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
                Contato
                <br />
                <span style={{ fontWeight: 200, color: '#4254b0' }}>com a Priscila</span>
              </h1>

              <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, maxWidth: '460px', margin: '0 0 16px' }}>
                Seja para iniciar uma mentoria, contratar uma consultoria ou tirar dúvidas
                sobre o workshop — será um prazer conversar com você.
              </p>

              <p style={{ color: '#777', fontSize: '15px', lineHeight: 1.8, maxWidth: '460px', margin: 0 }}>
                Escolha o canal que preferir ou preencha o formulário e entro em contato o quanto antes.
              </p>

              <div className="d-flex align-items-center mt-40" style={{ gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setOpenForm(true)}
                  className="butn butn-md butn-bord radius-30"
                >
                  Enviar mensagem
                </button>
                <a
                  href="https://wa.me/5511981017106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="butn butn-md radius-30"
                  style={{
                    background: '#25d366',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Tags com canais */}
              <div className="d-flex mt-40" style={{ gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/priscilamilanese-mentora' },
                  { label: 'Instagram', href: 'https://www.instagram.com/primila' },
                  { label: 'pri.milanese@gmail.com', href: 'mailto:pri.milanese@gmail.com' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '6px 18px',
                      borderRadius: '999px',
                      background: '#f0f3ff',
                      color: '#4254b0',
                      fontSize: '12px',
                      fontWeight: 500,
                      border: '1px solid #c5d0f5',
                      textDecoration: 'none',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#4254b0';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#f0f3ff';
                      e.currentTarget.style.color = '#4254b0';
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Direita — imagem com cards flutuantes */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                <img
                  src="/assets/imgs/header/priscila.png"
                  alt="Priscila Milanese"
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 30px 80px rgba(66,84,176,0.18)',
                    objectFit: 'cover',
                    maxHeight: '520px',
                  }}
                />

                {/* Card — disponibilidade */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-28px',
                    left: '-28px',
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '20px 24px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    minWidth: '170px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#25d366', display: 'block', flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f0f0f' }}>Disponível para novos projetos</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#777', margin: 0, lineHeight: 1.5 }}>
                    Mentoria · Consultoria · Workshop
                  </p>
                </div>

                {/* Card — resposta rápida */}
                <div
                  style={{
                    position: 'absolute',
                    top: '32px',
                    right: '-28px',
                    background: '#4254b0',
                    color: '#fff',
                    borderRadius: '14px',
                    padding: '14px 20px',
                    boxShadow: '0 8px 30px rgba(66,84,176,0.35)',
                    textAlign: 'center',
                    minWidth: '120px',
                  }}
                >
                  <span style={{ fontSize: '22px', fontWeight: 800, display: 'block', lineHeight: 1 }}>24h</span>
                  <span style={{ fontSize: '11px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.4, display: 'block', marginTop: '4px' }}>
                    Tempo de<br />resposta
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default Header;