'use client';
import React, { useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

function CTA() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <>
            <section className="section-padding" style={{ background: '#fff', padding: '120px 0' }}>
                <div className="container">
                    <div
                        style={{
                            borderRadius: '28px',
                            background: 'linear-gradient(135deg, #4b2f95 0%, #4254b0 100%)',
                            padding: '80px 60px',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Blur decorativo */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-60px',
                                right: '-60px',
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                pointerEvents: 'none',
                            }}
                        />

                        <span className="sub-title mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Lorem ipsum dolor sit amet
                        </span>
                        <h3 className="fw-600 mt-10 mb-20" style={{ color: '#fff' }}>
                            Lorem ipsum dolor sit{' '}
                            <span className="fw-200">amet consectetur</span>
                            <br />
                            adipiscing elit <span className="fw-200">sed do eiusmod.</span>
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 40px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua ut enim ad minim.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => setOpenForm(true)}
                                className="butn butn-md radius-30"
                                style={{ background: '#fff', color: '#4254b0', border: '1px solid #fff', fontWeight: 600 }}
                            >
                                Lorem ipsum dolor
                            </button>
                            <a
                                href="#processo"
                                className="butn butn-md butn-bord-thin radius-30"
                            >
                                Lorem ipsum
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
        </>
    );
}

export default CTA;