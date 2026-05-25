'use client';
import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

function InvestmentSection() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <section className="investment-section section-padding" id="preco">
            <div className="container">

                {/* Cabeçalho */}
                <div className="sec-head text-center mb-60">
                    <span className="sub-title main-color mb-10">Próxima Turma</span>
                    <h3 className="fw-600 fz-50 text-u d-rotate wow">
                        <span className="rotate-text">
                            Garanta sua vaga <span className="fw-200">antes de todo mundo</span>
                        </span>
                    </h3>
                    <p className="mt-10">
                        As inscrições para a próxima turma ainda não estão abertas — mas você já pode reservar o seu lugar.
                    </p>
                </div>

                {/* Card único */}
                <div
                    style={{
                        maxWidth: '620px',
                        margin: '0 auto',
                        borderRadius: '28px',
                        background: 'linear-gradient(135deg, #4b2f95 0%, #4254b0 100%)',
                        padding: '60px 52px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Elementos decorativos */}
                    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

                    {/* Ícone */}
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 28px',
                            fontSize: '28px',
                        }}
                    >
                        🔔
                    </div>

                    <h4
                        style={{
                            color: '#fff',
                            fontWeight: 700,
                            lineHeight: 1.3,
                            marginBottom: '16px',
                        }}
                    >
                        Inscreva-se para a próxima turma
                    </h4>

                    <p
                        style={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '15px',
                            lineHeight: 1.8,
                            marginBottom: '36px',
                        }}
                    >
                        Ao entrar na lista de espera, você recebe um aviso em primeira mão
                        assim que as vagas abrirem — antes de qualquer divulgação pública.
                    </p>

                    {/* Pills de benefícios */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            flexWrap: 'wrap',
                            marginBottom: '36px',
                        }}
                    >
                        {['Aviso antecipado', 'Prioridade na escolha', 'Condição especial'].map((item, i) => (
                            <span
                                key={i}
                                style={{
                                    background: 'rgba(255,255,255,0.12)',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    borderRadius: '999px',
                                    padding: '6px 16px',
                                    fontSize: '12px',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: 500,
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => setOpenForm(true)}
                        className="butn butn-md radius-30"
                        style={{
                            background: '#fff',
                            color: '#4254b0',
                            border: '1px solid #fff',
                            fontWeight: 700,
                            fontSize: '15px',
                            padding: '14px 40px',
                        }}
                    >
                        Quero garantir minha vaga
                    </button>

                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '20px' }}>
                        Sem compromisso. Você só será contatado quando as vagas abrirem.
                    </p>
                </div>

                {/* MODAL */}
                <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
            </div>
        </section>
    );
}

export default InvestmentSection;