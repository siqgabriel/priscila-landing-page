'use client';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

function LeadFormModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [openPix, setOpenPix] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);
  const pixCode = 'c2a3d5e3-8b9d-4b49-b77a-f19af47e413b';
  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setPixCopied(true);

      setTimeout(() => {
        setPixCopied(false);
      }, 3000);
    } catch (err) {
      console.error('Erro ao copiar PIX', err);
    }
  };
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    nascimento: '',
    cargo: '',
    empresa: '',
    tempoLider: '',
    dores: '',
    origem: ''
  });

  useEffect(() => {
    if (open) {
      gsap.fromTo('.lead-modal', { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(
        '.lead-modal-box',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [open]);

  useEffect(() => {
    if (step === 4 && open) {
      gsap.fromTo(
        '.success-icon',
        { scale: 0, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [step, open]);

  if (!open) return null;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="lead-modal">
      <div className="lead-modal-overlay" onClick={onClose}></div>

      <div className="lead-modal-box main-bg-dark">
        <button className="lead-modal-close" onClick={onClose}>×</button>

        {/* HEADER DO MODAL */}
        <div className="lead-modal-head">
          <h5 className="mb-5 text-1">
            Garanta sua vaga
          </h5>
          <p className="p1">
            Preencha seus dados para continuar sua inscrição.
          </p>
        </div>

        {/* STEPS INDICATOR */}
        <div className="lead-steps-webfolio">
          <span className={step >= 1 ? 'active' : ''}></span>
          <span className={step >= 2 ? 'active' : ''}></span>
          <span className={step >= 3 ? 'active' : ''}></span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="lead-step-webfolio">
            <h6 className="mb-20 text-1">Seus dados</h6>

            <input
              className="lead-input"
              name="nome"
              placeholder="Nome completo"
              onChange={handleChange}
            />
            <input
              className="lead-input"
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
            />
            <input
              className="lead-input"
              name="telefone"
              placeholder="Telefone"
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

                if (value.length > 2) {
                  value = value.replace(/^(\d{2})(\d)/, '$1/$2');
                }
                if (value.length > 5) {
                  value = value.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
                }

                setFormData({ ...formData, nascimento: value });
              }}
            />

            <button className="butn butn-md butn-bord radius-30 w-100 mt-20" onClick={() => setStep(2)}>
              Continuar
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="lead-step-webfolio">
            <h6 className="mb-20 text-1">Sua atuação</h6>

            <input
              className="lead-input"
              name="cargo"
              placeholder="Cargo atual e área"
              onChange={handleChange}
            />
            <input
              className="lead-input"
              name="empresa"
              placeholder="Empresa onde trabalha"
              onChange={handleChange}
            />

            <div className="lead-select-wrap">
              <select className="lead-input lead-select" name="tempoLider" onChange={handleChange}>
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

        {/* STEP 3 */}
        {step === 3 && (
          <div className="lead-step-webfolio">
            <h6 className="mb-20 text-1">Sobre você</h6>

            <textarea
              className="lead-input"
              rows="4"
              name="dores"
              placeholder="Principais dúvidas ou dores na liderança"
              onChange={handleChange}
            />

            <div className="lead-select-wrap">
              <select className="lead-input lead-select" name="origem" onChange={handleChange}>
                <option value="">Como ficou sabendo?</option>
                <option>LinkedIn</option>
                <option>Instagram</option>
                <option>Indicação</option>
                <option>Outros</option>
              </select>
              <span className="lead-select-arrow"></span>
            </div>

            <div className="lead-actions-webfolio">
              <button className="butn butn-md butn-bord radius-30" onClick={() => setStep(2)}>
                Voltar
              </button>
              <button
                className="butn butn-md butn-bord radius-30"
                onClick={() => setStep(4)}
              >
                Finalizar inscrição
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — SUCESSO */}
        {step === 4 && (
          <div className="lead-step-success">
            <div className="success-icon-wrap">
              <div className="success-icon">✓</div>
            </div>

            <h5 className="text-1 mt-20 mb-10">
              Cadastro realizado com sucesso!
            </h5>

            <p className="p1 mb-30">
              Sua inscrição foi registrada. Agora finalize sua vaga realizando o pagamento.
            </p>

            {/* BOTÃO PRINCIPAL — PIX */}
            <button
              className="butn butn-md radius-30 w-100 success-pay-btn mb-15"
              onClick={() => setOpenPix(true)}
            >
              💙 Pagar no PIX (10% de desconto)
            </button>

            {/* BOTÃO CARTÃO — BORDA AZUL */}
            <a
              href="https://www.asaas.com/c/ihrq2yhz4ux3kcah"
              target="_blank"
              rel="noopener noreferrer"
              className="butn butn-md radius-30 w-100 butn-outline-blue mb-20"
            >
              Continuar para pagamento com cartão
            </a>

            {/* WHATSAPP — MANTIDO */}
            <a
              href="https://wa.me/5511981884999"
              target="_blank"
              className="success-whatsapp-link"
            >
              Prefiro falar pelo WhatsApp
            </a>
          </div>
        )}

      </div>
      {openPix && (
        <div className="pix-modal">
          <div className="pix-modal-overlay" onClick={() => setOpenPix(false)}></div>

          <div className="pix-modal-box main-bg-dark">
            <button className="lead-modal-close" onClick={() => setOpenPix(false)}>×</button>

            <h5 className="text-1 mb-10">Pagamento via PIX</h5>
            <p className="p1 mb-20">
              Escaneie o QR Code abaixo para concluir o pagamento com 10% de desconto.
            </p>

            {/* QR CODE — DESKTOP */}
            <div className="pix-qrcode-wrap desktop-only">
              <img
                src="/assets/imgs/QRCODE.png"
                alt="QR Code PIX"
                className="pix-qrcode-img"
              />
            </div>

            {/* MOBILE — COPIAR CÓDIGO */}
            <div className="mobile-only pix-copy-wrap">
              <p className="p1 mb-10">
                No celular, copie o código PIX abaixo:
              </p>

              <div className="pix-code-box">
                <code>{pixCode}</code>
              </div>

              <button
                className="butn butn-md radius-30 w-100 success-pay-btn mt-15"
                onClick={handleCopyPix}
              >
                {pixCopied ? '✅ Código PIX copiado!' : '📋 Copiar código PIX'}
              </button>
            </div>

            <p className="p1 mt-20">
              Após o pagamento, sua vaga será confirmada automaticamente.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default LeadFormModal;
