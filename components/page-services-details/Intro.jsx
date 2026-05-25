import React from 'react';

function Intro() {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8">
            <div className="row lg-marg">

              {/* Coluna esquerda — título */}
              <div className="col-md-6">
                <div>
                  <h6 className="sub-title main-color mb-15">
                    20 anos de experiência corporativa
                  </h6>
                  <h3 className="mb-30">
                    Aprendizagem estratégica para organizações que querem crescer com pessoas.
                  </h3>
                </div>
              </div>

              {/* Coluna direita — texto e bullets */}
              <div className="col-md-6">
                <div className="text">
                  <p className="mb-15">
                    Com passagem por empresas como Natura&Co e Aramis, desenvolvi uma visão
                    estratégica e humana de como o aprendizado transforma culturas, equipes e resultados.
                  </p>
                  <p>
                    Ofereço soluções customizadas que combinam diagnóstico aprofundado, desenho
                    de jornadas e facilitação — sempre com foco em aplicação real e impacto duradouro.
                  </p>

                  <div className="mt-30">
                    <ul className="rest dot-list">
                      <li className="mb-10">Diagnóstico de Necessidades de T&D</li>
                      <li className="mb-10">Desenho de Jornadas de Aprendizagem</li>
                      <li className="mb-10">Facilitação de Soft Skills e Team Building</li>
                      <li className="mb-10">Formação de Líderes e Jovens Talentos</li>
                      <li>Cultura de Aprendizado Contínuo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Números */}
            <div className="numbers mt-80 md-mb50">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30">
                    <div>
                      <h3 className="fw-300 mb-10">20+</h3>
                      <h6 className="p-color sub-title">Anos em RH & Aprendizagem</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">13</h3>
                      <h6 className="p-color sub-title">Anos de Natura&Co</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem lateral */}
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src="/assets/imgs/header/consultoria2.png" alt="Consultoria Priscila Milanese" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;