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
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title mb-5">Workshop Liderança Consciente</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Para quem <span className="fw-200">é este workshop?</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="cards">

          {/* CARD 1 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Para quem é</span>
                    {' '}este workshop
                  </h3>
                  <h6 className="fw-200 mt-10 fz-15">
                    Para líderes que:
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Sentem o peso da responsabilidade e da pressão por resultados;</li>
                    <br />
                    <li>Percebem que estão reagindo mais do que escolhendo como liderar;</li>
                    <br />
                    <li>Querem se comunicar melhor, gerar engajamento e reduzir conflitos;</li>
                    <br />
                    <li>Desejam liderar pessoas sem se perder de si mesmos.</li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Inscreva-se no Workshop
                    </button>
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

          {/* CARD 2 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">O desafio real</span>
                    {' '}da liderança hoje
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    A maioria dos líderes foi preparada para entregar resultados, mas não para lidar com:
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Emoções sob pressão;</li>
                    <br />
                    <li>Conflitos interpessoais;</li>
                    <br />
                    <li>Conversas difíceis;</li>
                    <br />
                    <li>Insegurança, cobrança e solidão do papel.</li>
                  </ul>

                  <h6 className="fw-200 fz-15">
                    <span className='fw-600'>O resultado?</span>
                    {' '}Mais controle, mais desgaste, menos confiança e equipes pouco engajadas.
                  </h6>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Inscreva-se no Workshop
                    </button>
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

          {/* CARD 3 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">A proposta do</span>
                    {' '}Workshop Liderança Consciente
                  </h3>


                  <h6 className="fw-200 mt-10 fz-15">
                    Este workshop convida o líder a pausar, olhar para si e ampliar sua consciência, para então liderar com mais clareza, empatia e intencionalidade.
                    <br />
                    <br />
                    <span className='fw-600'>Ao longo dos encontros, o participante desenvolve uma liderança que:</span>
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Substitui o controle pela confiança;</li>
                    <br />
                    <li>Comunica com clareza e responsabilidade;</li>
                    <br />
                    <li>Constrói relações sólidas;</li>
                    <br />
                    <li>Gera engajamento genuíno;</li>
                    <br />
                    <li>Entrega resultados de forma sustentável.</li>
                  </ul>


                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Inscreva-se no Workshop
                    </button>
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

          {/* CARD 4 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">O que você irá</span>
                    {' '}desenvolver na prática
                  </h3>

                  <ul className="mt-20 pt-list fz-12">
                    <li>Mais clareza emocional e tomada de decisão consciente;</li>
                    <br />
                    <li>Comunicação mais objetiva, humana e assertiva;</li>
                    <br />
                    <li>Capacidade de lidar com pressão sem reagir impulsivamente;</li>
                    <br />
                    <li>Relações de confiança com o time, pares e superiores;</li>
                    <br />
                    <li>Feedbacks que desenvolvem, em vez de desgastar;</li>
                    <br />
                    <li>Uma liderança mais alinhada com seus valores e propósito.</li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Inscreva-se no Workshop
                    </button>
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

          {/* CARD 5 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Diferencial da </span>
                    metodologia
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    <span className='fw-600'>Aprendizado aplicado à sua realidade como líder.</span>
                    <br />
                    <br />
                    Os encontros unem teoria e prática de forma vivencial.
                    <br />
                    <br />
                    Cada participante trabalha a partir de situações reais do seu dia a dia, trazendo desafios concretos de liderança para reflexão, diálogo e prática guiada.
                    <br />
                    <br />
                    <span className='fw-600'>O foco não é apenas entender conceitos, mas incorporar novas formas de pensar, sentir e agir como líder.</span>
                    <br />
                    <br />
                    Incluir o output do encontro (o que será aplicável após o encontro? o que eu faço com isso, como vou aplicar isso no meu a dia-a-dia, objetivo de aprendizagem do encontro, algo que a pessoa se veja vivendo, o efeito que quero gerar)
                  </h6>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Inscreva-se no Workshop
                    </button>
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

      {/* MODAL */}
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
}

export default Portfolio;
