'use client';

import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

function Services() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section className="services-inline2 section-padding sub-bg3 bord-bottom-grd bord-top-grd">
        <div className="container ontop">
          <div className="sec-head mb-80">
            <div className="d-flex align-items-center">
              <div>
                <span className="sub-title main-color mb-5">Você não sai apenas com mais conhecimento.</span>
                <h3 className="fw-600 fz-50 text-u d-rotate wow">
                  <span className="rotate-text">
                    O que muda <span className="fw-200">depois do workshop.</span>
                  </span>
                </h3>
              </div>
              <div className="ml-auto vi-more">
                <button
                  onClick={() => setOpenForm(true)}
                  className="butn butn-sm butn-bord radius-30"
                >
                  <span>Inscreva-se</span>
                </button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="row md-marg align-items-end">
              <div className="col-lg-4">
                <div>
                  <span className="num">01</span>
                  <div>
                    <span className="sub-title main-color mb-10">Segurança</span>
                    <h2>
                      Mais segurança <span className="fw-200">para liderar</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text md-mb80">
                  <p>
                    Desenvolva confiança interna para tomar decisões, conduzir pessoas e sustentar
                    sua posição mesmo em cenários desafiadores.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img fit-img">
                  <img src="/assets/imgs/serv-img/1.jpg" alt="" />
                  <a href="#preco">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="row md-marg align-items-end">
              <div className="col-lg-4">
                <div>
                  <span className="num">02</span>
                  <div>
                    <span className="sub-title main-color mb-10">Comunicação</span>
                    <h2>
                      Mais clareza <span className="fw-200">para se posicionar</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text md-mb80">
                  <p>
                    Aprenda a expressar limites, expectativas e opiniões com objetividade e respeito,
                    sem medo de gerar conflito ou de ser mal interpretado.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img fit-img">
                  <img src="/assets/imgs/serv-img/2.jpg" alt="" />
                  <a href="#preco">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="item pb-0">
            <div className="row md-marg align-items-end">
              <div className="col-lg-4">
                <div>
                  <span className="num">03</span>
                  <div>
                    <span className="sub-title main-color mb-10">Equilíbrio</span>
                    <h2>
                      Menos desgaste <span className="fw-200">emocional</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text md-mb80">
                  <p>
                    Reduza o impacto emocional das pressões do dia a dia, aprendendo a regular
                    reações automáticas e a lidar melhor com situações difíceis.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img fit-img">
                  <img src="/assets/imgs/serv-img/3.jpg" alt="" />
                  <a href="#preco">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Services;