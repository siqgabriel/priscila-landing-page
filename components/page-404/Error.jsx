'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Error() {
  const containerRef = useRef(null);
  const numRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Blobs flutuantes em loop
    gsap.to(blob1Ref.current, {
      y: -30, x: 20, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut',
    });
    gsap.to(blob2Ref.current, {
      y: 24, x: -16, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1,
    });
    gsap.to(blob3Ref.current, {
      y: -18, x: 10, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5,
    });

    // Entrada em cascata
    tl.fromTo('.e404-badge', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
      .fromTo('.e404-num', { opacity: 0, scale: 0.7, filter: 'blur(20px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.9, ease: 'back.out(1.4)' }, 0.5)
      .fromTo('.e404-title', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
      .fromTo('.e404-desc', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 1.1)
      .fromTo('.e404-links', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 1.3)
      .fromTo('.e404-btn', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }, 1.4);

    // Shimmer no "404" em loop
    gsap.to('.e404-num', {
      textShadow: '0 0 80px rgba(66,84,176,0.6), 0 0 160px rgba(75,47,149,0.3)',
      duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5,
    });

    return () => tl.kill();
  }, []);

  const atalhos = [
    { label: 'Home', href: '/' },
    { label: 'Mentoria', href: '/mentoria' },
    { label: 'Workshop', href: '/lideranca-consciente' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 20px',
      }}
    >
      {/* Blobs decorativos animados */}
      <div
        ref={blob1Ref}
        style={{
          position: 'absolute', top: '10%', left: '-5%',
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'radial-gradient(circle, #c5d0f5 0%, transparent 70%)',
          opacity: 0.5, pointerEvents: 'none', zIndex: 0,
        }}
      />
      <div
        ref={blob2Ref}
        style={{
          position: 'absolute', bottom: '5%', right: '-8%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, #e8edfa 0%, transparent 70%)',
          opacity: 0.6, pointerEvents: 'none', zIndex: 0,
        }}
      />
      <div
        ref={blob3Ref}
        style={{
          position: 'absolute', top: '50%', left: '55%',
          width: '260px', height: '260px', borderRadius: '50%',
          background: 'radial-gradient(circle, #4254b020 0%, transparent 70%)',
          opacity: 0.8, pointerEvents: 'none', zIndex: 0,
          transform: 'translateY(-50%)',
        }}
      />

      {/* Linhas decorativas de grid — sutil */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(#e8edfa 1px, transparent 1px), linear-gradient(90deg, #e8edfa 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.35,
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Conteúdo central */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px', width: '100%' }}>

        {/* Badge */}
        <div
          className="e404-badge"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#f0f3ff', borderRadius: '999px',
            padding: '6px 18px', marginBottom: '28px',
            border: '1px solid #c5d0f5', opacity: 0,
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4254b0', display: 'block' }} />
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#4254b0', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            Página não encontrada
          </span>
        </div>

        {/* 404 grande */}
        <div
          ref={numRef}
          className="e404-num"
          style={{
            fontSize: 'clamp(120px, 20vw, 220px)',
            fontWeight: 800,
            lineHeight: 0.9,
            marginBottom: '32px',
            background: 'linear-gradient(135deg, #4b2f95 0%, #4254b0 50%, #a2b7e3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-4px',
            opacity: 0,
            willChange: 'transform, opacity, filter',
          }}
        >
          404
        </div>

        {/* Título */}
        <h2
          className="e404-title"
          style={{
            fontSize: 'clamp(22px, 4vw, 36px)',
            fontWeight: 700,
            color: '#0f0f0f',
            marginBottom: '16px',
            lineHeight: 1.2,
            opacity: 0,
          }}
        >
          Ops! Você digitou um link errado
          <span style={{ fontWeight: 200, color: '#4254b0' }}> ou esta página não existe.</span>
        </h2>

        {/* Descrição */}
        <p
          className="e404-desc"
          style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: 1.8,
            maxWidth: '440px',
            margin: '0 auto 40px',
            opacity: 0,
          }}
        >
          Não se preocupe — isso acontece. Volte para a home ou escolha uma das páginas abaixo para continuar explorando.
        </p>

        {/* Botão principal */}
        <a
          href="/"
          className="e404-btn butn butn-md butn-bord radius-30"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 700,
            marginBottom: '48px',
            opacity: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Voltar para a Home
        </a>

        {/* Atalhos rápidos */}
        <div
          className="e404-links"
          style={{
            display: 'flex', justifyContent: 'center', gap: '10px',
            flexWrap: 'wrap', opacity: 0,
          }}
        >
          <span style={{ fontSize: '12px', color: '#aaa', fontWeight: 500, alignSelf: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Ou vá para:
          </span>
          {atalhos.map((a, i) => (
            <a
              key={i}
              href={a.href}
              style={{
                padding: '6px 18px', borderRadius: '999px',
                background: '#f0f3ff', color: '#4254b0',
                fontSize: '13px', fontWeight: 600,
                border: '1px solid #c5d0f5', textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4254b0';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f0f3ff';
                e.currentTarget.style.color = '#4254b0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {a.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Error;