'use client';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import EbookModal from './EbookModal';

const SESSION_KEY = 'priscila_ebook_popup_shown';

function EbookPopup() {
    const [visible, setVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        // Verifica se já foi exibido nesta sessão
        try {
            const jaVisto = sessionStorage.getItem(SESSION_KEY);
            if (jaVisto) return;
        } catch {
            // sessionStorage indisponível (ex: iframe, modo privado restrito)
            return;
        }

        const timer = setTimeout(() => {
            setVisible(true);
            sessionStorage.setItem(SESSION_KEY, '1');

            // Aguarda o DOM renderizar antes de animar
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const overlay = document.querySelector('.ebook-popup-overlay');
                    const card = document.querySelector('.ebook-popup-card');
                    const items = document.querySelectorAll('.ebook-popup-content > *');

                    if (!card) return;

                    if (overlay) {
                        gsap.fromTo(overlay,
                            { opacity: 0 },
                            { opacity: 1, duration: 0.4, ease: 'power2.out' }
                        );
                    }

                    gsap.fromTo(card,
                        { y: '100%', opacity: 0, filter: 'blur(8px)' },
                        { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.65, ease: 'power4.out', delay: 0.1 }
                    );

                    if (items.length) {
                        gsap.fromTo(items,
                            { opacity: 0, y: 16 },
                            { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.07, delay: 0.45 }
                        );
                    }
                });
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        const card = document.querySelector('.ebook-popup-card');
        const overlay = document.querySelector('.ebook-popup-overlay');

        if (card) {
            gsap.to(card, { y: '100%', opacity: 0, filter: 'blur(6px)', duration: 0.4, ease: 'power3.in' });
        }
        if (overlay) {
            gsap.to(overlay, {
                opacity: 0, duration: 0.35, ease: 'power2.in',
                onComplete: () => setVisible(false),
            });
        } else {
            setVisible(false);
        }
    };

    const handleOpenModal = () => {
        handleClose();
        setTimeout(() => setOpenModal(true), 420);
    };

    if (!visible && !openModal) return null;

    return (
        <>
            {visible && (
                <>
                    {/* Overlay */}
                    <div
                        className="ebook-popup-overlay"
                        onClick={handleClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(10,10,20,0.55)',
                            zIndex: 9998,
                            backdropFilter: 'blur(4px)',
                            WebkitBackdropFilter: 'blur(4px)',
                            opacity: 0,
                        }}
                    />

                    {/* Card */}
                    <div
                        className="ebook-popup-card"
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '100%',
                            maxWidth: '580px',
                            zIndex: 9999,
                            borderRadius: '28px 28px 0 0',
                            overflow: 'hidden',
                            background: 'linear-gradient(145deg, #4b2f95 0%, #3a5bd9 60%, #4254b0 100%)',
                            boxShadow: '0 -24px 80px rgba(66,84,176,0.45), 0 -2px 0 rgba(255,255,255,0.08) inset',
                            opacity: 0,
                            willChange: 'transform, opacity, filter',
                        }}
                    >
                        {/* Alça decorativa */}
                        <div style={{
                            position: 'absolute', top: '12px', left: '50%',
                            transform: 'translateX(-50%)', width: '40px', height: '4px',
                            borderRadius: '99px', background: 'rgba(255,255,255,0.25)',
                        }} />

                        {/* Círculos decorativos */}
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
                        <div style={{ position: 'absolute', bottom: '-40px', left: '5%', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

                        {/* Botão fechar */}
                        <button
                            onClick={handleClose}
                            style={{
                                position: 'absolute', top: '20px', right: '20px',
                                width: '34px', height: '34px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff', fontSize: '18px', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                lineHeight: 1, zIndex: 2, transition: 'background 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                        >
                            ×
                        </button>

                        {/* Conteúdo */}
                        <div
                            className="ebook-popup-content"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '20px',
                                padding: '40px 32px 36px', position: 'relative',
                            }}
                        >
                            {/* Capa miniatura */}
                            <div style={{
                                width: '76px', minWidth: '76px', height: '96px',
                                borderRadius: '10px',
                                background: 'linear-gradient(180deg, #ffffff 0%, #e8edfa 100%)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                justifyContent: 'center', padding: '10px 8px',
                                boxShadow: '0 12px 32px rgba(0,0,0,0.3), 4px 4px 0 rgba(0,0,0,0.1)',
                                gap: '4px', flexShrink: 0,
                            }}>
                                <span style={{ fontSize: '8px', fontWeight: 700, color: '#4254b0', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', lineHeight: 1.2 }}>E-book</span>
                                <div style={{ width: '30px', height: '2px', background: '#4254b0', borderRadius: '2px', margin: '2px 0' }} />
                                <span style={{ fontSize: '10px', fontWeight: 700, color: '#0f0f0f', textAlign: 'center', lineHeight: 1.3 }}>Liderança<br />Consciente</span>
                                <span style={{ fontSize: '8px', color: '#888', textAlign: 'center', lineHeight: 1.2, marginTop: '2px' }}>Priscila<br />Milanese</span>
                            </div>

                            {/* Texto + CTA */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    background: 'rgba(255,255,255,0.13)', borderRadius: '999px',
                                    padding: '4px 12px', marginBottom: '10px',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                }}>
                                    <span style={{ fontSize: '12px' }}>📖</span>
                                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.95)', textTransform: 'uppercase', letterSpacing: '1.2px' }}>Gratuito</span>
                                </div>

                                <h4 style={{ color: '#fff', fontWeight: 700, lineHeight: 1.25, marginBottom: '8px', fontSize: 'clamp(16px, 3vw, 20px)' }}>
                                    Guia de Liderança Consciente
                                    <span style={{ fontWeight: 200 }}> com base na CNV</span>
                                </h4>

                                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '13px', lineHeight: 1.6, marginBottom: '20px' }}>
                                    Um material prático para líderes que querem crescer com mais consciência e humanidade.
                                </p>

                                <button
                                    onClick={handleOpenModal}
                                    style={{
                                        background: '#fff', color: '#4254b0', border: 'none',
                                        borderRadius: '999px', padding: '11px 26px', fontSize: '13px',
                                        fontWeight: 700, cursor: 'pointer',
                                        display: 'inline-flex', alignItems: 'center', gap: '7px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.25)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                                    }}
                                >
                                    <span>⬇️</span>
                                    Baixar agora — é grátis
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <EbookModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}

export default EbookPopup;