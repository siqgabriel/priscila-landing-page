'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import LeadFormModal from './LeadFormModal';

function Header() {
  const [openForm, setOpenForm] = useState(false);

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
    <>
      <div
        className="header header-personal valign bg-img"
        data-background="/assets/imgs/header/priscila.png"
        data-overlay-dark="2"
      >
        <div className="container ontop">
          <div className="row">
            <div className="col-15 col-lg-8">
              <div className="caption">
                <h6 className="mb-15" style={{ textTransform: 'uppercase' }}>
                  <span className="icon-img-50">
                    <img src="/assets/imgs/header/star.png" alt="" />
                  </span>{' '}
                  Workshop Liderança Consciente
                </h6>

                <h1 className="fw-200 mb-10" >
                  Lidere com
                  <br />
                  mais segurança e
                  <span className="main-color fw-700" style={{ textShadow: '0px 0px 15px #a2b7e3' }}>menos desgaste emocional.</span>
                </h1>

                <div className="text mt-10">
                  <p className="p1">
                    Descubra como exercer uma liderança que equilibra pessoas e performance, {' '}
                    <strong>
                      usando ferramentas da Comunicação Não Violenta que já transformaram centenas de líderes em grandes empresas.
                    </strong>
                  </p>
                </div>

                <div className="d-flex align-items-center mt-60">
                  <button
                    onClick={() => setOpenForm(true)}
                    className="butn butn-md butn-bord radius-30"
                  >
                    Garanta sua vaga agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Header;
