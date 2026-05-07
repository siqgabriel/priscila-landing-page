'use client';

import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

function Intro() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section className="page-intro section-padding pb-0">
        <div className="container">
          <div className="row md-marg">
            <div className="col-lg-6">
              <div className="img md-mb80">
                <div className="row">
                  <div className="col-6">
                    <img src="/assets/imgs/intro/i1.jpg" alt="" />
                    <div className="img-icon">
                      <img src="/assets/imgs/arw0.png" alt="" />
                    </div>
                  </div>
                  <div className="col-6 mt-40">
                    <img src="/assets/imgs/intro/i2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div className="cont">
                <h3 className="mb-30">
                  Workshop Liderança Consciente é um convite para{' '}
                  <span className="fw-200">pausar, olhar para si</span> e liderar com mais{' '}
                  <span className="fw-200">clareza e intencionalidade.</span>
                </h3>
                <p>
                  Ao longo dos encontros, o participante desenvolverá uma liderança que substitui o controle pela confiança,
                  comunica com clareza e responsabilidade, constrói relações sólidas e gera engajamento genuíno.
                </p>
                <div className="d-flex align-items-center mt-60">
                  <button
                    onClick={() => setOpenForm(true)}
                    className="butn butn-md butn-bord radius-30"
                  >
                    Preencha o formulário
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MODAL */}
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}

export default Intro;