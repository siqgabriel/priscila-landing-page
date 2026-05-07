import React from 'react';

function Services() {
  return (
    <section className="services-clas mb-20 pt-140">
      <div className="container bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">
                Lorem ipsum dolor sit amet
              </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Lorem ipsum <span className="fw-200">dolor sit amet neque </span>
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
                Lorem ipsum dolor sit amet
              </h5>
              <div className="text mt-20">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-around" style={{ gap: '30px' }}>
                <a
                  href="#preco"
                  className="scroll-to-price"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Lorem ipsum dolor!</h6>
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
                Consectetur adipiscing elit
              </h5>
              <div className="text mt-20">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <h6 className="fw-200 fs-2">Lorem ipsum dolor!</h6>
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
                Sed do eiusmod tempor
              </h5>
              <div className="text mt-20">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-around" style={{ gap: '30px' }}>
                <a
                  href="#preco"
                  className="scroll-to-price"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Lorem ipsum dolor!</h6>
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
                Incididunt ut labore et dolore
              </h5>
              <div className="text mt-20">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="flex align-items-center mt-40 justify-content-around" style={{ gap: '30px' }}>
                <a
                  href="#preco"
                  className="scroll-to-price"
                >
                  <span className="ti-arrow-top-right"></span>
                </a>
                <h6 className="fw-200 fs-2">Lorem ipsum dolor!</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;