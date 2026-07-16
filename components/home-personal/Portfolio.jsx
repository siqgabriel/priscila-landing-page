'use client';
import React, { useEffect, useState } from 'react';
import LeadFormModal from '../common/LeadFormModal';

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
                    Uma jornada de 8 encontros online ao vivo para líderes que querem ir além do operacional.
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>8 encontros ao vivo, terças 19h às 21h;</li>
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

          {/* CARD 3 — CONSULTORIA */}
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

          {/* CARD 4 — ATENDIMENTO PSICOLÓGICO */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Atendimento </span>
                    Psicológico
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    Transforme a forma como você se relaciona consigo mesmo e com as pessoas que fazem parte da sua vida.
                  </h6>

                  <p className="fz-12 fw-200 mt-15" style={{ lineHeight: 1.7, opacity: 0.85 }}>
                    Minha atuação como Psicóloga <span className="fw-600">(CRP 06/93134)</span> tem como base a Comunicação Não Violenta (CNV), promovendo autoconhecimento, autorresponsabilização e relações mais conscientes.
                  </p>

                  <h6 className="fw-600 mt-20 fz-13" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Como posso apoiar você:
                  </h6>

                  <ul className="mt-15 pt-list fz-12">
                    <li>
                      <span className="fw-600">Consigo mesmo —</span>{' '}
                      Compreenda seus sentimentos, necessidades e padrões de comportamento para superação de conflitos internos.
                    </li>
                    <br />
                    <li>
                      <span className="fw-600">Com o(a) parceiro(a) —</span>{' '}
                      Atendimento a casais e mediação de conflitos para fortalecer o diálogo e a conexão.
                    </li>
                    <br />
                    <li>
                      <span className="fw-600">Com os filhos —</span>{' '}
                      Orientação parental para construir relações mais respeitosas e cooperativas.
                    </li>
                    <br />
                    <li>
                      <span className="fw-600">Com o trabalho —</span>{' '}
                      Orientação profissional e apoio em momentos de escolha, transição e desenvolvimento de carreira.
                    </li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Quero agendar uma sessão
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/6.png" alt="Atendimento Psicológico" />
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