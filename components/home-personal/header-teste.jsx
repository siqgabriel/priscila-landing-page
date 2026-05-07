'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import LeadFormModal from './LeadFormModal';

function Header() {
  const [openForm, setOpenForm] = useState(false);
  const [bgImage, setBgImage] = useState('/assets/imgs/header/priscila.png');

  // Detecta tamanho da tela e define imagem correta
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 440) {
        setBgImage('/assets/imgs/header/priscila-mobile.png');
      } else if (width >= 440 && width < 768) {
        setBgImage('/assets/imgs/header/priscila-mobile2.png');
      } else {
        setBgImage('/assets/imgs/header/priscila.png');
      }
    };

    handleResize(); // inicial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  // Reaplica background quando muda a imagem
  useEffect(() => {
    loadBackgroudImages();
  }, [bgImage]);

  return (
    <>
      <div
        className="header header-personal valign bg-img"
        data-background={bgImage}
        data-overlay-dark="2"
      >
        <div className="container ontop">
          <div className="row">
            <div className="col-15 col-lg-8">
              <div className="caption">
                {/* <div className='flex align-items-center'>
                  <span className="icon-img-50 mr-10">
                    <img src="/assets/imgs/header/star.png" alt="" />
                  </span>
                  <h6 className="" style={{ textTransform: 'uppercase', textAlign: 'left' }}>
                    Workshop
                    <br />
                    Liderança
                    <br />
                    Consciente
                  </h6>
                </div> */}

                <h1 className="fw-200 mb-10">
                  Lorem impsum
                  <br />
                  aductus poles in
                  <span
                    className="main-color fw-700"
                    style={{ textShadow: '0px 0px 15px #a2b7e3' }}
                  >
                    valorem opus cut golten
                  </span>
                </h1>

                <div className="text mt-10">
                  <p className="p1">
                    Vestibulum vitae feugiat augue. Maecenas quam dolor, tempus nec sagittis id, pulvinar at turpis.{' '}
                    <strong>
                      Sed condimentum sagittis lectus nec molestie aenean enim diam, molestie a pellentesque quis.  
                    </strong>
                  </p>
                </div>

                <div className="d-flex align-items-center mt-60">
                  <button
                    onClick={() => setOpenForm(true)}
                    className="butn butn-md butn-bord radius-30"
                  >
                    Preencha o formulário
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Header;


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
                    <span className="fw-200">Para </span>
                    {' '}líderes que:
                  </h3>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Sentem o peso da responsabilidade e da pressão por resultados;</li>
                    <br />
                    <li>Percebem que estão reagindo mais do que escolhendo como liderar;</li>
                    <br />
                    <li>Querem se comunicar melhor, gerar engajamento e reduzir conflitos;</li>
                    <br />
                    <li>Desejam liderar pessoas sem abrir mão de sua autenticidade.</li>
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
                    <br />
                    <br />
                    <span className='fw-600'>Você também se sente assim?</span>
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
                    <span className='fw-600'>Ao longo dos encontros, o participante desenvolverá uma liderança que:</span>
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
                    <li>Sai do operacional e assume de fato o papel de líder.</li>
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



import React from 'react';

function Services() {
  return (
    <section className="services-clas mb-20 pt-140">
      <div className="container bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">
                Você não sai apenas com mais conhecimento.
              </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  O que muda <span className="fw-200">depois do workshop</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

          {/* Card 1 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/19.png" alt="Conversas Difíceis" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Mais segurança para liderar
              </h5>
              <div className="text mt-20">
                <p>
                  Desenvolva confiança interna para tomar decisões, conduzir pessoas e sustentar sua posição mesmo em cenários desafiadores.
                  Você passa a liderar com mais firmeza, menos dúvida e mais coerência entre o que sente, pensa e comunica.
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-around" style={{ gap: '30px' }}>
                <a
                  href="#preco"
                  className="scroll-to-price"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Garanta sua vaga agora!</h6>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/20.png" alt="Liderança Consciente" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Mais clareza para se posicionar
              </h5>
              <div className="text mt-20">
                <p>
                  Aprenda a expressar limites, expectativas e opiniões com objetividade e respeito, sem medo de gerar conflito ou de ser mal interpretado.
                  Sua comunicação se torna mais direta, alinhada e estratégica.
                  <br />
                  <br />
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-around" style={{ gap: '30px' }}>
                <a
                  href="#preco"
                  className="scroll-to-price"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Garanta sua vaga agora!</h6>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/21.png" alt="Relações de Confiança" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Menos desgaste emocional
              </h5>
              <div className="text mt-20">
                <p>
                  Reduza o impacto emocional das pressões do dia a dia, aprendendo a regular reações automáticas e a lidar melhor com situações difíceis.
                  Você ganha mais equilíbrio, energia e estabilidade para sustentar sua rotina de liderança.
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-around" style={{ gap: '30px' }}>
                <a
                  href="#preco"
                  className="scroll-to-price"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Garanta sua vaga agora!</h6>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/22.png" alt="Relações de Confiança" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Relações mais saudáveis e produtivas
              </h5>
              <div className="text mt-20">
                <p>
                  Construa vínculos baseados em confiança, escuta real e colaboração genuína.
                  As relações se tornam mais leves, os conflitos mais construtivos e o ambiente mais propício a resultados consistentes.
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-around" style={{ gap: '30px' }}>
                <a
                  href="#preco"
                  className="scroll-to-price"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Garanta sua vaga agora!</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;

'use client';
import React, { useEffect, useRef, useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';
import {
    FaBrain,
    FaBolt,
    FaProjectDiagram,
    FaHeart,
    FaComments,
    FaHandshakeSlash,
    FaBullseye,
    FaChartLine,
    FaCalendarAlt,
    FaClock,
    FaVideo,
    FaUsers,
    FaRocket,
    FaLayerGroup
} from 'react-icons/fa';

function WorkshopTimeline() {
    const lineRef = useRef(null);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            lineRef.current,
            { width: '0%' },
            {
                width: '100%',
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    const encontros = [
        { icon: <FaBrain />, event: 'Encontro 1', title: 'Consciência de Si', output: 'Clareza sobre quem você é e o seu papel como líder.' },
        { icon: <FaBolt />, event: 'Encontro 2', title: 'Liderar sob Pressão', output: 'Menos reatividade, mais escolha consciente.' },
        { icon: <FaProjectDiagram />, event: 'Encontro 3', title: 'Do Controle à Confiança', output: 'Delegação segura e autonomia no time.' },
        { icon: <FaHeart />, event: 'Encontro 4', title: 'Empatia na Liderança', output: 'Conexões que geram engajamento real.' },
        { icon: <FaComments />, event: 'Encontro 5', title: 'Comunicação Autêntica', output: 'Clareza, responsabilidade e menos ruído.' },
        { icon: <FaHandshakeSlash />, event: 'Encontro 6', title: 'Gestão de Conflitos', output: 'Transformar tensões em colaboração.' },
        { icon: <FaBullseye />, event: 'Encontro 7', title: 'Feedback Consciente', output: 'Conversas que desenvolvem pessoas.' },
        { icon: <FaChartLine />, event: 'Encontro 8', title: 'Sustentando a Liderança', output: 'Plano prático para aplicar no dia a dia.' },
    ];

    return (
        <section className="workshop-timeline ">
            <div className="container">

                {/* HEADER */}
                <div className="sec-head mb-60">
                    <span className="sub-title main-color mb-5">
                        Estrutura do Workshop
                    </span>

                    <h3 className="fw-600 fz-50 text-u d-rotate wow">
                        <span className="rotate-text">
                            8 encontros para <span className="fw-200">transformar sua liderança</span>
                        </span>
                    </h3>

                    <p className="mt-10">
                        Uma jornada prática, profunda e aplicada à sua realidade como líder.
                    </p>
                </div>

                {/* FORMATO — PREMIUM */}
                <div className="workshop-format-premium mb-80">
                    <div className="format-card">
                        <FaCalendarAlt />
                        <div>
                            <strong>Terças-feiras</strong>
                            <span>19h às 21h</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaVideo />
                        <div>
                            <strong>100% Online</strong>
                            <span>Google Meet</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaClock />
                        <div>
                            <strong>2 horas</strong>
                            <span>por encontro</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaUsers />
                        <div>
                            <strong>Formato coletivo</strong>
                            <span>vivencial e prático</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaRocket />
                        <div>
                            <strong>Início</strong>
                            <span>10/03/2026</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaLayerGroup />
                        <div>
                            <strong>8 encontros</strong>
                            <span>até 05/05/2026</span>
                        </div>
                    </div>
                </div>

                {/* LINHA */}
                <div className="timeline-wrapper">
                    <div className="timeline-line" ref={lineRef}></div>

                    <div className="timeline-cards premium">
                        {encontros.map((item, index) => (
                            <div className="timeline-card premium" key={index}>
                                <div className='d-flex align-items-center' style={{gap:'20px'}}>
                                    <div className="timeline-icon">
                                        {item.icon}
                                    </div>
                                    <h4 className='fz-20 fw-200'>{item.event}</h4>
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.output}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-80">
                    <h5 className="mb-10">
                        Garanta sua vaga e comece essa jornada de transformação
                    </h5>
                    <button
                        onClick={() => setOpenForm(true)}
                        className="butn butn-md butn-bord-fo radius-30"
                    >
                        Inscreva-se no Workshop
                    </button>
                </div>
            </div>
            {/* MODAL */}
            <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
        </section>
    );
}

export default WorkshopTimeline;

