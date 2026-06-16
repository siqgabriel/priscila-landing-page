'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import LeadFormModal from '../common/LeadFormModal';

function Header() {
  const [openForm, setOpenForm] = useState(false);
  const [bgImage, setBgImage] = useState('/assets/imgs/header/priscila.png');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 440) {
        setBgImage('/assets/imgs/header/priscila-mobile.png');
      } else if (width >= 440 && width < 768) {
        setBgImage('/assets/imgs/header/priscila-mobile2.png');
      } else {
        setBgImage('/assets/imgs/header/priscila.png');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  }, [bgImage]);

  return (
    <>
      <div
        className="header header-personal valign bg-img"
        data-background={bgImage}
        data-overlay-dark="2"
      >
        <div className="container ontop mb-80 mt-80 mb-lg-80 mt-lg-20">
          <div className="row">
            <div className="col-15 col-lg-8">
              <div className="caption">

                <h1 className="fw-200 mb-10">
                  Liderança que
                  <br />
                  transforma de
                  <span
                    className="main-color fw-700"
                    style={{ textShadow: '0px 0px 15px #a2b7e3' }}
                  >
                    {' '}dentro para fora
                  </span>
                </h1>

                <div className="text mt-10">
                  <p className="p1">
                    Psicóloga, especialista em RH e mentora com 20 anos de experiência.{' '}
                    <strong>
                      Apoio líderes a desenvolverem uma liderança mais consciente, humana e eficaz — com base na Comunicação Não Violenta.
                    </strong>
                  </p>
                </div>

                <div className="d-flex align-items-center mt-60">
                  <button
                    onClick={() => setOpenForm(true)}
                    className="butn butn-md butn-bord radius-30"
                  >
                    Quero conhecer as soluções
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