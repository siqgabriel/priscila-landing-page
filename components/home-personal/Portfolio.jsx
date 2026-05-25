'use client';
import React, { useEffect, useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

function Portfolio() {
  const [openForm, setOpenForm] = useState(false);

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
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section className="work-card mb-20 pt-20">
      <div className="container">
        <div className="sec-head mb-80 mt-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title mb-5">O que posso fazer por você</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Soluções para <span className="fw-200">uma liderança consciente</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="cards">

          {/* CARD 1 — MENTORIA */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Mentoria </span>
                    {' '}Individual
                  </h3>
                  <h6 className="fw-200 mt-10 fz-15">
                    Um espaço de escuta, reflexão e prática para líderes que desejam crescer com consciência.
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Desenvolva clareza emocional e responsabilidade pelos seus sentimentos;</li>
                    <br />
                    <li>Conduza conversas difíceis com mais segurança e humanidade;</li>
                    <br />
                    <li>Fortaleça relações de confiança e colaboração genuína;</li>
                    <br />
                    <li>Lidere com mais integridade, presença e alinhamento aos seus valores.</li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Quero saber mais
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1.png" alt="Mentoria Individual" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 — WORKSHOP */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Workshop </span>
                    {' '}Liderança Consciente
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    Uma jornada coletiva e vivencial para líderes que querem ir além do operacional.
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>8 encontros online ao vivo com profundidade e aplicação prática;</li>
                    <br />
                    <li>Aprenda a liderar a partir da autoconsciência e da empatia;</li>
                    <br />
                    <li>Reduza conflitos, aumente o engajamento e fortaleça sua comunicação;</li>
                    <br />
                    <li>Baseado na Comunicação Não Violenta — metodologia própria.</li>
                  </ul>

                  <h6 className="fw-200 fz-15">
                    <span className='fw-600'>Para quem é?</span>
                    {' '}Líderes que sentem o peso da responsabilidade e querem liderar com mais clareza, humanidade e propósito.
                  </h6>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Quero participar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/2.png" alt="Workshop Liderança Consciente" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 — CONSULTORIA / TREINAMENTOS */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Consultoria &</span>
                    {' '}Treinamentos
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    Soluções customizadas de Aprendizagem & Desenvolvimento para organizações que colocam pessoas no centro.
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Diagnóstico de necessidades de treinamento e desenvolvimento;</li>
                    <br />
                    <li>Desenho de jornadas de aprendizagem sob medida;</li>
                    <br />
                    <li>Facilitação de treinamentos de soft skills e team building;</li>
                    <br />
                    <li>Formação de líderes, jovens talentos e mentores internos;</li>
                    <br />
                    <li>Apoio à construção de cultura de aprendizagem contínua.</li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Fale comigo
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/3.png" alt="Consultoria e Treinamentos" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
}

export default Portfolio;