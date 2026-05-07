'use client';
import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

const beneficios = [
  'Lorem ipsum dolor sit amet consectetur',
  'Sed do eiusmod tempor incididunt ut labore',
  'Ut enim ad minim veniam quis nostrud',
  'Duis aute irure dolor in reprehenderit',
  'Excepteur sint occaecat cupidatat non proident',
];

function Intro() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section style={{ background: '#fff', padding: '120px 0' }} id="sobre">
        <div className="container">
          <div className="row align-items-center" style={{ gap: '0' }}>

            {/* Esquerda — imagem empilhada */}
            <div className="col-lg-5 md-mb80">
              <div style={{ position: 'relative' }}>
                <img
                  src="/assets/imgs/intro/i2.jpg"
                  alt=""
                  style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(66,84,176,0.12)' }}
                />
                {/* Badge flutuante */}
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
                    minWidth: '120px',
                  }}
                >
                  <span style={{ fontSize: '32px', fontWeight: 800, display: 'block', lineHeight: 1 }}>00</span>
                  <span style={{ fontSize: '12px', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '1px' }}>Lorem ipsum</span>
                </div>
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
                Lorem ipsum dolor sit
              </span>
              <h2 style={{ color: '#0f0f0f', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
                Lorem ipsum dolor{' '}
                <span style={{ fontWeight: 200 }}>sit amet consectetur</span>{' '}
                adipiscing elit.
              </h2>
              <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '32px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>

              {/* Lista de benefícios */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px' }}>
                {beneficios.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '12px 0',
                      borderBottom: '1px solid #f0f0f0',
                      color: '#333',
                      fontSize: '15px',
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
                Lorem ipsum dolor
              </button>
            </div>

          </div>
        </div>
      </section>

      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Intro;