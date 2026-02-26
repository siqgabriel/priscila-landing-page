import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      event,
      nome,
      email,
      telefone,
      nascimento = '',     // fallback vazio
      cargo = '',
      empresa = '',
      tempoLider = '',
      dores = '',
      origem = '',
      recaptchaToken,
    } = body;

    // =========================
    // VALIDAR RECAPTCHA
    // =========================

    if (event === 'REGISTERED') {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA token ausente' },
          { status: 400 }
        );
      }

      const recaptchaRes = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        }
      );

      const recaptchaData = await recaptchaRes.json();

      if (!recaptchaData.success) {
        console.error('reCAPTCHA failed:', recaptchaData);
        return NextResponse.json(
          { error: 'Falha na verificação do reCAPTCHA' },
          { status: 403 }
        );
      }
    }


    // =========================
    // SMTP TRANSPORT
    // =========================

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 30000,   // ← 30s
      greetingTimeout: 30000,
      socketTimeout: 30000,
    });

    const to = ['gabriel@operion.com.br', 'pri.milanese@gmail.com'];

    let subject = '';
    let html = '';

    // =========================
    // TEMPLATES
    // =========================
    if (event === 'REGISTERED') {
      subject = '📝 Novo cadastro — Pagamento pendente';

      html = `
    <h2>Novo cadastro realizado</h2>
    <p><strong>Status:</strong> Pagamento pendente</p>
    <ul>
      <li><strong>Nome:</strong> ${nome || 'Não informado'}</li>
      <li><strong>Email:</strong> ${email || 'Não informado'}</li>
      <li><strong>Telefone:</strong> ${telefone || 'Não informado'}</li>
      <li><strong>Data de nascimento:</strong> ${nascimento || 'Não informado'}</li>
      <li><strong>Cargo atual e área:</strong> ${cargo || 'Não informado'}</li>
      <li><strong>Empresa:</strong> ${empresa || 'Não informado'}</li>
      <li><strong>Tempo como líder:</strong> ${tempoLider || 'Não informado'}</li>
      <li><strong>Principais dores/dúvidas:</strong> ${dores || 'Não informado'}</li>
      <li><strong>Como ficou sabendo?:</strong> ${origem || 'Não informado'}</li>
    </ul>
  `;
    }

    if (event === 'PIX_SELECTED') {
      subject = '💰 Pagamento via PIX selecionado';
      html = `
    <h2>PIX selecionado</h2>
    <p><strong>Status:</strong> Aguardando confirmação</p>
    <ul>
      <li><strong>Nome:</strong> ${nome || 'Não informado'}</li>
      <li><strong>Email:</strong> ${email || 'Não informado'}</li>
      <li><strong>Telefone:</strong> ${telefone || 'Não informado'}</li>
    </ul>
    <p><em>Observação: Pagamento manual via PIX (QR Code ou código copiado).</em></p>
  `;
    }

    if (event === 'CARD_SELECTED') {
      subject = '💳 Pagamento via Cartão selecionado';
      html = `
    <h2>Cartão selecionado</h2>
    <p><strong>Status:</strong> Aguardando confirmação no Asaas</p>
    <ul>
      <li><strong>Nome:</strong> ${nome || 'Não informado'}</li>
      <li><strong>Email:</strong> ${email || 'Não informado'}</li>
      <li><strong>Telefone:</strong> ${telefone || 'Não informado'}</li>
    </ul>
    <p><em>Link utilizado:</em> https://www.asaas.com/c/ihrq2yhz4ux3kcah</p>
  `;
    }

    if (!subject) {
      return NextResponse.json(
        { error: 'Evento inválido' },
        { status: 400 }
      );
    }

    // =========================
    // SEND EMAIL
    // =========================

    await transporter.sendMail({
      from: `"Workshop Liderança" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email API Error:', error);
    console.error('Error name:', error.name);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    if (error.response) {
      console.error('SMTP response:', error.response);
    }
    return NextResponse.json(
      { error: 'Erro ao enviar email', details: error.message },
      { status: 500 }
    );
  }
}
