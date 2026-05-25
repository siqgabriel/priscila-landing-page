'use client';
import React from 'react';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-accord mb-80">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/header/consultoria3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Perguntas frequentes</h6>
                <h3>
                  Entenda como a consultoria pode transformar a sua organização.
                </h3>
              </div>

              <div className="accordion bord">

                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Para que tipo de empresa a consultoria é indicada?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      A consultoria é voltada para organizações que desejam desenvolver suas lideranças
                      e equipes de forma estratégica e humana. Atendo empresas de diferentes portes e
                      setores que entendem que investir em pessoas é investir em resultados sustentáveis.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Como funciona o processo de diagnóstico?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      O processo começa com uma escuta aprofundada dos gestores e, quando necessário,
                      das equipes. A partir daí, mapeio as necessidades reais de desenvolvimento,
                      identifico lacunas e proponho uma jornada de aprendizagem alinhada aos objetivos
                      do negócio e à cultura da organização.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Os treinamentos são presenciais ou online?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Trabalho com ambos os formatos, de acordo com a necessidade e contexto da
                      organização. Seja presencial, online ou híbrido, o foco é sempre garantir
                      uma experiência vivencial, com espaço para reflexão, prática e transferência
                      real para o dia a dia.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".7s">
                  <div onClick={openAccordion} className="title">
                    <h6>O que diferencia a sua abordagem de outras consultorias?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Combino 20 anos de experiência em grandes empresas com a profundidade da
                      Comunicação Não Violenta e uma escuta genuinamente qualificada. Não ofereço
                      soluções prontas — cada projeto é construído a partir da realidade específica
                      da organização, com foco em impacto duradouro e não apenas em entregas pontuais.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;