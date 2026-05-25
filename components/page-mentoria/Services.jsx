import React from 'react';

const etapas = [
  {
    num: '01',
    titulo: 'Encontro Inicial',
    texto: 'Conversamos sobre sua trajetória, contexto atual e o que você deseja desenvolver. Esse primeiro encontro serve para alinhar expectativas e definir o foco do processo.',
  },
  {
    num: '02',
    titulo: 'Diagnóstico e Escuta',
    texto: 'Aprofundamos o olhar sobre seus padrões de liderança, relacionamentos e pontos de desenvolvimento. A escuta qualificada é a base de tudo.',
  },
  {
    num: '03',
    titulo: 'Prática e Reflexão',
    texto: 'Em cada sessão, trabalhamos situações reais do seu dia a dia, aplicando ferramentas da CNV e desenvolvendo novas formas de pensar, sentir e agir como líder.',
  },
  {
    num: '04',
    titulo: 'Integração e Continuidade',
    texto: 'Consolidamos os aprendizados e construímos um plano prático para que as mudanças se sustentem no longo prazo — na sua rotina, no seu time e nas suas relações.',
  },
];

function Process() {
  return (
    <section
      id="como-funciona"
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
            Como a mentoria funciona
          </span>
          <h2 style={{ color: '#0f0f0f', fontWeight: 700, maxWidth: '540px', margin: '0 auto' }}>
            Um processo em etapas,{' '}
            <span style={{ fontWeight: 200, color: '#4b2f95' }}>construído com você.</span>
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