'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ReCAPTCHA from 'react-google-recaptcha';

const WHATSAPP_URL = 'https://wa.me/5511981017106';

function Contact() {
  const recaptchaRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cargo: '',
    mensagem: '',
  });

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.contato-section', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '+=0.5');
    return () => tl.kill();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Preencha pelo menos nome, e-mail e mensagem.');
      return;
    }
    if (!recaptchaToken) {
      alert('Confirme que você não é um robô.');
      return;
    }

    setEnviando(true);
    try {
      const res = await fetch('/api/lead-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, event: 'CONTATO', recaptchaToken }),
      });
      if (res.ok) {
        setEnviado(true);
        gsap.fromTo('.contato-success', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch {
      alert('Erro de conexão. Tente novamente.');
    }
    setEnviando(false);
  };

  return (
    <section
      className="contato-section"
      style={{
        background: '#fff',
        paddingTop: '160px',
        paddingBottom: '120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Bloco decorativo — direita */}
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
        <div className="row align-items-center" style={{ minHeight: '70vh', gap: '0' }}>

          {/* ── ESQUERDA — informações de contato ── */}
          <div className="col-lg-5 md-mb80" style={{ paddingRight: '48px' }}>
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
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Contato
              <br />
              <span style={{ fontWeight: 200, color: '#4254b0' }}>com a Priscila</span>
            </h1>

            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
              Seja para iniciar uma mentoria, contratar uma consultoria ou tirar dúvidas
              sobre o workshop — será um prazer conversar com você.
            </p>
            <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.8, margin: '0 0 40px' }}>
              Escolha o canal que preferir ou preencha o formulário ao lado.
            </p>

            {/* Canais diretos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>

              {/* WhatsApp */}
              <a
                href={`${WHATSAPP_URL}?text=Ol%C3%A1%20Priscila!%20Vim%20pelo%20site`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 20px', borderRadius: '14px',
                  background: '#f0fdf4', border: '1px solid #bbf7d0',
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#dcfce7'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f0fdf4'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#166534', display: 'block' }}>(11) 98101-7106</span>
                  <span style={{ fontSize: '12px', color: '#4ade80' }}>WhatsApp · resposta rápida</span>
                </div>
              </a>

              {/* E-mail */}
              <a
                href="mailto:pri.milanese@gmail.com"
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 20px', borderRadius: '14px',
                  background: '#f0f3ff', border: '1px solid #c5d0f5',
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e0e8ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f0f3ff'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#4254b0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1e3a8a', display: 'block' }}>pri.milanese@gmail.com</span>
                  <span style={{ fontSize: '12px', color: '#4254b0' }}>E-mail · propostas e parcerias</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/priscilamilanese-mentora"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 20px', borderRadius: '14px',
                  background: '#eff6ff', border: '1px solid #bfdbfe',
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#dbeafe'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#eff6ff'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#0077b5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1e3a8a', display: 'block' }}>priscilamilanese-mentora</span>
                  <span style={{ fontSize: '12px', color: '#0077b5' }}>LinkedIn · conteúdo sobre liderança</span>
                </div>
              </a>

            </div>

            {/* Badge disponibilidade */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#25d366', display: 'block', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#333' }}>
                Disponível para novos projetos — Mentoria · Consultoria · Workshop
              </span>
            </div>
          </div>

          {/* ── DIREITA — formulário ── */}
          <div className="col-lg-7" style={{ paddingLeft: '48px' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '48px 44px',
                boxShadow: '0 8px 48px rgba(66,84,176,0.10)',
                border: '1px solid #e8edfa',
              }}
            >
              <div className="sec-head mb-40">
                <h3 style={{ color: '#0f0f0f', fontWeight: 700, lineHeight: 1.2 }}>
                  Vamos <span style={{ fontWeight: 200, color: '#4254b0' }}>conversar!</span>
                </h3>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
                  Preencha o formulário e entrarei em contato em até 24 horas.
                </p>
              </div>

              {/* Sucesso */}
              {enviado ? (
                <div className="contato-success" style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#4254b0', color: '#fff', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    ✓
                  </div>
                  <h5 style={{ color: '#0f0f0f', fontWeight: 700, marginBottom: '10px' }}>Mensagem enviada!</h5>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.7 }}>
                    Obrigada pelo contato, <strong>{formData.nome.split(' ')[0]}</strong>!<br />
                    Retorno em breve. 😊
                  </p>
                  <a
                    href={`${WHATSAPP_URL}?text=Ol%C3%A1%20Priscila!%20Acabei%20de%20enviar%20uma%20mensagem%20pelo%20site.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '20px', fontSize: '13px', color: '#25d366', textDecoration: 'underline', fontWeight: 600 }}
                  >
                    Prefere falar pelo WhatsApp agora?
                  </a>
                </div>
              ) : (
                <div className="controls">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          type="text"
                          name="nome"
                          placeholder="Nome completo"
                          value={formData.nome}
                          onChange={handleChange}
                          className="lead-input2"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          value={formData.email}
                          onChange={handleChange}
                          className="lead-input2"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-30">
                        <input
                          type="text"
                          name="cargo"
                          placeholder="Cargo e empresa"
                          value={formData.cargo}
                          onChange={handleChange}
                          className="lead-input2"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-30">
                        <textarea
                          name="mensagem"
                          placeholder="Como posso te ajudar?"
                          rows="5"
                          value={formData.mensagem}
                          onChange={handleChange}
                          className="lead-input2"
                          style={{ borderRadius: '10px', resize: 'vertical' }}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-20">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        onClick={handleSubmit}
                        disabled={enviando}
                        className="butn butn-full butn-bord radius-30"
                        style={{ opacity: enviando ? 0.7 : 1 }}
                      >
                        <span className="text">
                          {enviando ? 'Enviando...' : 'Enviar mensagem'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;