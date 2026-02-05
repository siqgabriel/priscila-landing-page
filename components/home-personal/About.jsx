import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/priscila1.png" alt="Priscila Milanese" />
              </div>
            </div>
          </div>

          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Sobre a Priscila</h6>

              <div className="text">
                <h4 className="mb-30">
                  Priscila Milanese,{' '}
                  <span className="fw-200">
                    20 anos transformando líderes e culturas organizacionais
                  </span>
                </h4>

                <p>
                  Atuei por duas décadas em Recursos Humanos, com forte atuação em Aprendizagem & Desenvolvimento em empresas como <strong>Natura&Co</strong> e <strong>Aramis</strong>.
                  Acompanhei de perto líderes, equipes e organizações em momentos de crescimento acelerado, fusões, reestruturações e grandes transformações culturais.
                </p>
                <br />
                <p>
                  Uma vivência de alguns anos em Nova York mudou completamente minha visão sobre relações humanas. Foi lá que mergulhei profundamente na <strong>Comunicação Não Violenta (CNV)</strong>,
                  participando do International Intensive Training pelo Center for Nonviolent Communication e de diversas formações avançadas.
                </p>
                <br />
                <p className="mb-10">
                  Hoje uno essa experiência corporativa sólida com a profundidade da CNV para ajudar líderes a construírem uma <strong>liderança mais consciente, presente e humana</strong> —
                  sem perder estratégia, resultados ou autenticidade.
                </p>
                <br />
                <div className="numbers mt-10">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">+20 ANOS</h3>
                          <h6 className="p-color sub-title">
                            em Recursos Humanos e Desenvolvimento de Líderes
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">Formação Internacional</h3>
                          <h6 className="p-color sub-title">
                            em Comunicação Não Violenta (CNV)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-60">
                  <a
                    href="#"
                    className="butn butn-md butn-bord main-color radius-30"
                    data-bs-toggle="modal"
                    data-bs-target="#formMultiStepModal"
                  >
                    Quero conhecer o Workshop da Priscila
                    <i className="fas fa-arrow-right" style={{ fontSize: '18px', marginLeft: '10px' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;