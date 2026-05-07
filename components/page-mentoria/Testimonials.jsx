import React from 'react';

const depoimentos = [
    {
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.',
        nome: 'Lorem Ipsum',
        cargo: 'Dolor Sit — Amet Consectetur',
        inicial: 'L',
    },
    {
        texto: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        nome: 'Consectetur Adipiscing',
        cargo: 'Sed Do — Eiusmod Tempor',
        inicial: 'C',
    },
    {
        texto: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa deserunt.',
        nome: 'Tempor Incididunt',
        cargo: 'Labore — Et Dolore Magna',
        inicial: 'T',
    },
];

function Testimonials() {
    return (
        <section style={{ background: '#e8edfa', padding: '120px 0' }}>
            <div className="container">

                {/* Cabeçalho */}
                <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                    <span
                        style={{
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#4254b0',
                            fontWeight: 600,
                            display: 'block',
                            marginBottom: '14px',
                        }}
                    >
                        Lorem ipsum dolor sit
                    </span>
                    <h2 style={{ color: '#0f0f0f', fontWeight: 700, maxWidth: '500px', margin: '0 auto' }}>
                        Lorem ipsum dolor{' '}
                        <span style={{ fontWeight: 200, color: '#4b2f95' }}>sit amet consectetur.</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="row lg-marg">
                    {depoimentos.map((dep, i) => (
                        <div className="col-lg-4 col-md-6" key={i} style={{ marginBottom: '28px' }}>
                            <div
                                style={{
                                    background: '#fff',
                                    borderRadius: '20px',
                                    padding: '40px 32px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 4px 24px rgba(66,84,176,0.07)',
                                    border: '1px solid #d6e0f7',
                                }}
                            >
                                {/* Aspas */}
                                <div>
                                    <span
                                        style={{
                                            fontSize: '56px',
                                            lineHeight: 1,
                                            color: '#4254b0',
                                            fontWeight: 800,
                                            display: 'block',
                                            marginBottom: '18px',
                                        }}
                                    >
                                        "
                                    </span>
                                    <p style={{ color: '#444', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>
                                        {dep.texto}
                                    </p>
                                </div>

                                {/* Autor */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                        marginTop: '32px',
                                        paddingTop: '24px',
                                        borderTop: '1px solid #e8edfa',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '46px',
                                            height: '46px',
                                            borderRadius: '50%',
                                            background: i % 2 === 0 ? '#4254b0' : '#4b2f95',
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            flexShrink: 0,
                                        }}
                                    >
                                        {dep.inicial}
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontWeight: 700, fontSize: '15px', color: '#0f0f0f' }}>
                                            {dep.nome}
                                        </span>
                                        <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                            {dep.cargo}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials;