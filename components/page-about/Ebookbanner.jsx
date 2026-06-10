'use client';
import React, { useState } from 'react';
import EbookModal from './Ebookmodal';

function EbookBanner() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <div
            style={{
              borderRadius: '28px',
              background: 'linear-gradient(135deg, #4b2f95 0%, #4254b0 100%)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Elementos decorativos */}
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-80px', left: '30%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

            <div className="row align-items-center" style={{ margin: 0 }}>

              {/* Esquerda — capa do ebook */}
              <div
                className="col-lg-3 col-md-4 d-none d-md-flex"
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  padding: '0 0 0 40px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '16px 16px 0 0',
                    padding: '24px 20px 0',
                    width: '160px',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderBottom: 'none',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      background: 'linear-gradient(180deg, #fff 0%, #e8edfa 100%)',
                      borderRadius: '8px 8px 0 0',
                      padding: '20px 16px',
                      boxShadow: '0 -8px 30px rgba(0,0,0,0.2)',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: '9px',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: '#4254b0',
                        fontWeight: 700,
                        marginBottom: '8px',
                      }}
                    >
                      E-book gratuito
                    </span>
                    <div
                      style={{
                        width: '40px',
                        height: '3px',
                        background: '#4254b0',
                        borderRadius: '2px',
                        margin: '0 auto 12px',
                      }}
                    />
                    <p
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#0f0f0f',
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      Liderança<br />Consciente
                    </p>
                    <p
                      style={{
                        fontSize: '10px',
                        color: '#666',
                        marginTop: '6px',
                        marginBottom: 0,
                      }}
                    >
                      Priscila Milanese
                    </p>
                  </div>
                </div>
              </div>

              {/* Centro — texto */}
              <div
                className="col-lg-6 col-md-8"
                style={{ padding: '48px 32px' }}
              >
                {/* Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.12)',
                    borderRadius: '999px',
                    padding: '6px 16px',
                    marginBottom: '20px',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <span style={{ fontSize: '14px' }}>📖</span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}
                  >
                    E-book gratuito
                  </span>
                </div>

                <h3
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '12px',
                    fontSize: '28px',
                  }}
                >
                  Guia de Liderança Consciente
                  <span style={{ fontWeight: 200 }}> com base na CNV</span>
                </h3>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    marginBottom: '0',
                    maxWidth: '440px',
                  }}
                >
                  Um material prático para líderes que querem desenvolver uma liderança
                  mais consciente, humana e eficaz no dia a dia.
                </p>
              </div>

              {/* Direita — CTA */}
              <div
                className="col-lg-3"
                style={{
                  padding: '48px 40px 48px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="butn butn-md radius-30"
                    style={{
                      background: '#fff',
                      color: '#4254b0',
                      border: '1px solid #fff',
                      fontWeight: 700,
                      fontSize: '14px',
                      padding: '14px 32px',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>⬇️</span>
                    Baixar e-book
                  </button>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '11px',
                      marginTop: '10px',
                      marginBottom: 0,
                    }}
                  >
                    Gratuito · Sem compromisso
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <EbookModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default EbookBanner;