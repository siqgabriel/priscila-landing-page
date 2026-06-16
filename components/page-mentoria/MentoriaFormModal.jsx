'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ReCAPTCHA from "react-google-recaptcha";

const WHATSAPP_URL = 'https://wa.me/5511981017106';

function MentoriaFormModal({ open, onClose }) {
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
        objetivo: '',
        origem: '',
    });

    // =========================
    // API HELPER
    // =========================
    const sendEmailEvent = async (token) => {
        try {
            const res = await fetch('/api/lead-notification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    event: 'MENTORIA_CONTATO',
                    recaptchaToken: token,
                }),
            });
            const data = await res.json();
            if (!res.ok) console.error('API error:', data);
        } catch (err) {
            console.error('Fetch error:', err);
        }
    };

    // =========================
    // MONTA MENSAGEM WHATSAPP
    // =========================
    const abrirWhatsApp = () => {
        const linhas = [
            `Olá, Priscila! 👋`,
            ``,
            `Me chamo *${formData.nome}* e tenho interesse em iniciar uma mentoria individual com você.`,
            ``,
            `📋 *Meus dados:*`,
            `• E-mail: ${formData.email || '—'}`,
            `• Telefone: ${formData.telefone || '—'}`,
            `• Data de nascimento: ${formData.nascimento || '—'}`,
            ``,
            `💼 *Minha atuação:*`,
            `• Cargo: ${formData.cargo || '—'}`,
            `• Empresa: ${formData.empresa || '—'}`,
            `• Tempo como líder: ${formData.tempoLider || '—'}`,
            ``,
            `🎯 *O que busco com a mentoria:*`,
            formData.objetivo || '—',
            ``,
            `📣 *Como fiquei sabendo:* ${formData.origem || '—'}`,
            ``,
            `Aguardo seu retorno! 😊`,
        ];

        const mensagem = linhas.join('\n');
        const url = `${WHATSAPP_URL}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };

    // =========================
    // ANIMAÇÕES
    // =========================
    useEffect(() => {
        if (open) {
            setStep(1);
            setFormData({ nome: '', email: '', telefone: '', nascimento: '', cargo: '', empresa: '', tempoLider: '', objetivo: '', origem: '' });
            setRecaptchaToken(null);
            gsap.fromTo('.mentoria-modal', { opacity: 0 }, { opacity: 1, duration: 0.25 });
            gsap.fromTo('.mentoria-modal-box', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' });
        }
    }, [open]);

    useEffect(() => {
        if (step === 4 && open) {
            gsap.fromTo('.mentoria-success-icon', { scale: 0, y: 20, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' });
        }
    }, [step, open]);

    if (!open) return null;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="lead-modal mentoria-modal">
            <div className="lead-modal-overlay" onClick={onClose}></div>

            <div className="lead-modal-box main-bg-dark mentoria-modal-box">
                <button className="lead-modal-close" onClick={onClose}>×</button>

                {/* HEADER */}
                <div className="lead-modal-head">
                    <h5 className="mb-5 text-1">Quero iniciar minha mentoria</h5>
                    <p className="p1">Preencha seus dados e vamos conversar sobre o seu desenvolvimento.</p>
                </div>

                {/* STEPS */}
                <div className="lead-steps-webfolio">
                    <span className={step >= 1 ? 'active' : ''}></span>
                    <span className={step >= 2 ? 'active' : ''}></span>
                    <span className={step >= 3 ? 'active' : ''}></span>
                </div>

                {/* ── STEP 1 — Dados pessoais ── */}
                {step === 1 && (
                    <div className="lead-step-webfolio">
                        <h6 className="mb-20 text-1">Seus dados</h6>

                        <input className="lead-input" name="nome" placeholder="Nome completo" value={formData.nome} onChange={handleChange} />
                        <input className="lead-input" type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                        <input className="lead-input" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
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

                        <button className="butn butn-md butn-bord radius-30 w-100 mt-20" onClick={() => setStep(2)}>
                            Continuar
                        </button>
                    </div>
                )}

                {/* ── STEP 2 — Atuação ── */}
                {step === 2 && (
                    <div className="lead-step-webfolio">
                        <h6 className="mb-20 text-1">Sua atuação</h6>

                        <input className="lead-input" name="cargo" placeholder="Cargo atual e área" value={formData.cargo} onChange={handleChange} />
                        <input className="lead-input" name="empresa" placeholder="Empresa onde trabalha" value={formData.empresa} onChange={handleChange} />

                        <div className="lead-select-wrap">
                            <select className="lead-input lead-select" name="tempoLider" value={formData.tempoLider} onChange={handleChange}>
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
                            <button className="butn butn-md butn-bord radius-30" onClick={() => setStep(1)}>Voltar</button>
                            <button className="butn butn-md butn-bord radius-30" onClick={() => setStep(3)}>Continuar</button>
                        </div>
                    </div>
                )}

                {/* ── STEP 3 — Objetivo e captcha ── */}
                {step === 3 && (
                    <div className="lead-step-webfolio">
                        <h6 className="mb-20 text-1">O que você busca</h6>

                        <textarea
                            className="lead-input"
                            rows="4"
                            name="objetivo"
                            placeholder="O que você deseja desenvolver ou transformar com a mentoria?"
                            value={formData.objetivo}
                            onChange={handleChange}
                        />

                        <div className="lead-select-wrap">
                            <select className="lead-input lead-select" name="origem" value={formData.origem} onChange={handleChange}>
                                <option value="">Como ficou sabendo da Priscila?</option>
                                <option>LinkedIn</option>
                                <option>Instagram</option>
                                <option>Indicação</option>
                                <option>Outros</option>
                            </select>
                            <span className="lead-select-arrow"></span>
                        </div>

                        <div style={{ marginTop: 20 }}>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={(token) => setRecaptchaToken(token)}
                            />
                        </div>

                        <div className="lead-actions-webfolio">
                            <button className="butn butn-md butn-bord radius-30" onClick={() => setStep(2)}>Voltar</button>
                            <button
                                className="butn butn-md butn-bord radius-30"
                                onClick={async () => {
                                    if (!recaptchaToken) { alert('Confirme que você não é um robô.'); return; }
                                    await sendEmailEvent(recaptchaToken);
                                    setStep(4);
                                }}
                            >
                                Finalizar
                            </button>
                        </div>
                    </div>
                )}

                {/* ── STEP 4 — Sucesso + WhatsApp ── */}
                {step === 4 && (
                    <div className="lead-step-success">
                        <div className="success-icon-wrap">
                            <div className="success-icon mentoria-success-icon">✓</div>
                        </div>

                        <h5 className="text-1 mt-20 mb-10">
                            Tudo certo, {formData.nome ? formData.nome.split(' ')[0] : 'líder'}!
                        </h5>

                        <p className="p1 mb-10">
                            Seus dados foram registrados. Agora é só dar o próximo passo — clique abaixo para enviar
                            uma mensagem diretamente para a Priscila pelo WhatsApp.
                        </p>

                        <p className="p1 mb-30" style={{ opacity: 0.7, fontSize: '13px' }}>
                            A mensagem já vem preenchida com todas as suas informações. 😊
                        </p>

                        {/* Botão WhatsApp */}
                        <button
                            className="butn butn-md radius-30 w-100 mb-15"
                            onClick={() => { abrirWhatsApp(); onClose(); }}
                            style={{
                                background: '#25d366',
                                color: '#fff',
                                border: 'none',
                                fontWeight: 700,
                                fontSize: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Enviar mensagem para a Priscila
                        </button>

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

export default MentoriaFormModal;