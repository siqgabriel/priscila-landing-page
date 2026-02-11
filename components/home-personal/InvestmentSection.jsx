'use client';
import React, { useState } from 'react';
import LeadFormModal from './LeadFormModal';

function InvestmentSection() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <section className="investment-section section-padding" id='preco'>
            <div className="container">

                {/* HEADER */}
                <div className="sec-head text-center mb-40">
                    <span className="sub-title main-color mb-10">Investimento</span>

                    <h3 className="fw-600 fz-50 text-u d-rotate wow">
                        <span className="rotate-text">
                            Escolha a melhor forma para<span className="fw-200"> garantir sua vaga</span>
                        </span>
                    </h3>

                    <p className="mt-10">
                        Condições especiais para esta turma. Vagas limitadas.
                    </p>
                </div>

                {/* CARDS */}
                <div className="investment-grid">

                    {/* PIX — DESTAQUE */}
                    <div className="investment-card investment-card-primary">
                        <div className="investment-badge">
                            Melhor condição
                        </div>

                        <h4 className="investment-title">
                            À vista no PIX
                        </h4>

                        <div className="investment-price">
                            <span className="currency">R$</span>
                            <span className="value">997</span>
                            <span className="cents">,00</span>
                        </div>

                        <p className="investment-desc">
                            Economia exclusiva para pagamento à vista.
                            Garanta <strong>10% de desconto</strong> no valor total.
                        </p>

                        <ul className="investment-benefits">
                            <li>✔ Acesso completo aos 8 encontros</li>
                            <li>✔ Material de apoio</li>
                            <li>✔ Experiência completa do workshop</li>
                            <li>✔ Confirmação imediata da vaga</li>
                        </ul>

                        <button
                            className="butn butn-md radius-30 w-100 success-pay-btn"
                            onClick={() => setOpenForm(true)}
                        >
                            💙 Pagar no PIX agora
                        </button>
                    </div>

                    {/* CARTÃO */}
                    <div className="investment-card">
                        <h4 className="investment-title">
                            Parcelado no cartão
                        </h4>

                        <div className="investment-price small">
                            <span className="value">12x</span>
                            <span className="currency"> R$</span>
                            <span className="value">99</span>
                            <span className="cents">,00</span>
                        </div>

                        <p className="investment-desc">
                            Ou outras opções de parcelamento no cartão de crédito.
                        </p>

                        <ul className="investment-benefits">
                            <li>✔ Até 12x no cartão</li>
                            <li>✔ Aprovação rápida</li>
                            <li>✔ Parcelamento direto pela Asaas</li>
                            <li>✔ Vaga garantida após aprovação</li>
                            <br />
                        </ul>


                        <button
                            className="butn butn-md radius-30 w-100 success-pay-btn"
                            onClick={() => setOpenForm(true)}
                        >
                            Continuar com cartão
                        </button>
                    </div>

                </div>
                {/* MODAL */}
                <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
            </div>
        </section>
    );
}

export default InvestmentSection;
