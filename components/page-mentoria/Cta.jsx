'use client';
import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

function CTA() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <>
            <section style={{ background: '#fff', padding: '120px 0' }}>
                <div className="container">
                    <div
                        style={{
                            borderRadius: '28px',
                            background: 'linear-gradient(135deg, #4b2f95 0%, #4254b0 100%)',
                            padding: '80px 60px',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Elemento decorativo */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-60px',
                                right: '-60px',
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                pointerEvents: 'none',
                            }}
                        />

                        <span className="sub-title mb-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                            Pronto para o próximo passo?
                        </span>
                        <h3 className="fw-600 mt-10 mb-20" style={{ color: '#fff' }}>
                            Se você deseja fortalecer sua liderança{' '}
                            <span className="fw-200">de forma consciente,</span>
                            <br />
                            humana e eficaz,{' '}
                            <span className="fw-200">será um prazer caminhar ao seu lado.</span>
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.8 }}>
                            A mentoria começa com uma conversa. Entre em contato e vamos entender juntos
                            como posso apoiar o seu desenvolvimento.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => setOpenForm(true)}
                                className="butn butn-md radius-30"
                                style={{ background: '#fff', color: '#4254b0', border: '1px solid #fff', fontWeight: 600 }}
                            >
                                Quero iniciar minha mentoria
                            </button>
                            <a
                                href="#como-funciona"
                                className="butn butn-md butn-bord-thin radius-30"
                            >
                                Entender o processo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
        </>
    );
}

export default CTA;