'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title mb-5">Meus serviços</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Para quem <span className="fw-200">é meu atendimento? </span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div className=''>
                    <h3 className="fw-600 fz-30 fz-xs-20 text-u d-rotate wow">
                      <span className="rotate-text">
                        <span className="fw-200">Líderes que sentem </span>desgaste emocional constante
                      </span>
                    </h3>
                  </div>
                  <div>
                    <a href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Entre em contato <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div className=''>
                    <h3 className="fw-600 fz-30 fz-xs-20 text-u d-rotate wow">
                      <span className="rotate-text">
                        <span className="fw-200">Líderes que querem </span>conversas difíceis sem romper relações
                      </span>
                    </h3>
                  </div>
                  <div>
                    <a href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Entre em contato <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div className=''>
                    <h3 className="fw-600 fz-30 fz-xs-20 text-u d-rotate wow">
                      <span className="rotate-text">
                        <span className="fw-200">Líderes que desejam </span>presença e clareza mesmo sob pressão
                      </span>
                    </h3>
                  </div>
                  <div>
                    <a href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Entre em contato <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div className=''>
                    <h3 className="fw-600 fz-30 fz-xs-20 text-u d-rotate wow">
                      <span className="rotate-text">
                        <span className="fw-200">Líderes que buscam </span>times mais engajados sem precisar cobrar
                      </span>
                    </h3>
                  </div>
                  <div>
                    <a href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Entre em contato <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div className=''>
                    <h3 className="fw-600 fz-30 fz-xs-20 text-u d-rotate wow">
                      <span className="rotate-text">
                        <span className="fw-200">Líderes prontos para </span>liderar com autenticidade e estratégia
                      </span>
                    </h3>
                  </div>
                  <div>

                    <a href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }} >
                      <span className="text sub-title">
                        Entre em contato <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100 mb-100">
        <div className="main-bg-card1 flex align-items-center flex-column" style={{ padding: '0 20px' }}>
          <h6 className="fz-30 fw-400 text-center">
            Mentoria e workshop <span className="fw-600">individual e em grupo</span>
          </h6>
          <p className='text-center wrap'>
            Clique no botão abaixo para conhecer o workshop ou agendar uma conversa inicial comigo e entender como posso te apoiar no seu momento atual de liderança
          </p>
          <div className="d-flex align-items-center mt-10">
            <a
              href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
              target='_blank'
              className="butn butn-md butn-bord1 radius-30"
              style={{ textAlign: 'center', fontSize: '18px' }}
            >
              Entre em contato!
              <i className="fab fa-whatsapp" style={{ fontSize: '20px', marginLeft: '5px' }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
