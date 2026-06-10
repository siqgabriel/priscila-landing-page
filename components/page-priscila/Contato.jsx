'use client';
import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

const redesSociais = [
  {
    nome: 'LinkedIn',
    usuario: 'priscilamilanese-mentora',
    descricao: 'Acompanhe conteúdos sobre liderança consciente e CNV',
    href: 'https://www.linkedin.com/in/priscilamilanese-mentora',
    icone: 'ti-linkedin',
    cor: '#0077b5',
    bg: '#e8f4fb',
  },
  {
    nome: 'Instagram',
    usuario: '@primila',
    descricao: 'Bastidores, reflexões e conteúdo do dia a dia',
    href: 'https://www.instagram.com/primila',
    icone: 'ti-instagram',
    cor: '#c13584',
    bg: '#fdf0f7',
  },
  {
    nome: 'WhatsApp',
    usuario: '11 98101-7106',
    descricao: 'Fale diretamente comigo para tirar dúvidas',
    href: 'https://wa.me/5511981017106',
    icone: 'ti-mobile',
    cor: '#25d366',
    bg: '#f0fdf4',
  },
  {
    nome: 'E-mail',
    usuario: 'pri.milanese@gmail.com',
    descricao: 'Para propostas, parcerias ou conversas mais formais',
    href: 'mailto:pri.milanese@gmail.com',
    icone: 'ti-email',
    cor: '#4254b0',
    bg: '#f0f3ff',
  },
];

function Contato() {
  const [openForm, setOpenForm] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section style={{ background: '#fff', padding: '120px 0' }}>
        <div className="container">

          {/* Cabeçalho */}
          <div className="row align-items-end mb-80">
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
                Vamos conversar?
              </span>
              <h2 style={{ color: '#0f0f0f', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
                Me encontre por{' '}
                <span style={{ fontWeight: 200 }}>aqui também.</span>
              </h2>
            </div>
            <div className="col-lg-5 d-flex justify-content-lg-end mt-30 mt-lg-0">
              <button
                onClick={() => setOpenForm(true)}
                className="butn butn-md butn-bord radius-30"
              >
                Enviar mensagem
              </button>
            </div>
          </div>

          {/* Cards de redes sociais */}
          <div className="row">
            {redesSociais.map((r, i) => (
              <div className="col-lg-3 col-md-6" key={i} style={{ marginBottom: '24px' }}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    padding: '32px 28px',
                    border: `1px solid ${hovered === i ? r.cor : '#e8edfa'}`,
                    background: hovered === i ? r.cor : '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    boxShadow: hovered === i ? `0 12px 40px ${r.cor}30` : 'none',
                    transform: hovered === i ? 'translateY(-4px)' : 'none',
                  }}
                >
                  {/* Ícone */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: hovered === i ? 'rgba(255,255,255,0.2)' : r.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      transition: 'background 0.3s',
                    }}
                  >
                    <i
                      className={r.icone}
                      style={{
                        fontSize: '22px',
                        color: hovered === i ? '#fff' : r.cor,
                        transition: 'color 0.3s',
                      }}
                    />
                  </div>

                  {/* Nome da rede */}
                  <span
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      fontWeight: 700,
                      color: hovered === i ? 'rgba(255,255,255,0.7)' : '#999',
                      display: 'block',
                      marginBottom: '6px',
                      transition: 'color 0.3s',
                    }}
                  >
                    {r.nome}
                  </span>

                  {/* Usuário */}
                  <h6
                    style={{
                      fontWeight: 700,
                      color: hovered === i ? '#fff' : '#0f0f0f',
                      marginBottom: '10px',
                      fontSize: '15px',
                      transition: 'color 0.3s',
                    }}
                  >
                    {r.usuario}
                  </h6>

                  {/* Descrição */}
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: hovered === i ? 'rgba(255,255,255,0.85)' : '#888',
                      margin: '0 0 20px',
                      flex: 1,
                      transition: 'color 0.3s',
                    }}
                  >
                    {r.descricao}
                  </p>

                  {/* Seta */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: hovered === i ? '#fff' : r.cor,
                      transition: 'color 0.3s',
                    }}
                  >
                    Acessar <i className="ti-arrow-top-right" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Bloco de citação final */}
          {/* <div
            style={{
              marginTop: '60px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #4b2f95 0%, #4254b0 100%)',
              padding: '60px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
                pointerEvents: 'none',
              }}
            />
            <p
              style={{
                fontSize: '22px',
                fontWeight: 300,
                color: '#fff',
                lineHeight: 1.7,
                maxWidth: '640px',
                margin: '0 auto 32px',
                fontStyle: 'italic',
              }}
            >
              "Estou muito entusiasmada com a possibilidade de caminharmos juntos. Será um prazer apoiar o seu desenvolvimento."
            </p>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>
              — Priscila Milanese
            </span>
          </div> */}

        </div>
      </section>

      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Contato;