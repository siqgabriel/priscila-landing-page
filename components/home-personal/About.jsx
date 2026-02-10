'use client';
import React, { useState } from 'react';
import LeadFormModal from './LeadFormModal';

function About() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <section className="about-author mb-80 pt-20">
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
                  Atuei por duas décadas em Recursos Humanos, com forte atuação em Aprendizagem & Desenvolvimento em empresas como <strong>Natura&Co</strong> e <strong>Aramis</strong>. Acompanhei de perto líderes, equipes e organizações em momentos de crescimento acelerado, fusões, reestruturações e grandes transformações culturais.
                </p>
                <br />
                <p>
                  Uma experiência internacional morando em Nova York ampliou minha visão sobre relações humanas. Foi lá que mergulhei na <strong>Comunicação Não Violenta (CNV)</strong>, participando do International Intensive Training pelo Center for Nonviolent Communication e desde então me venho me dedicando ao estudo e aplicação da CNV no meu dia-a-dia.
                </p>
                <br />
                <p className="mb-10">
                  Hoje uno essa experiência corporativa com a profundidade da CNV para ajudar líderes a construírem uma <strong>liderança mais consciente, presente e humana</strong> — sem perder estratégia, resultados ou autenticidade.
                </p>
                <br />
                <div className="d-flex flex-wrap" style={{ gap: '20px' }}>

                  <a
                    href="https://www.linkedin.com/in/priscila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="butn butn-md radius-30 butn-social-priscila d-flex align-items-center"
                  >
                    <i className="fab fa-linkedin-in" style={{ paddingRight: '10px' }}></i>
                    <span>LinkedIn Profissional</span>
                  </a>

                  <a
                    href="https://www.instagram.com/priscila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="butn butn-md radius-30 butn-social-priscila d-flex align-items-center gap-10"
                  >
                    <i className="fab fa-instagram" style={{ paddingRight: '10px' }}></i>
                    <span>Instagram</span>
                  </a>

                </div>

                <div className="d-flex align-items-center mt-60">
                  <button
                    onClick={() => setOpenForm(true)}
                    className="butn butn-md butn-bord radius-30"
                  >
                    Workshop Liderança Consciente
                    <i className="fas fa-arrow-right" style={{ fontSize: '18px', marginLeft: '10px' }}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL */}
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
}

export default About;