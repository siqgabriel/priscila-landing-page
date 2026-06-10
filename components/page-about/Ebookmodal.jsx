'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ReCAPTCHA from "react-google-recaptcha";

function EbookModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const recaptchaRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    nascimento: '',
    cargo: '',
    empresa: '',
    tempoLider: '',
    dores: '',
    origem: '',
  });

  // =========================
  // API HELPER
  // =========================
  const sendEmailEvent = async (eventType, token) => {
    try {
      const res = await fetch('/api/lead-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          event: eventType,
          recaptchaToken: token,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('API error:', data);
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Erro de conexão. Tente novamente.');
    }
  };

  // Animação de entrada
  useEffect(() => {
    if (open) {
      setStep(1);
      setFormData({ nome: '', email: '', telefone: '', nascimento: '', cargo: '', empresa: '', tempoLider: '', dores: '', origem: '' });
      setRecaptchaToken(null);
      gsap.fromTo('.ebook-modal', { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(
        '.ebook-modal-box',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [open]);

  // Animação do ícone de sucesso
  useEffect(() => {
    if (step === 4 && open) {
      gsap.fromTo(
        '.ebook-success-icon',
        { scale: 0, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [step, open]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/EBOOK-PRISCILA.pdf';
    link.download = 'Guia-Lideranca-Consciente-Priscila-Milanese.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lead-modal ebook-modal">
      <div className="lead-modal-overlay" onClick={onClose}></div>

      <div className="lead-modal-box main-bg-dark ebook-modal-box">
        <button className="lead-modal-close" onClick={onClose}>×</button>

        {/* HEADER DO MODAL */}
        <div className="lead-modal-head">
          <h5 className="mb-5 text-1">📖 Baixar e-book gratuito</h5>
          <p className="p1">
            Preencha seus dados para receber o Guia de Liderança Consciente.
          </p>
        </div>

        {/* STEPS INDICATOR */}
        <div className="lead-steps-webfolio">
          <span className={step >= 1 ? 'active' : ''}></span>
          <span className={step >= 2 ? 'active' : ''}></span>
          <span className={step >= 3 ? 'active' : ''}></span>
        </div>

        {/* ── STEP 1 — Dados pessoais ── */}
        {step === 1 && (
          <div className="lead-step-webfolio">
            <h6 className="mb-20 text-1">Seus dados</h6>

            <input
              className="lead-input"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              className="lead-input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="lead-input"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
            <input
              className="lead-input"
              type="text"
              name="nascimento"
              placeholder="Data de nascimento (DD/MM/AAAA)"
              maxLength={10}
              value={formData.nascimento}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 2) value = value.replace(/^(\d{2})(\d)/, '$1/$2');
                if (value.length > 5) value = value.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
                setFormData({ ...formData, nascimento: value });
              }}
            />

            <button
              className="butn butn-md butn-bord radius-30 w-100 mt-20"
              onClick={() => setStep(2)}
            >
              Continuar
            </button>
          </div>
        )}

        {/* ── STEP 2 — Atuação ── */}
        {step === 2 && (
          <div className="lead-step-webfolio">
            <h6 className="mb-20 text-1">Sua atuação</h6>

            <input
              className="lead-input"
              name="cargo"
              placeholder="Cargo atual e área"
              value={formData.cargo}
              onChange={handleChange}
            />
            <input
              className="lead-input"
              name="empresa"
              placeholder="Empresa onde trabalha"
              value={formData.empresa}
              onChange={handleChange}
            />

            <div className="lead-select-wrap">
              <select
                className="lead-input lead-select"
                name="tempoLider"
                value={formData.tempoLider}
                onChange={handleChange}
              >
                <option value="">Tempo como líder</option>
                <option>Menos de 6 meses</option>
                <option>6 meses a 1 ano</option>
                <option>1 a 2 anos</option>
                <option>2 a 5 anos</option>
                <option>Mais de 5 anos</option>
              </select>
              <span className="lead-select-arrow"></span>
            </div>

            <div className="lead-actions-webfolio">
              <button className="butn butn-md butn-bord radius-30" onClick={() => setStep(1)}>
                Voltar
              </button>
              <button className="butn butn-md butn-bord radius-30" onClick={() => setStep(3)}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3 — Sobre você ── */}
        {step === 3 && (
          <div className="lead-step-webfolio">
            <h6 className="mb-20 text-1">Sobre você</h6>

            <textarea
              className="lead-input"
              rows="4"
              name="dores"
              placeholder="Principais dúvidas ou dores na liderança"
              value={formData.dores}
              onChange={handleChange}
            />

            <div className="lead-select-wrap">
              <select
                className="lead-input lead-select"
                name="origem"
                value={formData.origem}
                onChange={handleChange}
              >
                <option value="">Como ficou sabendo?</option>
                <option>LinkedIn</option>
                <option>Instagram</option>
                <option>Indicação</option>
                <option>Outros</option>
              </select>
              <span className="lead-select-arrow"></span>
            </div>

            {/* reCAPTCHA */}
            <div style={{ marginTop: 20 }}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => setRecaptchaToken(token)}
              />
            </div>

            <div className="lead-actions-webfolio">
              <button className="butn butn-md butn-bord radius-30" onClick={() => setStep(2)}>
                Voltar
              </button>
              <button
                className="butn butn-md butn-bord radius-30"
                onClick={async () => {
                  if (!recaptchaToken) {
                    alert('Confirme que você não é um robô.');
                    return;
                  }
                  await sendEmailEvent('EBOOK_DOWNLOAD', recaptchaToken);
                  setStep(4);
                }}
              >
                Acessar e-book
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 4 — Download ── */}
        {step === 4 && (
          <div className="lead-step-success">
            <div className="success-icon-wrap">
              <div className="success-icon ebook-success-icon">📖</div>
            </div>

            <h5 className="text-1 mt-20 mb-10">
              Tudo pronto, {formData.nome ? formData.nome.split(' ')[0] : 'líder'}!
            </h5>

            <p className="p1 mb-30">
              Seu e-book está disponível para download. Boa leitura — e que ele abra novas
              perspectivas para a sua liderança. 🎉
            </p>

            {/* Botão principal de download */}
            <button
              className="butn butn-md radius-30 w-100 success-pay-btn mb-15"
              onClick={handleDownload}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <span>⬇️</span> Baixar e-book agora
            </button>

            {/* Link discreto para fechar */}
            <button
              onClick={onClose}
              className="success-whatsapp-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
            >
              Fechar
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default EbookModal;