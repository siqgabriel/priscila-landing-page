import React from 'react';

const etapas = [
  {
    num: '01',
    titulo: 'Lorem Ipsum',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    num: '02',
    titulo: 'Dolor Sit Amet',
    texto: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    num: '03',
    titulo: 'Consectetur',
    texto: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
  },
  {
    num: '04',
    titulo: 'Adipiscing Elit',
    texto: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
];

function Process() {
  return (
    <section
      id="processo"
      style={{ background: 'linear-gradient(135deg, #f3f0fb 0%, #eaf0fd 100%)', padding: '120px 0' }}
    >
      <div className="container">

        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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
          <h2 style={{ color: '#0f0f0f', fontWeight: 700, maxWidth: '540px', margin: '0 auto' }}>
            Lorem ipsum dolor{' '}
            <span style={{ fontWeight: 200, color: '#4b2f95' }}>sit amet consectetur.</span>
          </h2>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Linha conectora */}
          <div
            style={{
              position: 'absolute',
              top: '36px',
              left: '8%',
              right: '8%',
              height: '2px',
              background: 'linear-gradient(90deg, #4254b0, #a2b7e3)',
              zIndex: 0,
            }}
          />

          <div className="row" style={{ position: 'relative', zIndex: 1 }}>
            {etapas.map((e, i) => (
              <div className="col-lg-3 col-md-6" key={i} style={{ marginBottom: '30px' }}>
                <div style={{ textAlign: 'center' }}>
                  {/* Círculo numerado */}
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: i % 2 === 0 ? '#4254b0' : '#4b2f95',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      fontWeight: 800,
                      margin: '0 auto 28px',
                      boxShadow: '0 8px 24px rgba(66,84,176,0.25)',
                    }}
                  >
                    {e.num}
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      background: '#fff',
                      borderRadius: '18px',
                      padding: '28px 24px',
                      boxShadow: '0 4px 24px rgba(66,84,176,0.08)',
                      border: '1px solid #e8edfa',
                    }}
                  >
                    <h5 style={{ color: '#0f0f0f', fontWeight: 700, marginBottom: '12px' }}>{e.titulo}</h5>
                    <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{e.texto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;