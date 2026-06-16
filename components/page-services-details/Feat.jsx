import React from 'react';

function Feat() {
  return (
    <section className="feat mb-80" id="solucoes">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                O que posso <span className="fw-200">oferecer</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <a
                href='https://wa.me/5511981017106?text=Ol%C3%A1%20Priscila!%20Vim%20pelo%20site'
                target='_blank'
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Fale comigo</span>
              </a>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Soluções customizadas para a sua organização</span>
            <span className="thin"></span>
          </h6>
        </div>

        <div className="row">

          {/* Solução 01 */}
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/01-dark.svg" alt="" />
              </div>
              <span className="mb-30 p-color">01 .</span>
              <h6 className="mb-20">Diagnóstico de T&D</h6>
              <p>
                Mapeamento profundo das necessidades de treinamento e desenvolvimento da
                sua organização — com escuta ativa e visão estratégica de A&D.
              </p>
            </div>
          </div>

          {/* Solução 02 */}
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/02-dark.svg" alt="" />
              </div>
              <span className="mb-30 p-color">02 .</span>
              <h6 className="mb-20">Jornadas de Aprendizagem</h6>
              <p>
                Desenho de programas de desenvolvimento sob medida, conectando os objetivos
                do negócio ao crescimento real das pessoas e equipes.
              </p>
            </div>
          </div>

          {/* Solução 03 */}
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 sm-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/03-dark.svg" alt="" />
              </div>
              <span className="mb-30 p-color">03 .</span>
              <h6 className="mb-20">Soft Skills & Team Building</h6>
              <p>
                Facilitação de treinamentos vivenciais em Comunicação Empática,
                Relacionamento Interpessoal, Liderança Consciente e colaboração em equipe.
              </p>
            </div>
          </div>

          {/* Solução 04 */}
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/04-dark.svg" alt="" />
              </div>
              <span className="mb-30 p-color">04 .</span>
              <h6 className="mb-20">Cultura de Aprendizado</h6>
              <p>
                Apoio à construção e sustentação de uma cultura de aprendizagem contínua,
                com formação de líderes, mentores internos e jovens talentos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Feat;