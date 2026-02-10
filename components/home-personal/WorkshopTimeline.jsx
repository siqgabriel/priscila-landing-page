'use client';
import React, { useEffect, useRef, useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';
import {
    FaBrain,
    FaBolt,
    FaProjectDiagram,
    FaHeart,
    FaComments,
    FaHandshakeSlash,
    FaBullseye,
    FaChartLine,
    FaCalendarAlt,
    FaClock,
    FaVideo,
    FaUsers,
    FaRocket,
    FaLayerGroup
} from 'react-icons/fa';

function WorkshopTimeline() {
    const lineRef = useRef(null);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            lineRef.current,
            { width: '0%' },
            {
                width: '100%',
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    const encontros = [
        { icon: <FaBrain />, event: 'Encontro 1', title: 'Consciência de Si', output: 'Clareza sobre quem você é e o seu papel como líder.' },
        { icon: <FaBolt />, event: 'Encontro 2', title: 'Liderar sob Pressão', output: 'Menos reatividade, mais escolha consciente.' },
        { icon: <FaProjectDiagram />, event: 'Encontro 3', title: 'Do Controle à Confiança', output: 'Delegação segura e autonomia no time.' },
        { icon: <FaHeart />, event: 'Encontro 4', title: 'Empatia na Liderança', output: 'Conexões que geram engajamento real.' },
        { icon: <FaComments />, event: 'Encontro 5', title: 'Comunicação Autêntica', output: 'Clareza, responsabilidade e menos ruído.' },
        { icon: <FaHandshakeSlash />, event: 'Encontro 6', title: 'Gestão de Conflitos', output: 'Transformar tensões em colaboração.' },
        { icon: <FaBullseye />, event: 'Encontro 7', title: 'Feedback Consciente', output: 'Conversas que desenvolvem pessoas.' },
        { icon: <FaChartLine />, event: 'Encontro 8', title: 'Sustentando a Liderança', output: 'Plano prático para aplicar no dia a dia.' },
    ];

    return (
        <section className="workshop-timeline section-padding ">
            <div className="container">

                {/* HEADER */}
                <div className="sec-head mb-60">
                    <span className="sub-title main-color mb-5">
                        Estrutura do Workshop
                    </span>

                    <h3 className="fw-600 fz-50 text-u d-rotate wow">
                        <span className="rotate-text">
                            8 encontros para <span className="fw-200">transformar sua liderança</span>
                        </span>
                    </h3>

                    <p className="mt-10">
                        Uma jornada prática, profunda e aplicada à sua realidade como líder.
                    </p>
                </div>

                {/* FORMATO — PREMIUM */}
                <div className="workshop-format-premium mb-80">
                    <div className="format-card">
                        <FaCalendarAlt />
                        <div>
                            <strong>Terças-feiras</strong>
                            <span>19h às 21h</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaVideo />
                        <div>
                            <strong>100% Online</strong>
                            <span>Google Meet</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaClock />
                        <div>
                            <strong>2 horas</strong>
                            <span>por encontro</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaUsers />
                        <div>
                            <strong>Formato coletivo</strong>
                            <span>vivencial e prático</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaRocket />
                        <div>
                            <strong>Início</strong>
                            <span>10/03/2026</span>
                        </div>
                    </div>

                    <div className="format-card">
                        <FaLayerGroup />
                        <div>
                            <strong>8 encontros</strong>
                            <span>até 05/05/2026</span>
                        </div>
                    </div>
                </div>

                {/* LINHA */}
                <div className="timeline-wrapper">
                    <div className="timeline-line" ref={lineRef}></div>

                    <div className="timeline-cards premium">
                        {encontros.map((item, index) => (
                            <div className="timeline-card premium" key={index}>
                                <div className='d-flex align-items-center' style={{gap:'20px'}}>
                                    <div className="timeline-icon">
                                        {item.icon}
                                    </div>
                                    <h4 className='fz-20 fw-200'>{item.event}</h4>
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.output}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-80">
                    <h5 className="mb-10">
                        Garanta sua vaga e comece essa jornada de transformação
                    </h5>
                    <button
                        onClick={() => setOpenForm(true)}
                        className="butn butn-md butn-bord-fo radius-30"
                    >
                        Inscreva-se no Workshop
                    </button>
                </div>
            </div>
            {/* MODAL */}
            <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
        </section>
    );
}

export default WorkshopTimeline;
