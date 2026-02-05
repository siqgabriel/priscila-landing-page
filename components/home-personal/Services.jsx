import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">
                Ferramentas práticas para líderes mais presentes e eficazes
              </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  O que você <span className="fw-200">pode trabalhar comigo</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

          {/* Card 1 */}
          <div className="col-lg-4" style={{ marginBottom: '40px' }}>
            <div className="item sub-bg-card md-mb30">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/7.png" alt="Conversas Difíceis" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Conversas difíceis com clareza e humanidade
              </h5>
              <div className="text mt-20">
                <p>
                  Aprenda a conduzir feedbacks, conflitos e pedidos delicados sem romper a confiança,
                  usando ferramentas da Comunicação Não Violenta (CNV).
                  Saia do confronto ou do silêncio e crie diálogos que realmente transformam relações.
                  <br />
                  <br />
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-between">
                <a
                  href="#"
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#formMultiStepModal"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Workshop introdutório</h6>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4" style={{ marginBottom: '40px' }}>
            <div className="item sub-bg-card md-mb30">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/8.png" alt="Liderança Consciente" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Liderança consciente e presença emocional
              </h5>
              <div className="text mt-20">
                <p>
                  Desenvolva autoconsciência emocional e regulação interna para liderar sob pressão
                  sem se desgastar ou reagir automaticamente.
                  Fortaleça sua capacidade de estar 100% presente, mesmo nos dias mais intensos.
                  <br />
                  <br />
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-between">
                <a
                  href="#"
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#formMultiStepModal"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Workshop introdutório</h6>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4" style={{ marginBottom: '40px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/9.png" alt="Relações de Confiança" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Construção de relações de confiança e colaboração
              </h5>
              <div className="text mt-20">
                <p>
                  Crie times mais engajados e ambientes de alta confiança sem precisar recorrer
                  a cobrança constante ou manipulação.
                  Aprenda a escutar de verdade e a expressar necessidades de forma que as pessoas queiram colaborar.
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-between">
                <a
                  href="#"
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#formMultiStepModal"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Workshop introdutório</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;