'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const videos = [
  {
    src: '/assets/video/video-nathan.mp4',
    nome: 'Nathan',
    cargo: 'Coordenador de People Analytics e Performance',
    inicial: 'N',
    cor: '#4254b0',
  },
  {
    src: '/assets/video/video-fernanda.mp4',
    nome: 'Fernanda',
    cargo: 'Gerente de Sustentabilidade',
    inicial: 'F',
    cor: '#4b2f95',
  },
  {
    src: '/assets/video/video-3.mp4',
    nome: 'Depoimento',
    cargo: 'Participante do Workshop',
    inicial: 'D',
    cor: '#4254b0',
  },
];

function VideoThumb({ video, onPlay }) {
  const videoRef = useRef(null);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Carrega o primeiro frame como thumbnail
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0.5;
    const handleLoaded = () => setThumbLoaded(true);
    el.addEventListener('loadeddata', handleLoaded);
    return () => el.removeEventListener('loadeddata', handleLoaded);
  }, []);

  return (
    <div
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '9/16',
        maxHeight: '480px',
        background: '#e8edfa',
        boxShadow: hovered
          ? `0 20px 60px ${video.cor}40`
          : '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Vídeo mudo para thumbnail */}
      <video
        ref={videoRef}
        src={video.src}
        muted
        playsInline
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
      />

      {/* Overlay escuro suave */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.1) 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.05) 100%)',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Botão Play */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${hovered ? 1.1 : 1})`,
          transition: 'transform 0.3s ease',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: hovered ? video.cor : 'rgba(255,255,255,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 8px 32px ${video.cor}50`,
        }}
      >
        {/* Triângulo play */}
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            borderLeft: `18px solid ${hovered ? '#fff' : video.cor}`,
            marginLeft: '4px',
            transition: 'border-color 0.3s ease',
          }}
        />
      </div>

      {/* Info na base */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 20px 24px',
        }}
      >
        <h6
          style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '16px',
            margin: '0 0 4px',
          }}
        >
          {video.nome}
        </h6>
        <span
          style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.75)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {video.cargo}
        </span>
      </div>

      {/* Tag "Assistir" no topo direito */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: hovered ? video.cor : 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          borderRadius: '999px',
          padding: '5px 14px',
          fontSize: '11px',
          fontWeight: 600,
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'background 0.3s ease',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        Assistir
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);

  // Fecha com ESC
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Autoplay ao abrir
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {/* Container do vídeo — evita fechar ao clicar no vídeo */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
        }}
      >
        <video
          ref={videoRef}
          src={video.src}
          controls
          playsInline
          style={{
            width: '100%',
            display: 'block',
            maxHeight: '85vh',
            objectFit: 'contain',
            background: '#000',
          }}
        />
      </div>

      {/* Botão fechar */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          fontSize: '22px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.2s',
          lineHeight: 1,
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        ×
      </button>
    </div>
  );
}

function Testimonials() {
  const [videoAtivo, setVideoAtivo] = useState(null);

  const swiperOptions = {
    modules: [Navigation],
    spaceBetween: 24,
    loop: false,
    breakpoints: {
      0: { slidesPerView: 1.15 },
      640: { slidesPerView: 2.1 },
      1024: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: '.testim-videos .swiper-button-next',
      prevEl: '.testim-videos .swiper-button-prev',
    },
  };

  return (
    <>
      <section className="testim-videos mb-80 mt-80 bord-top-grd bord-bottom-grd">
        <div className="container">

          {/* Cabeçalho */}
          <div className="sec-head mb-80">
            <div className="d-flex align-items-center">
              <div>
                <span className="sub-title main-color mb-5">Depoimentos</span>
                <h3 className="fw-600 fz-50 text-u d-rotate wow">
                  <span className="rotate-text">
                    Histórias <span className="fw-200">reais</span>
                  </span>
                </h3>
              </div>
              <div className="ml-auto">
                <div className="swiper-arrow-control">
                  <div className="swiper-button-prev">
                    <span className="ti-arrow-left"></span>
                  </div>
                  <div className="swiper-button-next">
                    <span className="ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carrossel de vídeos */}
          <Swiper
            {...swiperOptions}
            className="swiper-container"
          >
            {videos.map((video, i) => (
              <SwiperSlide key={i}>
                <VideoThumb
                  video={video}
                  onPlay={() => setVideoAtivo(video)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* Modal fullscreen */}
      {videoAtivo && (
        <VideoModal
          video={videoAtivo}
          onClose={() => setVideoAtivo(null)}
        />
      )}
    </>
  );
}

export default Testimonials;