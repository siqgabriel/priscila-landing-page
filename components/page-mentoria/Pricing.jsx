'use client';
import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

const planos = [
    {
        destaque: false,
        badge: null,
        titulo: 'Lorem Ipsum',
        moeda: 'R$',
        valor: '000',
        centavos: ',00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        beneficios: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Sed do eiusmod tempor',
            'Incididunt ut labore et dolore',
        ],
    },
    {
        destaque: true,
        badge: 'Mais escolhido',
        titulo: 'Dolor Sit Amet',
        moeda: 'R$',
        valor: '000',
        centavos: ',00',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        beneficios: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Sed do eiusmod tempor',
            'Incididunt ut labore et dolore',
            'Magna aliqua ut enim',
            'Ad minim veniam quis',
        ],
    },
];

function Pricing() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <>
            <section className="investment-section section-padding bord-top-grd" id="preco">
                <div className="container">
                    <div className="sec-head mb-80">
                        <div className="d-flex align-items-center">
                            <div>
                                <span className="sub-title main-color mb-5">Lorem ipsum dolor sit amet</span>
                                <h3 className="fw-600 fz-50 text-u d-rotate wow">
                                    <span className="rotate-text">
                                        Lorem ipsum <span className="fw-200">dolor sit amet.</span>
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="investment-grid">
                        {planos.map((plano, index) => (
                            <div
                                key={index}
                                className={`investment-card${plano.destaque ? ' investment-card-primary' : ''}`}
                            >
                                {plano.badge && (
                                    <span className="investment-badge">{plano.badge}</span>
                                )}
                                <h5 className="investment-title">{plano.titulo}</h5>

                                <div className="investment-price">
                                    <span className="currency">{plano.moeda}</span>
                                    <span className="value">{plano.valor}</span>
                                    <span className="cents">{plano.centavos}</span>
                                </div>

                                <p className="investment-desc">{plano.desc}</p>

                                <ul className="investment-benefits">
                                    {plano.beneficios.map((b, i) => (
                                        <li key={i}>✓ {b}</li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setOpenForm(true)}
                                    className={`butn butn-md radius-30 w-100 text-center${plano.destaque ? ' success-pay-btn' : ' butn-bord-thin'}`}
                                >
                                    Lorem ipsum dolor
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
        </>
    );
}

export default Pricing;