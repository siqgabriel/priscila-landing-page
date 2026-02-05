'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
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
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/priscila.png"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-15 col-lg-8">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30">
                  <img src="/assets/imgs/header/star.png" alt="" />
                </span>{' '}
                Para líderes que já cansaram de<br />cobrar performance sem conexão
              </h6>
              <h1 className="fw-700 mb-10">
                Liderar com mais
                <br />
                {' '}
                <span className="main-color">presença</span>
                {' '}e menos
                <br />
                desgaste emocional
              </h1>
              <div className="row">
                <div style={{ width: "100%" }}>
                  <div className="text mt-10">
                    <p className='p1'>
                      Descubra como exercer uma liderança mais íntegra, humana e estratégica, usando ferramentas poderosas da{' '}
                      <strong>
                        Comunicação Não Violenta que já transformaram centenas de líderes de grandes empresas.
                      </strong>
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta." target='_blank'
                      className="butn butn-md butn-bord radius-30"
                    >
                      Falar agora no WhatsApp {" "}
                      <i className="fab fa-whatsapp" style={{ fontSize: '20px', marginLeft: '10px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">atendimento@primila.com.br</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Telefone :</h6>
            <span className="p-color">(11) 98101-7106</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
