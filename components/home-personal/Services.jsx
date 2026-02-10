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
                <img src="/assets/imgs/serv-icons/7.png" alt="Conversas Difíceis" />
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
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/8.png" alt="Liderança Consciente" />
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
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/18.png" alt="Relações de Confiança" />
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

          {/* Card 4 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/9.png" alt="Relações de Confiança" />
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