import React from 'react';

const metricas = [
  { valor: '00+', label: 'Lorem Ipsum' },
  { valor: '00h', label: 'Dolor Sit Amet' },
  { valor: '00%', label: 'Consectetur' },
  { valor: '00+', label: 'Adipiscing Elit' },
];

function Numbers() {
  return (
    <section style={{ background: '#e8edfa', padding: '60px 0' }}>
      <div className="container">
        <div className="row">
          {metricas.map((m, i) => (
            <div className="col-lg-3 col-6" key={i}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '20px 10px',
                  borderRight: i < metricas.length - 1 ? '1px solid #c5d0f5' : 'none',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '56px',
                    fontWeight: 800,
                    color: '#4254b0',
                    lineHeight: 1,
                    marginBottom: '10px',
                  }}
                >
                  {m.valor}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#4b2f95',
                    fontWeight: 600,
                  }}
                >
                  {m.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Numbers;