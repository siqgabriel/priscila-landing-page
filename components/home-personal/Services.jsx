import React from 'react';

function Services() {
  return (
    <section className="services-clas mb-20 pt-140">
      <div className="container bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">
                O que sustenta meu trabalho
              </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Os pilares da <span className="fw-200">liderança consciente</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

          {/* Pilar 1 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/1.png" alt="Comunicação Não Violenta" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Comunicação Não Violenta
              </h5>
              <div className="text mt-20">
                <p>
                  Base de todo o meu trabalho. A CNV nos convida a nos comunicarmos a partir
                  da consciência dos nossos sentimentos, necessidades e intenções — criando
                  conexões mais reais, conversas mais honestas e relações mais saudáveis.
                </p>
              </div>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/2.png" alt="Autoconsciência" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Autoconsciência
                <br />
                <br />
              </h5>
              <div className="text mt-20">
                <p>
                  Liderar bem começa por se conhecer. Trabalho com líderes para que desenvolvam
                  clareza sobre seus padrões emocionais, valores e formas de se relacionar —
                  tornando suas escolhas mais intencionais e menos reativas.
                </p>
              </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="Relações de Confiança" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Relações de Confiança
                <br />
                <br />
              </h5>
              <div className="text mt-20">
                <p>
                  Equipes de alto desempenho se constroem sobre vínculos reais. Apoio líderes
                  a criarem ambientes onde pessoas se sentem vistas, ouvidas e seguras para
                  contribuir com o melhor de si.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          {/* Pilar 4 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="Liderança com Propósito" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Liderança com Propósito
              </h5>
              <div className="text mt-20">
                <p>
                  Uma liderança sustentável é aquela que está alinhada a quem você realmente é.
                  Ajudo líderes a reconectarem suas decisões e comportamentos ao que mais
                  importa — para si e para os outros.
                </p>
              </div>
            </div>
          </div>

          {/* Pilar 5 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="Aprendizagem Contínua" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Aprendizagem Contínua
              </h5>
              <div className="text mt-20">
                <p>
                  Com 20 anos em A&D em empresas como Natura&Co e Aramis, acredito que
                  o desenvolvimento humano é um processo vivo. Trago essa visão estratégica
                  de aprendizagem para cada processo que conduzo.
                </p>
              </div>
            </div>
          </div>

          {/* Pilar 6 */}
          <div className="col-lg-4" style={{ marginBottom: '30px' }}>
            <div className="item sub-bg-card">
              <div className="icon-img-serv mb-40">
                <img src="/assets/imgs/serv-icons/6.png" alt="Presença e Escuta" />
              </div>
              <h5 style={{ textTransform: 'uppercase' }}>
                Presença e Escuta
              </h5>
              <div className="text mt-20">
                <p>
                  A mudança começa quando alguém realmente nos ouve. Ofereço uma escuta
                  qualificada, sem julgamento, que cria o espaço necessário para que cada
                  líder encontre suas próprias respostas — com mais clareza e confiança.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;